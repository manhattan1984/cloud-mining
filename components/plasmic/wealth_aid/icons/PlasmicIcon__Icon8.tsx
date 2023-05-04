// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon8Icon(props: Icon8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -64.5 256 256"}
      version={"1.1"}
      preserveAspectRatio={"xMidYMid"}
      fill={"currentColor"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 63.21c0-17.324 6.204-32.19 18.612-44.598C31.02 6.204 45.886 0 63.21 0c17.324 0 32.19 6.204 44.598 18.612l20.368 19.314 20.367-19.665C160.717 6.087 175.466 0 192.79 0c17.09 0 31.898 6.204 44.423 18.612C249.738 31.02 256 45.886 256 63.21c0 17.324-6.262 32.19-18.787 44.598-12.525 12.408-27.333 18.612-44.423 18.612-17.324 0-32.19-6.204-44.598-18.612l-20.016-19.314-20.72 19.665c-12.173 12.174-26.922 18.26-44.246 18.26s-32.19-6.203-44.598-18.611C6.204 95.4 0 80.534 0 63.21zm63.21-26.69c-7.258 0-13.52 2.634-18.788 7.901-5.267 5.268-7.9 11.53-7.9 18.788 0 7.491 2.574 13.812 7.725 18.963 5.15 5.15 11.471 7.725 18.963 7.725 7.491 0 13.812-2.575 18.963-7.725l19.314-18.963-19.314-18.612c-5.385-5.384-11.706-8.077-18.963-8.077zm148.543 45.652c5.15-5.15 7.726-11.472 7.726-18.963 0-7.492-2.575-13.813-7.726-18.963-5.15-5.15-11.413-7.726-18.787-7.726-7.375 0-13.637 2.575-18.788 7.726L154.513 63.21l19.314 18.612c5.15 5.15 11.472 7.784 18.963 7.9 7.492.118 13.813-2.399 18.963-7.55z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon8Icon;
/* prettier-ignore-end */
