import React from "react";
import { DefaultNodeModel } from "@projectstorm/react-diagrams";
import createEngine, {
  DefaultLinkModel,
  DiagramModel,
} from "@projectstorm/react-diagrams";
import WorkspaceWidget, { DemoButton } from "../custom-node-ts/WorkspaceWidget";
import { CanvasWidget } from "@projectstorm/react-canvas-core";

// export interface BodyWidgetProps {
//   engine: DiagramEngine;
// }

// export class BodyWidget extends React.Component<BodyWidgetProps> {
//   render() {
//     return (
//       <CanvasWidget className="diagram-container" engine={this.props.engine} />
//     );
//   }
// }

// const engine = createEngine();

// // register the two engines
// engine.getNodeFactories().registerFactory(new TSCustomNodeFactory());

// // create a diagram model
// const model = new DiagramModel();

// //####################################################
// // now create two nodes of each type, and connect them

// const node2 = new TSCustomNodeModel({ color: "rgb(0,192,255)" });
// node2.setPosition(200, 50);

// const link1 = new DefaultLinkModel();
// link1.setTargetPort(node2.getPort("in"));

// model.addAll(node2, link1);

// //####################################################

// // install the model into the engine
// engine.setModel(model);

// document.addEventListener("DOMContentLoaded", () => {
//   const root = createRoot(document.querySelector("#application"));
//   root.render(<BodyWidget engine={engine} />);
// });

const engine = createEngine();

// node 1
const node1 = new DefaultNodeModel({
  name: "Client",
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
// link.addLabel("Hello World!");

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
