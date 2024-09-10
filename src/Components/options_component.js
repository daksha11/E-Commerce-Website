import React from "react";
import styled from "styled-components";
import home from "../Images/home.svg";
import about_us from "../Images/about_us.svg";
import cart from "../Images/cart.svg";
import purchased from "../Images/purchased.svg";

const OptionsComponent = () => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="option">
          <input
            className="input"
            type="radio"
            name="btn"
            value="option1"
            defaultChecked={true}
          />
          <div className="btn">
            <span className="span"><img src={home} alt="Home" style={{width: "1.4rem"}}/></span>
          </div>
        </div>
        <div className="option">
          <input className="input" type="radio" name="btn" value="option2" />
          <div className="btn">
            <span className="span"><img src={about_us} alt="About" style={{width: "1.4rem"}}/></span>
          </div>{" "}
        </div>
        <div className="option">
          <input className="input" type="radio" name="btn" value="option3" />
          <div className="btn">
            <span className="span"><img src={purchased} alt="Purchased" style={{width: "1.8rem"}}/></span>
          </div>{" "}
        </div>
        <div className="option">
          <input className="input" type="radio" name="btn" value="option4" />
          <div className="btn">
            <span className="span"><img src={cart} alt="Cart" style={{width: "1.4rem"}}/></span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .wrapper {
  --font-color-dark: Black;
  --font-color-light: #FFF;
  --bg-color: #fff;
  --main-color: Black;
  --shadow-color: #4a90e2;
  position: relative;
  width: 20.4rem;
  height: 2rem;
  background-color: var(--bg-color);
  border: 4px solid var(--main-color);
  border-radius: 34px;
  display: flex;
  flex-direction: row;
  box-shadow: 4px 4px var(--shadow-color);
}

.option {
  width: 80.5px;
  height: 28px;
  position: relative;
  top: 2px;
  left: 2px;
}

.input {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  appearance: none;
  cursor: pointer;
}

.btn {
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.span {
  color: var(--font-color-dark);
}

.input:checked + .btn {
  background-color: var(--main-color);
}

.input:checked + .btn .span {
  color: var(--font-color-light);
}
`;

export default OptionsComponent;
