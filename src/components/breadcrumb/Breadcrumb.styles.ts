import styled, { css } from "styled-components";

interface ItemProps {
  isLast: boolean;
}

export const Breadcrumb = styled.div``;

export const Dot = styled.span`
  color: #777;

  ::after {
    content: ".";
    margin: 0 0.3rem;
    font-size: 2rem;
  }
`;

const lastItemCss = css`
  color: #777;
  cursor: default;
`;

export const Item = styled.span<ItemProps>`
  cursor: pointer;
  ${({ isLast }) => isLast && lastItemCss} }
`;
