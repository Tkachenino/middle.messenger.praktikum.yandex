declare module '*.hbs' {
  const content: <T>(T?) => string;
  export default content;
}
