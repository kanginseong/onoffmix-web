import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PartContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px 10px 0px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.borderColor};
`;

const PartTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;

const PartContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const PartTitleShape = styled.span`
  margin: 5px;
  color: rgb(0, 0, 0);
  margin-left: 15px;
`;

const PartTextShape = styled.span`
  margin: 5px;
  color: rgb(0, 0, 0);
`;

export default function Part({
  meet_content,
  meet_created,
  meet_no,
  meet_title,
  meet_updated,
  meet_view,
  user_no,
}) {
  const token = localStorage.getItem("TOKEN");

  const fetchDeletePartList = () => {
    fetch("http://localhost:5000/deletepartlist", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        meet_no,
      }),
    })
      .then(res => res.json())
      .then(({ deletePartList }) => {
        if (deletePartList === true) {
          alert("모임에 나갔습니다.");
          window.location.reload();
        }
      });
  };

  return (
    <div>
      <PartContainer>
        <PartTitle>
          <PartTitleShape>모임명</PartTitleShape>
          <PartTitleShape>모임내용</PartTitleShape>
          <PartTitleShape>생성날짜</PartTitleShape>
        </PartTitle>
        <PartContent>
          <PartTextShape>{meet_title}</PartTextShape>
          <PartTextShape>{meet_content}</PartTextShape>
          <PartTextShape>{meet_created}</PartTextShape>
        </PartContent>
      </PartContainer>
      <Button
        variant="contained"
        style={{ marginRight: "20px", width: "130px" }}
        onClick={fetchDeletePartList}
      >
        모임 나가기
      </Button>
    </div>
  );
}
