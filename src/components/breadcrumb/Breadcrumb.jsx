import { Fragment } from "react";
import * as Styled from "./Breadcrumb.styles";

const Breadcrumb = ({ items }) => {
  return (
    <Styled.Breadcrumb>
      {items?.map((item, index, self) => {
        const isLastItem = index === self.length - 1;
        return (
          <Fragment key={index}>
            <Styled.Item isLast={isLastItem}>{item}</Styled.Item>
            {!isLastItem && <Styled.Dot />}
          </Fragment>
        );
      })}
    </Styled.Breadcrumb>
  );
};

export default Breadcrumb;
