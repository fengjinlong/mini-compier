export enum NodeTypes {
  NumberLiteral = "NumberLiteral",
  Program = "Program",
  StringLiteral = "StringLiteral",
  CallExpression = "CallExpression",
}
// export enum NodeType {
//   Root,
//   Number,
//   CallExpression,
// }
interface Node {
  type: NodeTypes;
}
export type ChildNode = NumberLiteralNode | CallExpressionNode;
export interface CallExpressionNode extends Node {
  name: string;
  params: ChildNode[];
  type: NodeTypes.CallExpression;
}
export interface RootNode extends Node {
  body: ChildNode[];
  type: NodeTypes.Program;
}
export interface NumberLiteralNode extends Node {
  value: string;
  type: NodeTypes.NumberLiteral;
}

export function createRootNode(): RootNode {
  return {
    type: NodeTypes.Program,
    body: [],
  };
}
export function createNumberNode(value: string): NumberLiteralNode {
  return {
    type: NodeTypes.NumberLiteral,
    value,
  };
}
export function createCallExpressionNode(name: string): CallExpressionNode {
  return {
    type: NodeTypes.CallExpression,
    name,
    params: [],
  };
}
