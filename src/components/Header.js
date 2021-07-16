import styled from "styled-components";
import React from "react";
import { Avatar } from "@material-ui/core";
import { AccessTimeIcon } from "@material-ui/icons/AccessTime";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTimeIcon />
      </HeaderLeft>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div``;

const HeaderLeft = styled.div``;

const HeaderAvatar = styled(Avatar)``;
