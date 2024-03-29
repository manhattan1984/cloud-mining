// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

"use client";

import * as React from "react";
import * as p from "@plasmicapp/react-web";

export type DesktopValue = "mobileOnly";
export const DesktopContext = React.createContext<DesktopValue[] | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

/**
 *  @deprecated Plasmic now uses a custom hook for Screen variants, which is
 *  automatically included in your components. Please remove this provider
 *  from your code.
 */
export function ScreenVariantProvider(props: React.PropsWithChildren) {
  console.warn(
    "DEPRECATED: Plasmic now uses a custom hook for Screen variants, which is automatically included in your components. Please remove this provider from your code."
  );
  return props.children;
}

export const useScreenVariants = p.createUseScreenVariants(true, {
  mobileOnly: "(min-width:0px) and (max-width:768px)",
});

export default DesktopContext;
/* prettier-ignore-end */
