import React from "react";
import * as Styled from "./Header.styles";
import { Search } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";

const Header: React.FC = () => {
  return (
    <Styled.HeaderWrapper>
      <Avatar alt="Avatar" src="https://i.pravatar.cc/300" sx={{ width: 30, height: 30 }} />
      <Search />
    </Styled.HeaderWrapper>
  );
};

export default Header;
