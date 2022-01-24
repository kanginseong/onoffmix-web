import { Button } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import FormInfo from "../components/form/FormInfo";

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  @media screen and (max-width: 900px) {
    width: 90%;
  }
  margin: 50px;
`;

const FormContainer = styled.div`
  form {
    margin-top: 35px;
    width: 100%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const InputTitle = styled.div`
  margin: auto 0px;
  margin-left: 20px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 85%;
  border-radius: 3px;
  padding: 10px;
  background-color: #fafafa;
  border: 0.5px solid;
  box-sizing: border-box;

  &::placeholder {
    font-size: 14px;
  }
  & :focus {
    border-color: rgb(38, 38, 38);
  }
`;

export default function Open() {
  const { register, handleSubmit } = useForm({ mode: "onChange" });

  const [data, setData] = useState([0]);

  console.log(data);

  const [formList, setFormList] = useState([0]);
  const [delList, setDelList] = useState([0]);

  const onAddComponents = () => {
    let countArr = [...formList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter);
    setFormList(countArr);
  };

  const deleteComponents = () => {
    setDelList(formList.length - 1);
  };

  const onSubmitValid = async data => {
    console.log(data);
  };

  return (
    <Container>
      <h1 style={{ color: "#0095f6" }}>모임 만들기</h1>

      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <InputContainer>
            <InputTitle>모임명</InputTitle>
            <Input
              ref={register({ required: "" })}
              name="meet_title"
              type="text"
              placeholder="모임명을 입력해주세요"
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>모임내용</InputTitle>
            <Input
              ref={register({ required: "" })}
              name="meet_content"
              type="text"
              placeholder="모임내용을 입력해주세요"
            />
          </InputContainer>
          <Button type="submit" variant="contained">
            모임 개설하기
          </Button>
        </form>
      </FormContainer>
      <Button
        onClick={onAddComponents}
        variant="contained"
        style={{ marginTop: "20px" }}
      >
        그룹 추가하기
      </Button>
      <Button
        onClick={deleteComponents}
        variant="contained"
        style={{ marginTop: "20px", marginLeft: "20px" }}
      >
        그룹 삭제하기
      </Button>
      <FormInfo addList={formList} setData={setData} />
    </Container>
  );
}
