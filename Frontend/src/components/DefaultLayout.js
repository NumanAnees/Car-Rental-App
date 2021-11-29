import React from "react";

function DefaultLayout(props) {
  return (
    <div>
      <div className="header box-shadow1">
        <div className="d-flex justify-content-between logo-main">
          <h1>Sandhu Cars</h1>
          {/* <button>user</button> */}
        </div>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
