import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import styled from "styled-components";

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
  margin-bottom: 10px;
  form {
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-items: space-between;
  }
`;

const Input = styled.input`
  width: 70%;
  border-radius: 3px;
  padding: 7px;
  background-color: #fafafa;
  border: 0.5px solid
    ${props => (props.hasError ? "tomato" : props.theme.borderColor)};
  margin-right: 10px;
  box-sizing: border-box;

  &::placeholder {
    font-size: 14px;
  }
  & :focus {
    border-color: rgb(38, 38, 38);
  }
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
    } else {
      alert("모임에 참가 완료했습니다.");
      window.location.replace("/");
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
            <Button type="submit" variant="contained">
              신청하기
            </Button>
          </form>
        </FormContainer>
      </Wrapper>
    </Container>
  );
}
