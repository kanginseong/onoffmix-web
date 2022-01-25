import styled from "styled-components";
import { useEffect, useState } from "react";
import RegiGroup from "../components/manage/group/RegiGroup";

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  @media screen and (max-width: 900px) {
    width: 90%;
  }
  margin: 50px;
`;

export default function GroupRegi({ location }) {
  const [group, setGroup] = useState();

  const token = localStorage.getItem("TOKEN");

  useEffect(() => {
    fetch(`http://localhost:5000/seeregilist/group/${location.state.meet_no}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(({ group }) => {
        setGroup(group);
      });
  }, []);

  return (
    <Container>
      <h1 style={{ color: "#0095f6" }}>그룹 관리하기</h1>
      {group?.map(group => (
        <RegiGroup key={group.form_no} {...group} />
      ))}
    </Container>
  );
}
