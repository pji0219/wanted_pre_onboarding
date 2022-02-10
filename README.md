# 원티드 프리온보딩 코스

## 사용 기술

emotion, react

## 실행 방법

프로젝트 루트 디렉토리로 들어 가신 후 npm i 명령어를 입력 하여 디펜던시를 설치 후 npm start 명령어를 입력 해 실행 하시면 됩니다.

## 1. Tab

먼저 먼저 스타일링을 어떻게 하였는지 부터 설명 드리겠습니다.

```js
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
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ active }) => (active ? `#ff7043` : `none`)};
`;
```

탭을 구현하기 위해 위 코드와 같이 탭 컨테이너를 `ul`태그로 그 안에 탭을 `li`태그로 만든 뒤 수평으로 나열하기 위해 `display: flex;`로 주고 탭을 가운데로 정렬 되게 `justify-content: center;`로 주었습니다.  
그리고 탭을 클릭 하였을 때 탭의 배경 색이 변하는 동적 스타일링을 하기 위해 탭 스타일드 컴포넌트에 `props`를 주어서 `background`의 값이 변경되게 하였는데 이 와 관련해서는 아래의 기능 구현을 설명 할 때 보다 자세히 설명 하겠습니다.  
그리고 메뉴 컨텐츠가 보이는 영역을 `ContentArea`라는 이름의 스타일드 컴포넌트로 위 코드와 같이 만들고 탭을 클릭 했을 때 해당 영역의 배경이 보이도록 ContentArea 스타일드 컴포넌트에 `props`를 주어서 `background`의 값이 변경 되도록 하였는데 이와 관련해서는 아래의 기능 구현을 설명할 때 보다 자세히 설명하겠습니다.

다음으로는 기능 구현에 대하여 설명 드리겠습니다.

```js
const [menu, setMenu] = useState(null);
```

어떤 탭이 클릭이 되었는지 구분하기 위해 위 코드와 같이 `state`를 구현하였고 처음에는 아무 것도 클릭 되지 않은 상태이기에 초기값을 `null`로 설정해주었습니다.

```js
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
</TabContainer>;
```

탭 이름, 메뉴 인덱스 등을 위 코드와 같이 배열로 구현해주고 jsx안에서 `map`으로 돌려주어서 데이터가 전달 되도록 하였고
`TabItem` 스타일드 컴포넌트에 `onClick={() => setMenu(tab.menuIndex)}` 이벤트로 클릭시 해당 탭의 인덱스가 전달되고
이에 따라 현재 어떤 탭이 클릭 되었는지 알 수 있게 하였으며 `props`로 `active={menu === tab.menuIndex ? true : false}` 이렇게
삼항 연산자로 `state`값이 탭의 인덱스와 같은지 여부에 따라 `true` 또는 `false`가 전달 되도록 하였습니다.  
이렇게 함으로써 현재 `state`값과 `TabItem` 스타일드 컴포넌트의 인덱스 값이 같으면 해당 탭이 클릭 된 것이고 `props` 값으로
`true`를 전달 되게끔 하여 `backgroud`의 색이 동적으로 변경 되게끔 하였습니다.

```js
const menuList = {
  1: '👩‍💻프론트엔드 개발자가',
  2: '되고 싶어요😊',
};

<ContentArea active={menu}>
  <Content>{menuList[menu]}</Content>
</ContentArea>;
```

먼저 탭이 클릭 되었을 때 보여주고 싶은 컨텐츠를 위 코드와 같이 `menuList`객체에 담고 `ContentArea` 스타일드 컴포넌트에 `props`로 `state`값을 넣어주고 state 값이 있는지 여부에 따라 `background` 값이 동적으로 변경되도록 하여 탭이 클릭 되었을 때 `ContentArea`영역이 보이도록 하였습니다.  
그리고 컨텐츠는 `state`값에 따라 `menuList` 객체의 두개의 프로퍼티중 하나가 선택되어 보여지도록 해서 클릭된 탭에 따라서 보여지는 컨텐츠가 다르도록 하였습니다.

- 구현하면서 어려웠던 점과 해결 방법  
  저는 탭을 클릭했을 때 클릭된 탭의 색상이 변경 되는 것을 구현하는 것이 어려웠습니다.  
  고민을 해본 결과 스타일드 컴포넌트의 props로 클릭된 탭의 인덱스를 데이터로 넘기고 스타일드 컴포넌트의 backgroud의 값을 이렇게 삼항연산자로 `${({ active }) => (active ? `#e64a19`:`#ff7043`)};`로 준 뒤 props로 데이터가 전달 되면
  true가 되어서 색상이 변경이 되도록 하여 해결하였습니다.

---

## 2. Tag

먼저 스타일을 어떻게 구현 했는지부터 설명 드리겠습니다.

```js
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
```

위 코드와 같이 태그가 나타나는 부분과 input창 전체를 둘러싸는 TagInputContainer 스타일드 컴포넌트에 flex-wrap을 주어서 태그 숫자가 많아져서 전체 넓이에 다 채우면 태그 보여지는 부분과 input창이 묶여서 inpu창이 아래로 내려가지도록 하였습니다.  
그리고 최소 높이를 48px로 주어서 기본적인 높이는 48px로 하되 태그와 input창에 상태에 따라 높이가 가변적이 되도록 하였습니다.

```js
const TagContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 8px 0 0 0;
  list-style: none;
`;
```

위 코드와 같이 태그가 보여지는 부분을 `TagContainer` 스타일드 컴포넌트로 둘러싸고 `flex-wrap`을 주어서 태그를 묶어서 태그가 많아졌을 때 아래로 내려가도록 하였습니다.

다음으로는 기능 구현을 어떻게 하였는지에 대해 설명을 드리겠습니다.

```js
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

  <TagInpunt
    type="text"
    placeholder="입력 후 엔터를 눌러 태그를 추가 하세요."
    onKeyUp={addTagHandler}
  />;
};
```

태그 추가 기능은 위 코드와 같이 이벤트를 등록해주고 `addTagHandeler`함수 안에 `trim()`으로 입력값에 공백을 없애주고 `if`문으로 이미 있는 태그가 아니고 입력 값이 있고 엔터키를 눌러야 태그가 추가 되도록 하고 태그가 추가 되면 `input`창이 비워지게 구현 하였습니다.

```js
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

<TagContainer>
  {tags.map((tag, index) => (
    <TagItem key={index}>
      <TagTitle>{tag}</TagTitle>
      <TagCloseBtn onClick={() => tagDeleteHandler(index)}>&times;</TagCloseBtn>
    </TagItem>
  ))}
</TagContainer>;
```

태그 삭제 기능은 위 코드와 같이 `map`함수 안에 `tagDeleteHandler`함수를 클릭 이벤트로 등록 후 `tagDeleteHandler`함수의 파라미터로 `map`함수의 인덱스는 태그가 들어 있는 `state`의 배열의 인덱스 순서와 같으므로 `map`함수의 인덱스를 받아서 그 인덱스에 해당 하지 않는 태그들만 `filter`함수로 필터하여서 남겨 놓음으로써 삭제된 것과 같은 효과를 내게끔 구현하였습니다.

- 어려웠던 점  
  어려웠던 점은 삭제 기능을 구현할 때 어떻게 하면 `map`함수로 렌더링 된 태그를 없앨 수 있을까 고민이 되었는데 태그가 들어 있는 `state` 배열에 순서는 곧
  `map`함수의 인덱스와 순서가 같다는 것이 생각이 나서 `map`함수의 인덱스를 이용하여 `filter`함수로 `map`함수의 인덱스와 같지 않은 항목만 남게 필터링 하여서 해결 하였습니다.

---

## 3. Modal

먼저 스타일링을 어떻게 하였는지 부터 설명 드리겠습니다.

```js
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;
```

모달창이 화면에 보여졌을 때 모달창 주위 배경이 회색으로 꽉 차게 되도록 하기 위해서 위 코드와 같이 `position: fixed`을 주고 `top`, `left`를 `0`을 주어서 뷰포트 위와 왼쪽에 바짝 붙도록 만들고 width와 height을 100%로 주었고 `background: rgba(0, 0, 0, 0.3);`를 주었습니다.  
그리고 `display: flex;`, `align-items: center;`, `justify-content: center;`를 주어서 모달창이 보여질때 화면 가운데에 오도록 하였습니다.

다음으로는 기능을 어떻게 구현하였는지 설명드리겠습니다.

```js
const [showModal, setShowModal] = useState(false);
```

먼저 모달을 보여줄지에 대한 `state`값을 위 코드와 같이 `boolean`으로 지정해주었고 초기값은 `false`로 하였습니다.

```js
const openModal = () => {
  setShowModal(true);
};

const closeModal = () => {
  setShowModal(false);
};

{
  showModal ? (
    <ModalBackground>
      <ModalContainer>
        <ModalCloseBtnContainer>
          <ModalCloseBtn onClick={closeModal}>닫기</ModalCloseBtn>
        </ModalCloseBtnContainer>
        <ModalTitle>안녕하세요!</ModalTitle>
        <ModalContent>반갑습니다😊</ModalContent>
      </ModalContainer>
    </ModalBackground>
  ) : (
    <ModalOpenBtnContainer>
      <ModalOpenBtn onClick={openModal}>모달 열기</ModalOpenBtn>
    </ModalOpenBtnContainer>
  );
}
```

그리고 위 코드와 같이 삼항연산자로 `state`값이 `true`이면 모달창이 렌더링 되게 하고 `state`값이 `false`일 때는 모달 열기 버튼이 렌더링 되게 하는 조건부 렌더링을 구현해 주었고 클릭시에 모달창을 열고 닫기 위한 이벤트 함수를 구현하여 그 안에 `state`값을 변경되게 하는 `setShowmodal()`을 넣어주었습니다.

---

## 4. Toggle

먼저 스타일링을 어떻게 구현하였는지부터 설명 드리겠습니다.

```js
> .toggle {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background: linear-gradient(to left, #8b8b8b 50%, #228be6 50%) right;
  background-size: 200%;
  transition: 1s;
```

토글의 배경은 위의 코드와 같이 토글을 끈 상태를 `div`태그에 `.toggle`이라는 클래스를 주어서 만든후 `linear-gradient`의 `첫번째 인자를 왼쪽 방향`으로, `두번째 인자로 회색 50%`, `세번째 인자로 푸른색 50%`를 주고 `background-size를 200%`로 주어서 한쪽 배경은 보이지 않게 가려서 토글을 끌시 푸른색에서 회색으로 왼쪽 방향으로 점점 채워지게끔 하였습니다.

```js
&.toggle-on {
  background: linear-gradient(to right, #228be6 50%, #8b8b8b 50%) left;
  background-size: 200%;
  transition: 1s;
}
```

토글을 켠 상태는 `div`태그에 `.toggle-on`이라는 클래스를 주어서 만든후
`linear-gradient`의 `첫번째 인자를 오른쪽 방향`으로, `두번째 인자로 푸른색 50%`, `세번째 인자로 회색 50%`를 주고 `background-size를 200%`로 주어서 한쪽 배경은 보이지 않게 가려서 토글을 켤시 회색에서 푸른색으로 오른쪽 방향으로 점점 채워지게끔 하였습니다.

```js
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
```

토글의 스위치볼 부분은 위 코드와 같이 모양을 만들고 스위치가 켜졌을 때 위치를 왼쪽으로부터 `41px` 멀어지게 만들어서
볼이 이동 하게끔 만들었습니다.

```js
const ToggleStatus = styled.div`
  position: fixed;
  top: 60px;
  left: 40%;
  display: flex;
  justify-content: center;
`;
```

토글의 상태를 나타내는 부분은 위 코드와 같이 토글 바로 아래에 만들었습니다.

다음으로 기능 구현을 어떻게 하였는지 설명 드리겠습니다.

```js
const [toggleOn, setToggleOn] = useState(false);
```

먼저 위 코드와 같이 토글이 켜졌는지 꺼졌는지를 구분하기 위해 `state`를 만들어 주고 초기값으로는 `false`를 주었습니다.  
그리고 클릭시 `state`를 반대로 변경하는 이벤트 함수를 만들어서 켜고 끌 수 있게 하였습니다.

```js
const toggleHandler = () => {
  setToggleOn(!toggleOn);
};

<>
  <ToggleContainer onClick={toggleHandler}>
    <div className={`toggle ${toggleOn ? 'toggle-on' : ''}`}></div>
    <div className={`toggle-ball ${toggleOn ? 'toggle-on' : ''}`}></div>
  </ToggleContainer>
  <ToggleStatus>{toggleOn ? '토글 on' : '토글 off'}</ToggleStatus>
</>;
```

다음으로는 토글 스위치 배경, 토글볼, 토글상태를 나타내는 `jsx`에 클릭 이벤트를 달고 클래스명이 `state`에 따라 동적으로 변경 되도록 `삼항 연산자`를
이용해 스타일의 변화를 주어서 토글이 클릭시 on/off 되는 기능을 구현하였습니다.
