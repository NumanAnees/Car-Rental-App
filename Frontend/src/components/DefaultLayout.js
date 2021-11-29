import React from "react";

function DefaultLayout(props) {
  return (
    <div>
      <div className="header box-shadow1">
        <div className="d-flex justify-content-between logo-main">
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "1.4rem",
                marginLeft: "10px",
                marginTop: "10px",
              }}
            >
              ⚙️ Sandhu Cars
            </h1>
          </div>
          {/* <button>user</button> */}
        </div>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
