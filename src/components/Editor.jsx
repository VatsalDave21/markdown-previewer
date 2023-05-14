import React from "react";
import { Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { markdownAction } from "../store/markDownSlice";
const Editor = () => {
  const dispatch = useDispatch();
  const markdownData = useSelector((state) => state.markdown.markdownData);

  const editorStyle = {
    width: "100%",
    height: "50vh",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px",
  };

  const updateHandler = (e) => {
    console.log(e.target.value);
    dispatch(markdownAction.updateMarkdown(e.target.value));
  };

  return (
    <div className="col-md-6">
      <h4>
        <Badge bg="secondary">Markdown Input</Badge>
      </h4>
      <div className="mark-input container-nd-fluid">
        <textarea
          name=""
          className="input"
          id="editor"
          style={editorStyle}
          value={markdownData}
          onChange={updateHandler}
        ></textarea>
      </div>
    </div>
  );
};

export default Editor;
