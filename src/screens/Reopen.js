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
  width: 80%;
  border-radius: 3px;
  padding: 10px;
  background-color: #fafafa;
  border: 0.5px solid;
  box-sizing: border-box;
  margin-right: 30px;

  &::placeholder {
    font-size: 14px;
  }
  & :focus {
    border-color: rgb(38, 38, 38);
  }
`;

export default function Reopen({ location }) {
  const { register, handleSubmit } = useForm({ mode: "onChange" });

  const token = localStorage.getItem("TOKEN");

  const [group, setGroup] = useState([]);

  const fetchCreateMeet = async ({ meet_title, meet_content }) => {
    const ok = await fetch(`http://localhost:5000/updatemeet`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        meet_no: location.state.meet_no,
        meet_title,
        meet_content,
        group,
      }),
    }).then(res => res.json());
    console.log(ok);
    return ok;
  };

  const onSubmitValid = async ({ meet_title, meet_content }) => {
    const { createMeet } = await fetchCreateMeet({ meet_title, meet_content });
    if (createMeet === false) {
      alert("다시 시도해 주세요.");
    } else {
      alert("수정되었습니다.");
      window.location.replace("/manage");
    }
  };

  console.log(group);

  return (
    <Container>
      <h1 style={{ color: "#0095f6" }}>모임 수정하기</h1>

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
            모임 수정하기
          </Button>
        </form>
      </FormContainer>
      {/* <Button type="submit" variant="contained" style={{ marginTop: "20px" }}>
        그룹 추가하기
      </Button> */}
      <FormInfo setGroup={setGroup} group={group} />
    </Container>
  );
}
