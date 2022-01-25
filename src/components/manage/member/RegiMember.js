import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px 0px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.borderColor};
`;

const FormTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const FormContent = styled.div`
  display: flex;
  justify-content: space-between;
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

export default function RegiMember({
  user_no,
  user_name,
  user_static,
  form_reason,
}) {
  return (
    <div>
      <FormContainer>
        <FormTitle>
          <FormTitleShape>이름</FormTitleShape>
          <FormTitleShape>승인여부</FormTitleShape>
          <FormTitleShape>참가이유</FormTitleShape>
        </FormTitle>
        <FormContent>
          <FormTextShape>{user_name}</FormTextShape>
          <FormTextShape>
            {user_static === "Y" ? "승인완료" : "승인대기"}
          </FormTextShape>
          <FormTextShape>{form_reason}</FormTextShape>
        </FormContent>
      </FormContainer>
    </div>
  );
}
