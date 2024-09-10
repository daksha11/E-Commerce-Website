import React from "react";
import styled from "styled-components";

const SidebarComponent = () => {
    return (
        <StyledWrapper>
            <div className="card">
                {/* <UserProfileComponent /> */}
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  /* before adding the img to the div with the 
"card-img" class, remove css styles 
.card-img .img::before and .card-img .img::after,
then set the desired styles for .card-img. */
.card {
  position:fixed;
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --main-color: #323232;
  --main-focus: #2d8cf0;
  width: 15%;
  height: 100vh;
  padding: 0.25rem;
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  border-radius: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  overflow-y: auto;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

export default SidebarComponent;