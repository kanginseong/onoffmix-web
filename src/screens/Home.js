import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Meet from "../components/meet/Meet";

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

export default function Home() {
  const [seeMeet, setSeeMeet] = useState();

  const logOut = () => {
    localStorage.removeItem("TOKEN");
    window.location.reload();
  };

  useEffect(() => {
    fetch(`http://localhost:5000/seemeet`)
      .then(res => res.json())
      .then(({ List }) => {
        setSeeMeet(List);
      });
  }, []);

  return (
    <Container>
      <h1 style={{ color: "#0095f6" }}>메인 페이지</h1>
      <ButtonContainer>
        <Link to="/open" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            style={{ marginRight: "20px", width: "130px" }}
          >
            모임 만들기
          </Button>
        </Link>
        <Link to="/manage" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            style={{ marginRight: "20px", width: "130px" }}
          >
            모임 관리하기
          </Button>
        </Link>
        <Button
          variant="contained"
          style={{ marginRight: "20px", width: "130px" }}
          onClick={logOut}
        >
          로그아웃
        </Button>
      </ButtonContainer>
      {seeMeet?.map(meet => (
        <Meet key={meet.meet_no} {...meet} />
      ))}
    </Container>
  );
}
