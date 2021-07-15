declare module 'MyModule/ComponentA' {
  export interface ComponentAProps {
    firstName: string;
    lastName: string;
  }

  const MyComponent: (props: ComponentAProps) => string;
  export default MyComponent;
}