import "../css/Block.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Block = () => {
  let codeString = `import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Component = () => {
  const codeString = '(num) => num + 1';
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};`;

  return (
    <div className="mainn">
      <div className="container">
        <div className="nav-items">
          <p className="heading">App.jsx</p>
          <button
            className="copy-btn"
            onClick={() => {
              navigator.clipboard.writeText(codeString);
            }}
          >
            <ion-icon name="copy-outline"></ion-icon>
          </button>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={atomOneDark}
          customStyle={{ padding: "25px" }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Block;
