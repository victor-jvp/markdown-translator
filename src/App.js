import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import { marked } from 'marked';
import { sampleText } from './sampleText.js';
import './App.css';

export default function App() {

  const [markdown, setMarkdown] = useState(sampleText)

  function updateMarkdown(markdown) {
    setMarkdown(markdown)
  }

  marked.use({
    breaks: true,
  })

  const inputStyle = {
    width: "400px",
    height: "50vh",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px",
  };
  const outputStyle = {
    // width: "400px",
    display: 'block',
    backgroundColor: "#DCDCDC",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "1rem",
    boxSizing: 'border-box',
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row mt-4">
          <div className="col text-center">
            <h1>
              {" "}
              <Badge className="text-align-center" variant="light">
                Markdown Previewer
              </Badge>
            </h1>
          </div>
        </div>

        <div className="row mt-4">
          {" "}
          <div className="col text-center">
            <h4>
              <Badge className="text-align-center" variant="secondary">
                Markdown Input
              </Badge>
            </h4>
          </div>
          <div className="col-xs-12">            
            <textarea id="editor"
              className="form-control"
              // style={inputStyle}
              rows="20"
              value={markdown}
              onChange={(e) => {
                updateMarkdown(e.target.value);
              }}
            >
            </textarea>
          </div>
        </div>
        <div class="row mt-4">
          {" "}
          <div className="col text-center">
            <h4>
              <Badge className="text-align-center" variant="secondary">
                Preview
              </Badge>
            </h4>
          </div>
          <div className="col-xs-12">            
            <div id="preview"
              style={outputStyle}
              dangerouslySetInnerHTML={{
                __html: marked(markdown),
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}