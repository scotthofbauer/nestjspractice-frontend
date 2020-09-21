/// <reference types="react-scripts" />

declare module '*.md' {
  const content: string;
  export default content;
}

declare module '*.mdx' {
  import { ComponentType } from 'react';
  const content: ComponentType<any>;
  export default content;
}
