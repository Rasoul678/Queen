import { useState } from "react";
import * as Styled from "./Sidebar.styles";
import { Tune, Close } from "@mui/icons-material";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //! Toggle sidebar.
  const handleToggle = () => {
    setIsSidebarOpen((s) => !s);
  };

  return (
    <Styled.SidebarWrapper isOpen={isSidebarOpen}>
      <Styled.Sidebar isOpen={isSidebarOpen}>
        <Styled.SidebarToggle onClick={handleToggle}>
          {isSidebarOpen ? <Close /> : <Tune />}
        </Styled.SidebarToggle>
      </Styled.Sidebar>
    </Styled.SidebarWrapper>
  );
};

export default Sidebar;
