import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="antialiased bg-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
