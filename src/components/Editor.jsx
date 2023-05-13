import React from "react";
import { Badge } from "react-bootstrap";
const Editor = () => {
  const editorStyle = {
    width: "400px",
    height: "50vh",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px",
  };
  return (
    <div className="col-md-6">
      <h4>
        <Badge bg="secondary">Markdown Input</Badge>
      </h4>
      <div className="mark-input">
        <textarea
          name=""
          className="input"
          id="editor"
          style={editorStyle}
        ></textarea>
      </div>
    </div>
  );
};

export default Editor;
