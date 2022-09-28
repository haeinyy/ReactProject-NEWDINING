import React, { useState } from 'react';
import ReactModal from 'react-modal';

const MyModal = ({isOpen, onSubmit, onCancel}) => {
  const handleClickSubmit = () => {
    onSubmit({input});
  };
  const handleClickCancel = () => {
    onCancel();
  };
  const styleObj = {
    height: "150px"
  }
  const styleObj2 = {
    textAlign: "right"
  }

  let [input, setinput] = useState();

  return (
    <ReactModal isOpen={isOpen} input={input} style={styleObj}>
      <div>관리자 암호</div>
      <input onChange={ (e)=>{ setinput(e.target.value) } } />
      <div style={styleObj2}>
      <button onClick={handleClickSubmit}>확인</button>
      <button onClick={handleClickCancel}>닫기</button>
      </div>
    </ReactModal>
  );
};

export default MyModal;