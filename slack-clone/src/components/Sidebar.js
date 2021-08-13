import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentRoundedIcon from "@material-ui/icons/InsertCommentRounded";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SupervisedUserCircleRoundedIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import BookmarksOutlinedIcon from "@material-ui/icons/BookmarksOutlined";
import AppsIcon from "@material-ui/icons/Apps";
import FilterIcon from "@material-ui/icons/Filter";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "react-spinkit";

export default function Sidebar() {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);

  if (loading) {
    return (
      <Spinner name="ball-spin-fade-loader" color="#3f0f40" fadeIn="none" />
    );
  }

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>CodeEra</h2>
          <h3>
            <FiberManualRecordIcon />
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      {/*Sidebar option */}

      <SidebarOption Icon={InsertCommentRoundedIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved Items" />
      <SidebarOption Icon={BookmarksOutlinedIcon} title="Channel browser" />
      <SidebarOption
        Icon={SupervisedUserCircleRoundedIcon}
        title="People & user groups"
      />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FilterIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channels" />
      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  margin-top: 45px;
  max-width: 260px;

  > hr {
    margin-top: 5px;
    margin-bottom: 5px;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 18px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
