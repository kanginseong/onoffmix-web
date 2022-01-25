import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const FormWrapper = styled.div`
  border-radius: 3px;
  padding: 10px;
  background-color: #fafafa;
  border: 0.5px solid;
  margin: 20px 20px 0px 0px;
  box-sizing: border-box;
  form {
    margin-top: 35px;
    width: 100%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
`;

const InputTitle = styled.div`
  margin: auto 0px;
  margin-left: 10px;
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

export default function FormInfo(props) {
  const { register, handleSubmit } = useForm({ mode: "onChange" });

  const onSubmitValid = data => {
    props.setGroup([data, ...props.group]);
  };

  return (
    <div>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <InputContainer>
            <InputTitle>그룹명</InputTitle>
            <Input
              ref={register({ required: "" })}
              name="form_title"
              type="text"
              placeholder="그룹명을 입력해주세요"
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>그룹인원</InputTitle>
            <Input
              ref={register({ required: "" })}
              name="form_total"
              type="number"
              placeholder="그룹인원을 입력해주세요"
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>참가형태</InputTitle>
            <Input
              ref={register({ required: "" })}
              name="form_admission"
              type="text"
              placeholder="참가형태를 입력해주세요"
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>모집시작</InputTitle>
            <Input
              ref={register({ required: "" })}
              name="form_meet_start"
              type="text"
              placeholder="모집시작 시간을 입력해주세요"
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>모집끝</InputTitle>
            <Input
              ref={register({ required: "" })}
              name="form_meet_end"
              type="text"
              placeholder="모집끝 시간을 입력해주세요"
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>모임시작</InputTitle>
            <Input
              ref={register({ required: "" })}
              name="form_apply_start"
              type="text"
              placeholder="모임시작 시간을 입력해주세요"
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>모임끝</InputTitle>
            <Input
              ref={register({ required: "" })}
              name="form_apply_end"
              type="text"
              placeholder="모임끝 시간을 입력해주세요"
            />
          </InputContainer>
          <Button type="submit" variant="contained">
            그룹 설정
          </Button>
        </form>
      </FormWrapper>
    </div>
  );
}
