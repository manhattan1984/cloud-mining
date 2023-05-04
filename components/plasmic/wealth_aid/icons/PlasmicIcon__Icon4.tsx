// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 32 32"}
      version={"1.1"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 16q0-3.232 1.28-6.208t3.392-5.12 5.12-3.392T16 0q3.264 0 6.24 1.28t5.088 3.392 3.392 5.12T32 16q0 3.264-1.28 6.208t-3.392 5.12-5.12 3.424T16 32t-6.208-1.248-5.12-3.424-3.392-5.12T0 16zm4 0q0 3.264 1.6 6.048T9.984 26.4 16 28t6.016-1.6 4.384-4.352T28 16t-1.6-6.016-4.384-4.352T16 4 9.984 5.632 5.6 9.984 4 16zm10.016 0v-5.984q0-.832.576-1.408T16 8t1.408.608.608 1.408v4h4q.8 0 1.408.576T24 16t-.576 1.44-1.408.576H16q-.832 0-1.408-.576T14.016 16z"
        }
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
