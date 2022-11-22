import styled from "styled-components";
import FlowPannel from "../components/diagram/FlowPannel";

const Pannel = styled.div`
  width: 500px;
  height: 500px;
`;

export default function FlowTestPage() {
  return (
    <Pannel>
      {" "}
      <FlowPannel />
    </Pannel>
  );
}
