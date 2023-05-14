// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon12Icon(props: Icon12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"currentColor"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"none"} d={"M0 0h24v24H0z"}></path>

      <path
        d={
          "M12 2a8 8 0 00-8 8v1.9A2.92 2.92 0 003 14a2.88 2.88 0 001.94 2.61C6.24 19.72 8.85 22 12 22h3v-2h-3c-2.26 0-4.31-1.7-5.34-4.39l-.21-.55-.59-.06A1 1 0 015 14a1 1 0 01.5-.86l.5-.29V11a1 1 0 011-1h10a1 1 0 011 1v5h-4.09a1.5 1.5 0 10-1.52 2H20a2 2 0 002-2v-2a2 2 0 00-2-2v-2a8 8 0 00-8-8z"
        }
      ></path>
    </svg>
  );
}

export default Icon12Icon;
/* prettier-ignore-end */
