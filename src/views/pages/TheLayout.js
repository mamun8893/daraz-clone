import React from "react";
import Header from "./common/Header";
import Main from "./common/Main";

const TheLayout = () => {
  return (
    <div className="main-layout">
      {/* Header */}
      <div className="header-warp">
        <Header />
      </div>
      {/* Main  */}
      <Main />
      {/* Footer  */}
      <div className="footer-warp"></div>
    </div>
  );
};

export default TheLayout;
