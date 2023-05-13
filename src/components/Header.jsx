import React from "react";
import { Badge } from "react-bootstrap";
const Header = () => {
  return (
    <div className="row mt-4">
      <div className="col text-center">
        <h1>
          <Badge
            className="text-align-center"
            bg="light"
            style={{ color: "black" }}
          >
            Markdown Previewer
          </Badge>
        </h1>
      </div>
    </div>
  );
};

export default Header;
