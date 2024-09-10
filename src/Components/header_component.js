import React from "react";
import styled from "styled-components";
import logo from "../Images/ComicStan Logo.png";
import OptionsComponent from "./options_component.js";
import SearchComponent from "./search_component.js";

const HeaderComponent = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div style={{paddingLeft: "0.5rem", marginBottom: "0.1rem"}}>
            <SearchComponent />
        </div>
        <div style={{paddingLeft: "4rem"}}>
            <img src={logo} alt="ComicStan Logo" style={{width: "18rem"}}/>
        </div>
        <div style={{paddingRight: "0.5rem", marginBottom: "0.1rem"}}>
            <OptionsComponent />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
.card {
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --main-color: #323232;
  --main-focus: #2d8cf0;
  width: 99.7%;
  height: 13vh;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  border-radius: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

export default HeaderComponent;
