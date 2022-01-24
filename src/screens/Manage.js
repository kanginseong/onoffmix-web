import { Button } from "@mui/material";
import styled from "styled-components";

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
  return (
    <Container>
      <h1 style={{ color: "#0095f6" }}>모임 관리하기</h1>
      <ButtonContainer>
        <Button
          variant="contained"
          style={{ marginRight: "20px", width: "130px" }}
        >
          만든 모임
        </Button>
        <Button
          variant="contained"
          style={{ marginRight: "20px", width: "130px" }}
        >
          참가 모임
        </Button>
      </ButtonContainer>
    </Container>
  );
}
