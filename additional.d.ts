export {};

declare global {
  declare module '*.svg?img' {
    const content: string;

    export default content;
  }
}
