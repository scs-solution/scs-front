import React, { useState, useEffect } from "react";
import { getBezierPath } from "reactflow";
import styled from "styled-components";
import "./nodestyle.css";

const foreignObjectSize = 40;

const EdgeNumberWrapper = styled.div`
  width: 10px;
  height: 10px;
  color: white;
  font-size: 20px;
`;
export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: any) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const [edgeData, setEdgeData] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setEdgeData(Math.floor(Math.random() * 10));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });
  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={labelX - foreignObjectSize / 2}
        y={labelY - foreignObjectSize / 2}
        className="edgebutton-foreignobject"
      >
        <div>
          <EdgeNumberWrapper>{edgeData}</EdgeNumberWrapper>
        </div>
      </foreignObject>
    </>
  );
}
