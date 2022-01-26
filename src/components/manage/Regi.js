import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RegiContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px 10px 0px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.borderColor};
`;

const RegiTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;

const RegiContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const RegiTitleShape = styled.span`
  margin: 5px;
  color: rgb(0, 0, 0);
  margin-left: 15px;
`;

const RegiTextShape = styled.span`
  margin: 5px;
  color: rgb(0, 0, 0);
`;

export default function Regi({
  meet_no,
  meet_title,
  meet_content,
  meet_created,
  member,
  meet_view,
}) {
  return (
    <div>
      <Link
        to={{
          pathname: "/manage/regigroup",
          state: {
            meet_no,
          },
        }}
        style={{ textDecoration: "none", color: "black" }}
      >
        <RegiContainer>
          <RegiTitle>
            <RegiTitleShape>모임명</RegiTitleShape>
            <RegiTitleShape>모임내용</RegiTitleShape>
            <RegiTitleShape>생성날짜</RegiTitleShape>
          </RegiTitle>
          <RegiContent>
            <RegiTextShape>{meet_title}</RegiTextShape>
            <RegiTextShape>{meet_content}</RegiTextShape>
            <RegiTextShape>{meet_created}</RegiTextShape>
          </RegiContent>
        </RegiContainer>
      </Link>
      <Link
        to={{
          pathname: "/reopen",
          state: {
            meet_no,
          },
        }}
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="contained"
          style={{ marginRight: "20px", width: "130px" }}
        >
          모임 수정하기
        </Button>
      </Link>
    </div>
  );
}
