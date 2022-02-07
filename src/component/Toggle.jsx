import React, { useState } from 'react';
import styled from '@emotion/styled/macro';

// 스타일
const ToggleContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 40%;
  width: 75px;
  height: 35px;
  cursor: pointer;

  > .toggle {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background: linear-gradient(to left, #8b8b8b 50%, #228be6 50%) right;
    background-size: 200%;
    transition: 1s;

    &.toggle-on {
      background: linear-gradient(to right, #228be6 50%, #8b8b8b 50%) left;
      background-size: 200%;
      transition: 1s;
    }
  }

  > .toggle-ball {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    transition: 1s;

    &.toggle-on {
      left: 41px;
      transition: 1s;
    }
  }
`;

const ToggleStatus = styled.div`
  position: fixed;
  top: 60px;
  left: 40%;
  display: flex;
  justify-content: center;
`;

function Toggle() {
  const [toggleOn, setToggleOn] = useState(false);

  const toggleHandler = () => {
    setToggleOn(!toggleOn);
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle ${toggleOn ? 'toggle-on' : ''}`}></div>
        <div className={`toggle-ball ${toggleOn ? 'toggle-on' : ''}`}></div>
      </ToggleContainer>
      <ToggleStatus>{toggleOn ? '토글 on' : '토글 off'}</ToggleStatus>
    </>
  );
}

export default Toggle;
