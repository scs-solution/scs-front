import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Page = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  padding: 0 20px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #f7f7f7;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const TitleWrap = styled.div`
  margin-top: 87px;
  font-size: 26px;
  font-weight: bold;
  color: #262626;
`;

const LoginForm = styled.form`
  margin-top: 26px;
  flex: 1;
`;

const InputTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #262626;
`;

const InputWrap = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 16px;
  margin-top: 8px;
  background-color: white;
  border: 1px solid #e2e0e0;
  &:focus-within {
    border: 1px solid #9e30f4;
  }
`;

const Input = styled.input.attrs({ placeholderTextColor: "#dadada" })`
  width: 100%;
  outline: none;
  border: none;
  height: 17px;
  font-size: 14px;
  font-weight: 400;
`;

const BottomButton = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  font-weight: bold;
  border-radius: 64px;
  background-color: #9e30f4;
  color: white;
  margin-bottom: 16px;
  cursor: pointer;
  &:disabled {
    background-color: #dadada;
    color: white;
  }
`;

const ErrorMessageWrap = styled.div`
  margin-top: 8px;
  color: #ef0000;
  font-size: 12px;
`;

function LoginPage() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const [idValid, setIdValid] = useState(false); //양식확인
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (idValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [idValid, pwValid]);

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    const regex = /^\w{4,20}$/;
    if (regex.test(e.target.value)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };

  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).{6,64}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  return (
    <Page>
      <TitleWrap>
        아이디와 비밀번호를
        <br />
        입력해주세요
      </TitleWrap>

      <LoginForm method="post" action="http://15.165.233.242:3000/api/v1/auth">
        <InputTitle>아이디</InputTitle>

        <InputWrap>
          <Input
            type="text"
            placeholder="4글자 이상 20글자 이하"
            value={id}
            name="userId"
            onChange={handleId}
          />
        </InputWrap>

        <ErrorMessageWrap>
          {!idValid && id.length > 0 && (
            <div>올바른 아이디을 입력해주세요.</div>
          )}
        </ErrorMessageWrap>

        <InputTitle style={{ marginTop: "26px" }}>비밀번호</InputTitle>

        <InputWrap>
          <Input
            type="password"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            name="password"
            value={pw}
            onChange={handlePw}
          />
        </InputWrap>

        <ErrorMessageWrap>
          {!pwValid && pw.length > 0 && (
            <div>
              올바른 패스워드를 입력해주세요. 특수문자 '?'는 제외입니다.
            </div>
          )}
        </ErrorMessageWrap>

        <BottomButton
          type="submit"
          // onClick={onClickConfirmButton}
          disabled={notAllow}
          value="로그인"
        />
      </LoginForm>
    </Page>
  );
}

export default LoginPage;
