import React, { useState } from 'react';
import styled from '@emotion/styled/macro';

// 스타일
const TagInputContainer = styled.div`
  position: fixed;
  left: 100px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 480px;
  padding: 0 8px;
  border: 1px solid;
  border-radius: 6px;
`;

const TagContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 8px 0 0 0;
  list-style: none;
`;

const TagItem = styled.li`
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 8px;
  font-size: 14px;
  list-style: none;
  border-radius: 6px;
  margin: 0 8px 8px 0;
  background: #2e7d32;
`;

const TagTitle = styled.span``;

const TagCloseBtn = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  font-size: 14px;
  margin-left: 8px;
  color: #2e7d32;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
`;

const TagInpunt = styled.input`
  flex: 1;
  border: none;
  height: 46px;
  font-size: 14px;
  padding: 4px 0 0 0;
  :focus {
    outline: transparent;
  }
`;

function Tag() {
  const [tags, setTags] = useState([]);

  return (
    <TagInputContainer>
      <TagContainer>
        <TagItem>
          <TagTitle>최남라</TagTitle>
          <TagCloseBtn>&times;</TagCloseBtn>
        </TagItem>
      </TagContainer>
      <TagInpunt
        type="text"
        placeholder="입력 후 엔터를 눌러 태그를 추가 하세요."
      />
    </TagInputContainer>
  );
}

export default Tag;
