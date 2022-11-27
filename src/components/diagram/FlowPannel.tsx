import { useEffect, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  addEdge,
  MiniMap,
  useEdgesState,
  useNodesState,
  ReactFlowProvider,
  Position,
} from "reactflow";
import TempNode from "../custom-node-ts/TempNode";
import TempEdge from "../custom-node-ts/TempEdge";
import "../custom-node-ts/nodestyle.css";
import "reactflow/dist/style.css";
import { getScsContextInstance } from "../../context/ScsContext";

//const initBgColor = '#1A192B';
const connectionLineStyle = { stroke: "#fff" };
//const snapGrid = [20, 20]; //props list
const nodeTypes = {
  Frontend: TempNode,
  Backend: TempNode,
  Database: TempNode,
};
const edgeTypes = {
  custom: TempEdge,
};

const FlowPannel = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const nodeColor = (node: any) => {
    //minimap color
    switch (node.type) {
      case "Frontend":
        return "#F5A59D";
      case "Backend":
        return "#9FA6FF";
      case "Database":
        return "#FCE86C";
    }
  };

  useEffect(() => {
    if (
      getScsContextInstance().infraDesc.instances === undefined ||
      getScsContextInstance().infraDesc.instances === null
    )
      return;

    setNodes([
      // {
      //   id: "1",
      //   type: "Frontend",
      //   data: { label: "Frontend node" },
      //   position: { x: 0, y: 50 },
      //   sourcePosition: Position.Right,
      // },
      // {
      //   id: "2",
      //   type: "Backend",
      //   data: { label: "Backend node" },
      //   position: { x: 300, y: 50 },
      // },
      // {
      //   id: "3",
      //   type: "Database",
      //   data: { label: "Database node" },
      //   position: { x: 650, y: 0 },
      //   targetPosition: Position.Left,
      // },
      // {
      //   id: "4",
      //   type: "Database",
      //   data: { label: "Database node" },
      //   position: { x: 650, y: 200 },
      //   targetPosition: Position.Left,
      // },
      ...getScsContextInstance().infraDesc.instances.map((e, i) => {
        return {
          type: "Frontend",
          id: i.toString(),
          position: { x: 0, y: 0 },
          data: { label: e.name, instance: e },
        };
      }),
    ]);

    // setEdges([
    //   {
    //     id: "e1-2",
    //     type: "custom",
    //     source: "1",
    //     target: "2",
    //     animated: true,
    //   },
    //   {
    //     id: "e2a-3",
    //     type: "custom",
    //     source: "2",
    //     target: "3",
    //     sourceHandle: "a",
    //     animated: true,
    //   },
    //   {
    //     id: "e2b-4",
    //     type: "custom",
    //     source: "2",
    //     target: "4",
    //     sourceHandle: "b",
    //     animated: true,
    //   },
    // ]);
  }, []);

  const onConnect = useCallback(
    (params: any) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, eds)
      ),
    []
  );

  return (
    <ReactFlowProvider>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        style={{ background: "#303337" }}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        fitView
        attributionPosition="top-left"
      >
        <MiniMap nodeColor={nodeColor} />
        <Controls />
        <Background />
      </ReactFlow>
    </ReactFlowProvider>
  );
};

export default FlowPannel;
