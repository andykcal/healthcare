import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const FormContainer = styled.form`
  width: 400px;
  border: 1px solid #ccc;
  padding: 20px;
  background-color: #f9f9f9;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const CheckBoxInput = styled.input`
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  background-color: green;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

function CheckBox() {
    const navigate=useNavigate();
    const [allCheck, setAllCheck] = useState(false);
    const [ageCheck, setAgeCheck] = useState(false);
    const [useCheck, setUseCheck] = useState(false);
    const[marketCheck,setMarketCheck]=useState(false);
    const handleSubmit = (event)=>{
      event.preventDefault();
    }
    const allBtnEvent = () => {
        setAllCheck(!allCheck);
        setAgeCheck(!allCheck);
        setUseCheck(!allCheck);
        setMarketCheck(!allCheck);
  };

  const ageBtnEvent = () => {
    setAgeCheck(!ageCheck);
  };

  const useBtnEvent = () => {
    setUseCheck(!useCheck);
  };
  const marketBtnEvent = () => {
    setMarketCheck(!marketCheck);
  };
  const handleCheckBox=()=>{
    if(ageCheck==true && useCheck==true){
        setAllCheck(true)
        navigate("/register")
    }else if(ageCheck==false||useCheck==false||marketCheck==false){
        alert("선택하지 않은 약정이 있습니다.")
   }
};
  return (
    <form onSubmit={handleSubmit}>
    <Wrapper>
      <FormContainer>
        <div>
          <Label>약관동의</Label>
          <div>
            <CheckBoxContainer>
              <CheckBoxInput
                type="checkbox"
                id="all-check"
                checked={allCheck}
                onChange={allBtnEvent}
              />
              <Label htmlFor="all-check">전체동의</Label>
            </CheckBoxContainer>
            <CheckBoxContainer>
              <CheckBoxInput
                type="checkbox"
                id="check1"
                checked={ageCheck}
                onChange={ageBtnEvent}
              />
              <Label htmlFor="check1">만 14세 이상입니다. (필수)</Label>
            </CheckBoxContainer>
            <CheckBoxContainer>
              <CheckBoxInput
                type="checkbox"
                id="check2"
                checked={useCheck}
                onChange={useBtnEvent}
              />
              <Label htmlFor="check2">이용약관 (필수)</Label>
            </CheckBoxContainer>
            <CheckBoxContainer>
                <CheckBoxInput
                type="checkbox"
                id="check3"
                checked={marketCheck}
                onChange={marketBtnEvent}
                />
                <Label htmlFor="check3">마케팅 동의(선택)</Label>
            </CheckBoxContainer>
          </div>
        </div>
        <SubmitButton onClick={handleCheckBox}>다음 페이지</SubmitButton>
      </FormContainer>
    </Wrapper>
    </form>
  );
}

export default CheckBox;
