import styled from "styled-components";

interface SidebarProps {
  isOpen: boolean;
}

export const SidebarWrapper = styled.div<SidebarProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(2px);
  ${({ isOpen }) => !isOpen && "width: 0;"}
  z-index: 100;
`;

export const Sidebar = styled.div<SidebarProps>`
  width: 10rem;
  height: calc(100% - 3rem);
  position: relative;
  top: 1rem;
  left: ${({ isOpen }) => (isOpen ? "0.6rem" : "-11rem")};
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 0.5rem;
  transition: all 0.5s ease;
`;

export const SidebarToggle = styled.div`
  position: absolute;
  right: -2rem;
  top: 50%;
  bottom: 50%;
  background-color: #fff;
  height: 1.5rem;
  border-top-right-radius: 0.7rem;
  border-bottom-right-radius: 0.7rem;
  border-bottom-left-radius: 0.7rem;
  padding: 0.2rem;
  cursor: pointer;
`;
