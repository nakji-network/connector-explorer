import Document, {Html, Head, Main, NextScript,DocumentContext, DocumentInitialProps} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html className="h-full"> 
        <Head/>
        <body className="h-full"> 
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;