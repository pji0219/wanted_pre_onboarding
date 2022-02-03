import React, { useState } from 'react';
import styled from '@emotion/styled/macro';

// 스타일
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

const ModalContainer = styled.div`
  background: white;
  padding: 24px 16px;
  border-radius: 4px;
  width: 320px;
`;

const ModalCloseBtnContainer = styled.div`
  text-align: right;
`;
const ModalCloseBtn = styled.button`
  width: 70px;
  height: 35px;
  border-radius: 4px;
  border: none;
  outline: none;
  background: #228be6;
  color: white;
  cursor: pointer;
`;

const ModalTitle = styled.h2``;

const ModalContent = styled.p`
  font-size: 18px;
`;

const ModalOpenBtnContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalOpenBtn = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 4px;
  border: none;
  outline: none;
  background: #228be6;
  color: white;
  cursor: pointer;
  font-size: 18px;
  margin-right: 10px;
`;

function Modal() {
  // 모달창을 닫고 열기 위한 state
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
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
      )}
    </>
  );
}

export default Modal;
