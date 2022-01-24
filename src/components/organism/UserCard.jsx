import styled from "styled-components";
import { Card } from "../atoms/card/Card";
import { UserIconWithName } from "../molecules/user/UserIconWithName";

export const UserCard = (Props) => {
  const { user, isAdmin } = Props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name}></UserIconWithName>
      <div>{isAdmin && <h5>編集</h5>}</div>
      <SDl>
        <dt>メール</dt>
        <dd>{user.mail}</dd>
        <dt>TEL</dt>
        <dd>{user.tel}</dd>
        <dt>会社名</dt>
        <dd>{user.company}</dd>
        <dt>WEB</dt>
        <dd>{user.web}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 30px;
    padding-bottom: 10px;
    overflow-wrap: break-word;
  }
`;
