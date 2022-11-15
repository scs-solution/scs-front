import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { InfraInstance } from "../dtos/infra-desc.dtos";

const SSHPannel = styled.div`
  width: 100%;
  height: 600px;
`;

const SSHFrame = styled.iframe`
  width: 100%;
  height: 600px;
  display: block;
`;

const SSHPage = (props: { instance?: InfraInstance }) => {
  const [pk, setPk] = useState("");

  useEffect(() => {
    if (pk !== "") return;
    async function get() {
      const infraInfo = await axios.get(
        `http://www.rollrat.com/api/v1/user/pk`
      );
      setPk(infraInfo.data);
    }
    get();
  }, [pk]);

  if (pk === "") {
    return <></>;
  }

  const onLoad = () => {
    var ifrm = document.getElementsByTagName("iframe")[0],
      iwind = ifrm.contentWindow;

    iwind.postMessage(
      JSON.stringify({
        hostname: props.instance!.publicIp,
        port: "22",
        username: "ec2-user",
        privatekey: pk,
      }),
      "*"
    );

    //     (iwind as any).eval(`
    // var opts = {
    //   hostname: '${props.instance!.publicIp}',
    //   port: '22',
    //   username: 'ec2-user',
    //   privatekey: '${pk}',
    // };
    // wssh.connect(opts);
    // `);
  };

  return (
    <SSHPannel>
      <SSHFrame title="ssh" src="http://rollrat.com/ssh" onLoad={onLoad} />
    </SSHPannel>
  );
};

export default SSHPage;
