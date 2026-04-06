import React from "react";

const TopBar = () => {
  return (
    <div className="header-top-bar">
      <div className="container">
        <div className="ss-top-bar_wrap grid-2 gap-30 align-items-center">
          <div className="text-left overflow-hidden">
            Order by phone: (84) 943 446 000 | Shop our Spring Bounty Sale
          </div>

          <div className="top-bar-language tf-cur justify-content-end">
            <div className="ss-currencies">
              <select className="image-select center style-default type-languages">
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
            </div>
            <div className="tf-languages">
              <select className="image-select center style-default type-languages">
                <option>English</option>
                <option>العربية</option>
                <option>简体中文</option>
                <option>اردو</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
