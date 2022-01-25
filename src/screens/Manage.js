import { Button } from "@mui/material";
import styled from "styled-components";
import Regi from "../components/manage/Regi";
import Part from "../components/manage/Part";
import { useEffect, useState } from "react";

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  @media screen and (max-width: 900px) {
    width: 90%;
  }
  margin: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

export default function Manage() {
  const [viewMeet, setViewMeet] = useState(true);
  const [meet, setMeet] = useState([]);

  const token = localStorage.getItem("TOKEN");

  useEffect(() => {
    fetch(`http://localhost:5000/seeregilist/meet`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(({ meet }) => {
        setMeet(meet);
      });
  }, []);

  return (
    <Container>
      <h1 style={{ color: "#0095f6" }}>모임 관리하기</h1>
      <ButtonContainer>
        <Button
          variant="contained"
          style={{ marginRight: "20px", width: "130px" }}
          onClick={() => setViewMeet(true)}
        >
          만든 모임
        </Button>
        <Button
          variant="contained"
          style={{ marginRight: "20px", width: "130px" }}
          onClick={() => setViewMeet(false)}
        >
          참가 모임
        </Button>
      </ButtonContainer>
      <div>
        {viewMeet ? (
          meet?.map(meet => <Regi key={meet.meet_no} {...meet} />)
        ) : (
          <Part />
        )}
      </div>
    </Container>
  );
}
