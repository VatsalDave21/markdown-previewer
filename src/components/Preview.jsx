import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const Preview = () => {
  const previewData = useSelector((state) => state.markdown.previewData);
  console.log(previewData);

  const previewStyle = {
    height: "50vh",
    backgroundColor: "#DCDCDC",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px",
    overflow: "auto",
  };

  return (
    <div className="col-md-6">
      <h4>
        <Badge className="text-align-center" bg="secondary">
          Preview
        </Badge>
      </h4>
      <div className="preview-container container-md-fluid">
        <div
          id="preview"
          style={previewStyle}
          dangerouslySetInnerHTML={{ __html: previewData }}
        ></div>
      </div>
    </div>
  );
};

export default Preview;
