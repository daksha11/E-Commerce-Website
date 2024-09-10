import React from "react";
import styled from "styled-components";
import UserProfileComponent from "./user_profile_component";

const SidebarComponent = () => {
    return (
        <StyledWrapper>
            <div className="card">
                <UserProfileComponent />
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
.card {
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --main-color: #323232;
  --main-focus: #2d8cf0;
  width: 15vw;
  height: 84vh;
  padding-right: 1rem;
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  border-radius: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-y: fixed;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

export default SidebarComponent;