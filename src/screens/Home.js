import { useEffect, useState } from "react";
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

export default function Home() {
  const [seeMeet, setSeeMeet] = useState();

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
      {seeMeet?.map(meet => (
        <Meet key={meet.meet_no} {...meet} />
      ))}
    </Container>
  );
}
