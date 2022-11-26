import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import TempData from "./TempData";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const LabelWrapper = styled.div`
  text-align: left;
  font-size: 17px;
`;
const DataWrapper = styled.div`
  text-align: left;
  float: left;
  width: 70%;
`;
const ButtonWrapper = styled.div`
  text-align: center;
  float: right;
  width: 30%;
`;
const NodeBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default memo(({ data, isConnectable }: any) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <LabelWrapper>
        <strong>{data.label}</strong>
      </LabelWrapper>
      <NodeBody>
        <DataWrapper>
          <TempData></TempData>
        </DataWrapper>
        <ButtonWrapper className="d-grid gap-2">
          <Button variant="dark" size="sm">
            SSH
          </Button>{" "}
          <Button variant="dark" size="sm">
            Info
          </Button>
        </ButtonWrapper>
      </NodeBody>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 10, background: "#555" }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ bottom: 10, top: "auto", background: "#555" }}
        isConnectable={isConnectable}
      />
    </>
  );
});
