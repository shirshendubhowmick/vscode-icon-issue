/// <reference path = "./ComponentA/index.d.ts" />

declare module 'MyModule' {
  export interface ComponentBProps {
    address: string;
    contactNumber: string;
  }

  const ComponentB: (props: ComponentBProps) => string;

  export default ComponentB;

  export { default as ComponentA, ComponentAProps } from 'MyModule/ComponentA';
}