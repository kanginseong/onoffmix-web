import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Form from "../components/meet/Form";

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  @media screen and (max-width: 900px) {
    width: 90%;
  }
  margin: 50px;
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 35px 0px 25px 0px;
  margin-bottom: 10px;
  form {
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
  }
`;

const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 7px;
  background-color: #fafafa;
  border: 0.5px solid
    ${props => (props.hasError ? "tomato" : props.theme.borderColor)};
  margin-top: 10px;
  box-sizing: border-box;

  &::placeholder {
    font-size: 14px;
  }
  & :focus {
    border-color: rgb(38, 38, 38);
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 3px;
  margin-top: 13px;
  background-color: #0095f6;
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  width: 100%;
`;

export default function Apply({ location }) {
  const { register, handleSubmit } = useForm({ mode: "onChange" });

  const token = localStorage.getItem("TOKEN");

  const fetchInMeet = async ({ form_reason }) => {
    const ok = await fetch(`http://localhost:5000/inmeet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        meet_no: location.state.meet_no,
        form_no: location.state.form_no,
        form_reason,
      }),
    }).then(res => res.json());
    return ok;
  };

  const onSubmitValid = async ({ form_reason }) => {
    const { inMeet } = await fetchInMeet({ form_reason });
    if (inMeet === false) {
      alert("이미 참가한 모임입니다.");
    }
  };

  return (
    <Container>
      <h1 style={{ color: "#0095f6" }}>신청하기</h1>
      <Wrapper>
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmitValid)}>
            <Input
              ref={register({
                required: "사용자 이름 넣으소",
              })}
              name="form_reason"
              type="text"
              placeholder="reason"
            ></Input>
            <Button type="submit" value="신청하기">
              신청하기
            </Button>
          </form>
        </FormContainer>
      </Wrapper>
    </Container>
  );
}
