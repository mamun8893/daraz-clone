import React from "react";
import Header from "./common/Header";

const TheLayout = () => {
  return (
    <div className="main-layout">
      {/* Header */}
      <div className="header-warp">
        <Header />
      </div>
      {/* Main  */}
      <main></main>

      {/* Footer  */}
      <div className="footer-warp"></div>
    </div>
  );
};

export default TheLayout;
