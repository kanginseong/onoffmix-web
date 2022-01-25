import { Link } from "react-router-dom";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.borderColor};
`;

const FormTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const FormTitleShape = styled.span`
  margin: 5px;
  color: rgb(0, 0, 0);
  margin-left: 15px;
`;

const FormTextShape = styled.span`
  margin: 5px;
  color: rgb(0, 0, 0);
`;

export default function RegiGroup({
  meet_no,
  form_no,
  form_title,
  form_total,
  form_admission,
  form_apply_end,
  form_apply_start,
  form_meet_end,
  form_meet_start,
}) {
  return (
    <div>
      <Link
        to={{
          pathname: "/manage/regigroup/member",
          state: {
            form_no,
          },
        }}
        style={{ textDecoration: "none", color: "black" }}
      >
        <FormContainer>
          <FormTitle>
            <FormTitleShape>그룹명</FormTitleShape>
            <FormTitleShape>그룹인원</FormTitleShape>
            <FormTitleShape>참가형태</FormTitleShape>
            <FormTitleShape>모집시작</FormTitleShape>
            <FormTitleShape>모집끝</FormTitleShape>
            <FormTitleShape>모임시작</FormTitleShape>
            <FormTitleShape>모임끝</FormTitleShape>
          </FormTitle>
          <FormContent>
            <FormTextShape>{form_title}</FormTextShape>
            <FormTextShape>{form_total}</FormTextShape>
            <FormTextShape>
              {form_admission === "G" ? "개설자" : "선착순"}
            </FormTextShape>
            <FormTextShape>{form_apply_start}</FormTextShape>
            <FormTextShape>{form_apply_end}</FormTextShape>
            <FormTextShape>{form_meet_start}</FormTextShape>
            <FormTextShape>{form_meet_end}</FormTextShape>
          </FormContent>
        </FormContainer>
      </Link>
    </div>
  );
}
