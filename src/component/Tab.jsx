import React, { useState } from 'react';
import styled from '@emotion/styled/macro';

// 스타일
const TabContainer = styled.ul`
  background: #ff7043;
  width: 600px;
  height: 50px;
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
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

const ContentArea = styled.div`
  width: 600px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ active }) => (active ? `#ff7043` : `none`)};
`;

const Content = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

// 메뉴들
const menuList = {
  1: '👩‍💻프론트엔드 개발자가',
  2: '되고 싶어요😊',
};

// 탭들
const tabs = [
  {
    id: 0,
    menuIndex: 1,
    name: 'Tab1',
  },
  {
    id: 1,
    menuIndex: 2,
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
      <ContentArea active={menu}>
        <Content>{menuList[menu]}</Content>
      </ContentArea>
    </>
  );
}

export default Tab;
