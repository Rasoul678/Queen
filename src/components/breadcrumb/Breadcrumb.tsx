import React, { Fragment } from "react";
import * as Styled from "./Breadcrumb.styles";

interface BreadcrumbProps {
  items: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
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
