import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, {
  Controls,
  Background,
  addEdge,
  Connection,
  Edge,
  EdgeTypes,
  Node,
  MiniMap,
  useEdgesState,
  useNodesState,
  ReactFlowProvider,
} from "reactflow";
import TempNode from "../custom-node-ts/TempNode";
import '../custom-node-ts/nodestyle.css';
import "reactflow/dist/style.css";
import InsertNodeButton from '../InsertNodeButton';
import styled from 'styled-components';

//const initBgColor = '#1A192B';
const connectionLineStyle = { stroke: '#fff' };
//const snapGrid = [20, 20]; //props list
const nodeTypes = {
  Frontend : TempNode,
  Backend : TempNode,
  Database : TempNode,
};
const initialNodes = [
  {
    id: '0',
    type: 'input',
    data: { label: 'Node' },
    position: { x: 0, y: 50 },
  },
];



const FlowPannel = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodeId, setNodeId] = useState(0);
  //const [nodeColor, setnodeColor] = useState('white');

  const nodeColor = (node) => {
    switch (node.type) {
      case 'Frontend':
        return '#E06F50';
      case 'Backend':
        return '#7A77F7';
      case 'Database':
        return '#FCE86C';
    }
  };

  useEffect(() => {
    const onChange = (event) => {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id !== '2') {
            return node;
          }

          const label = event.target.value;

          //setBgColor(color);
          if(label==='Backend'){
          
          }

          return {
            ...node,
            data: {
              ...node.data,
              label,
            },
          };
        })
      );
    };

    setNodes([
      {
        id: '1',
        type: 'Frontend',
        data: { label: 'Frontend node' },
        position: { x: 0, y: 50 },
        sourcePosition: 'right',
      },
      {
        id: '2',
        type: 'Backend',
        data: { label: 'Backend node', /*onChange: onChange*/ },
        position: { x: 300, y: 50 },
      },
      {
        id: '3',
        type: 'Database',
        data: { label: 'Database node' },
        position: { x: 650, y: 0},
        targetPosition: 'left',
      },
      {
        id: '4',
        type: 'Database',
        data: { label: 'Database node' },
        position: { x: 650, y: 200 },
        targetPosition: 'left',
      },
    ]);

    setEdges([
      {
        id: 'e1-2',
        source: '1',
        target: '2',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e2a-3',
        source: '2',
        target: '3',
        sourceHandle: 'a',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e2b-4',
        source: '2',
        target: '4',
        sourceHandle: 'b',
        animated: true,
        style: { stroke: '#fff' },
      },
    ]);
  }, []);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, eds)),
    []
  );

  const tempAddFrontend = ()=>{
  }

  const tempAddBacktend = ()=>{
  }

  const tempAddDatabase = () =>{
  }

  return (
    <ReactFlowProvider>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        style={{background : '#303337'}}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        //snapGrid={snapGrid}
        defaultZoom={1.5}
        fitView
        attributionPosition="bottom-left"
      >
      
      <MiniMap
        nodeColor={nodeColor}
        // nodeStrokeColor={(n) => {
        //   if (n.type === 'input') return '#0041d0';
        //   if (n.type === 'selectorNode') return bgColor;
        //   if (n.type === 'output') return '#ff0072';
        // }}
        // nodeColor={(n) => {
        //   if (n.type === 'selectorNode') return bgColor;
        //   return '#fff';
        //   }}
        />
        <Controls />
      </ReactFlow>
    </ReactFlowProvider>
  );
};

export default FlowPannel;
