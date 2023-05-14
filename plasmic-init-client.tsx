"use client";

import { PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "./plasmic-init";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);

/**
 * PlasmicClientRootProvider is a Client Component that passes in the loader for you.
 *
 * Why? Props passed from Server to Client Components must be serializable.
 * https://beta.nextjs.org/docs/rendering/server-and-client-components#passing-props-from-server-to-client-components-serialization
 * However, PlasmicRootProvider requires a loader, but the loader is NOT serializable.
 */

PLASMIC.registerComponent(Timeline, {
  name: "Timeline",
});
PLASMIC.registerComponent(TimelineItem, {
  name: "TimelineItem",
});
PLASMIC.registerComponent(TimelineSeparator, {
  name: "TimelineSeparator",
});
PLASMIC.registerComponent(TimelineConnector, {
  name: "TimelineConnector",
});
PLASMIC.registerComponent(TimelineContent, {
  name: "TimelineContent",
});
PLASMIC.registerComponent(TimelineDot, {
  name: "TimelineDot",
});

export function PlasmicClientRootProvider(
  props: Omit<React.ComponentProps<typeof PlasmicRootProvider>, "loader">
) {
  return (
    <PlasmicRootProvider loader={PLASMIC} {...props}></PlasmicRootProvider>
  );
}
