import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import {
  CheckBox,
  CheckCircleOutlined,
  PlaylistAddCheckCircleOutlined,
} from "@mui/icons-material";
import { fontWeight } from "@mui/system";

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

  const fetchUpdateRegiList = user => {
    const state = "Y";
    fetch("http://localhost:5000/updateregilist", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        meet_no: location.state.meet_no,
        form_no: location.state.form_no,
        user2_no: user,
        formuser_state: state,
      }),
    })
      .then(res => res.json())
      .then(({ updatePartList }) => {
        if (updatePartList === true) {
          alert(`승인완료 되었습니다.`);
          window.location.reload();
        }
      });
  };

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
              `${member.formuser_state}` === "N" ? (
                <Button
                  variant="contained"
                  onClick={() => fetchUpdateRegiList(member.user_no)}
                >
                  승인하기
                </Button>
              ) : (
                <Button variant="contained">승인완료</Button>
              )
            }
          >
            <ListItemText
              primary={`${member.user_name}`}
              style={{
                margin: "10px 0px 0px 10px",
                fontWeight: "600",
                fontSize: "20px",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
