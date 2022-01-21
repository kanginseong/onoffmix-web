import { useEffect, useState } from "react";
import styled from "styled-components";
import Form from "../components/meet/Form";

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  @media screen and (max-width: 900px) {
    width: 90%;
  }
  margin: 50px;
`;

export default function Detail({ location }) {
  const [seeForm, setSeeForm] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/seemeet/detail/${location.state.meet_no}`)
      .then(res => res.json())
      .then(({ seeForm }) => {
        setSeeForm(seeForm);
      });
  }, []);

  return (
    <Container>
      <h1 style={{ color: "#0095f6" }}>모임 상세</h1>
      {seeForm?.map(form => (
        <Form key={form.form_no} {...form} />
      ))}
    </Container>
  );
}
