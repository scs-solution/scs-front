import React from "react";
import { DefaultNodeModel } from "@projectstorm/react-diagrams";
import createEngine, {
  DefaultLinkModel,
  DiagramModel,
} from "@projectstorm/react-diagrams";
import WorkspaceWidget, { DemoButton } from "../components/custom-node-ts/WorkspaceWidget";
import { CanvasWidget } from "@projectstorm/react-canvas-core";


const engine = createEngine();

// node 1
const node1 = new DefaultNodeModel({
  name: "Instance name",
  color: "rgb(0,192,255)",
});
node1.setPosition(100, 100);
let port1 = node1.addOutPort("Out");

// node 2
const node2 = new DefaultNodeModel({
  name: "Server",
  color: "rgb(192,255,0)",
});
node2.setPosition(200, 100);
let port2 = node2.addInPort("Int");

const link = port1.link<DefaultLinkModel>(port2);
link.addLabel("etc numbers");

const tnode1 = new DefaultNodeModel({
  name: "tempnode",
  color: "rgb(255,255,0)",
});
tnode1.setPosition(100, 200);

const model = new DiagramModel();
model.addAll(node1, node2, link);
engine.setModel(model);

export default function DiagramPannel() {
  return (
    <WorkspaceWidget
      buttons={[
        <DemoButton key={1}>Enable canvas drag</DemoButton>,
        <DemoButton key={2}>Disable canvas drag</DemoButton>,
      ]}
    >
      <CanvasWidget className="diagram-container" engine={engine} />
    </WorkspaceWidget>
  );
}
