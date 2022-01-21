import { Link } from "react-router-dom";
import styled from "styled-components";

const MeetContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.borderColor};
`;

const MeetTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;

const MeetContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const MeetTitleShape = styled.span`
  margin: 5px;
  color: rgb(0, 0, 0);
  margin-left: 15px;
`;

const MeetTextShape = styled.span`
  margin: 5px;
  color: rgb(0, 0, 0);
`;

export default function Meet({
  meet_no,
  meet_title,
  meet_content,
  meet_created,
  member,
  meet_view,
}) {
  const onClickListener = () => {
    fetch(`http://localhost:5000/updateview/${meet_no}`)
      .then(res => res.json())
      .then(({ updateView }) => {
        console.log(updateView);
      });
  };

  return (
    <div onClick={() => onClickListener()}>
      <Link
        to={{
          pathname: "/detail",
          state: {
            meet_no,
          },
        }}
        style={{ textDecoration: "none", color: "black" }}
      >
        <MeetContainer>
          <MeetTitle>
            <MeetTitleShape>모임 제목</MeetTitleShape>
            <MeetTitleShape>모임 내용</MeetTitleShape>
            <MeetTitleShape>생성 날짜</MeetTitleShape>
            <MeetTitleShape>신청자</MeetTitleShape>
            <MeetTitleShape>조회수</MeetTitleShape>
          </MeetTitle>
          <MeetContent>
            <MeetTextShape>{meet_title}</MeetTextShape>
            <MeetTextShape>{meet_content}</MeetTextShape>
            <MeetTextShape>{meet_created}</MeetTextShape>
            <MeetTextShape>{member}</MeetTextShape>
            <MeetTextShape>{meet_view}</MeetTextShape>
          </MeetContent>
        </MeetContainer>
      </Link>
    </div>
  );
}
