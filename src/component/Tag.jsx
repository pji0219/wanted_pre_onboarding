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

  // 태그 추가
  const addTagHandler = (event) => {
    // 입력된 글자에 공백이 있으면 공백 없앰
    let value = event.target.value.trim();

    // 이미 있는 태그가 아니고 value에 값이 있고 엔터키를 눌러야 태그가 입력 되게 함
    if (event.key === 'Enter' && !tags.includes(value) && value) {
      setTags([...tags, value]);

      // 태그가 추가되면 input창 비움
      event.target.value = '';
    }
  };

  // 태그 삭제
  const tagDeleteHandler = (idxTag) => {
    /* 
      클릭 이벤트로 map함수의 인덱스를 파라미터로 받아온 다음 그 인덱스에 해당하는 태그가 아닌것만 필터함
      즉 삭제되는 것과 동일한 효과
    */
    setTags(
      tags.filter((tag) => {
        return tag !== tags[idxTag];
      })
    );
  };

  return (
    <TagInputContainer>
      <TagContainer>
        {tags.map((tag, index) => (
          <TagItem key={index}>
            <TagTitle>{tag}</TagTitle>
            <TagCloseBtn onClick={() => tagDeleteHandler(index)}>
              &times;
            </TagCloseBtn>
          </TagItem>
        ))}
      </TagContainer>
      <TagInpunt
        type="text"
        placeholder="입력 후 엔터를 눌러 태그를 추가 하세요."
        onKeyUp={addTagHandler}
      />
    </TagInputContainer>
  );
}

export default Tag;
