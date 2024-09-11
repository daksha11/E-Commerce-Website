import React from 'react';
import styled from "styled-components";
import UserProfileComponent from "./user_profile_component.js";

const SidebarComponent = () => {
    return (
        <StyledWrapper>
            <div className="sidebar-card">
                <div>
                    <UserProfileComponent />
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
.sidebar-card {
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --main-color: #323232;
  --main-focus: #2d8cf0;
  width: 17vw;
  height: 100vh;
  padding-left: 1.5%;
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  border-radius: 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

export default SidebarComponent;