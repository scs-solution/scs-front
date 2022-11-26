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
import TempEdge from "../custom-node-ts/TempEdge"
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

const edgeTypes = {
  custom: TempEdge,
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

  const nodeColor = (node) => { //minimap color
    switch (node.type) {
      case 'Frontend':
        return '#F5A59D';
      case 'Backend':
        return '#9FA6FF';
      case 'Database':
        return '#FCE86C';
    }
  };

  useEffect(() => {

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
        data: { label: 'Backend node' },
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
        type: 'custom',
        source: '1',
        target: '2',
        animated: true,
      },
      {
        id: 'e2a-3',
        type: 'custom',
        source: '2',
        target: '3',
        sourceHandle: 'a',
        animated: true,
      },
      {
        id: 'e2b-4',
        type: 'custom',
        source: '2',
        target: '4',
        sourceHandle: 'b',
        animated: true,

      },
    ]);
  }, []);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, eds)),
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
        style={{background : '#303337'}}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        //snapGrid={snapGrid}
        defaultZoom={1.5}
        fitView
        attributionPosition="bottom-left"
      >
      
      <MiniMap
        nodeColor={nodeColor}
        />
        <Controls />
        <Background />
      </ReactFlow>
    </ReactFlowProvider>
  );
};

export default FlowPannel;
