import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
// import { css } from '@emotion/react';

// 스타일
const TabContainer = styled.ul`
  background: #ff7043;
  width: 500px;
  height: 50px;
  list-style: none;
  display: flex;
  justify-content: center;
`;

const TabItem = styled.li`
  width: 200px;
  height: 50px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  background: ${({ active }) => (active ? `#e64a19` : `#ff7043`)};
`;

const ContentContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

// 메뉴 컴포넌트
const menuList = {
  0: 'sdfdf',
  1: 'sdfsdfsdf',
};

// 탭들
const tabs = [
  {
    id: 0,
    menuIndex: 0,
    name: 'Tab1',
  },
  {
    id: 1,
    menuIndex: 1,
    name: 'Tab2',
  },
];

function Tab() {
  const [menu, setMenu] = useState(null);

  return (
    <>
      <TabContainer>
        {tabs.map((tab) => (
          <TabItem
            key={tab.id}
            active={menu === tab.menuIndex ? true : false}
            onClick={() => setMenu(tab.menuIndex)}
          >
            {tab.name}
          </TabItem>
        ))}
      </TabContainer>
      <ContentContainer>
        <Content>{menuList[menu]}</Content>
      </ContentContainer>
    </>
  );
}

export default Tab;
