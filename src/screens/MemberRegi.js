import styled from "styled-components";
import { useEffect, useState } from "react";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import { CheckCircleOutlined } from "@mui/icons-material";

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  @media screen and (max-width: 900px) {
    width: 90%;
  }
  margin: 50px;
`;

export default function MemberRegi({ location }) {
  const [member, setMember] = useState();

  const token = localStorage.getItem("TOKEN");

  useEffect(() => {
    fetch(
      `http://localhost:5000/seeregilist/member/${location.state.form_no}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    )
      .then(res => res.json())
      .then(({ member }) => {
        setMember(member);
      });
  }, []);

  return (
    <Container>
      <h1 style={{ color: "#0095f6" }}>모임 맴버</h1>
      {/* {member?.map(member => (
        <RegiMember key={member.user_no} {...member} />
      ))} */}
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {member?.map(member => (
          <ListItem
            key={member.user_no}
            disableGutters
            secondaryAction={
              <IconButton>
                <CheckCircleOutlined />
              </IconButton>
            }
          >
            <ListItemText primary={`${member.user_name}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
