import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "tDDRj6bhA72rUU2Wgcq2eA",  // ID of a project you are using
      token: "I68fPUDKDgRo0BfhNUVL5TaXRoPzCFDbNQvXwhVOmWDqEbkG2d9gmKQ8yYQ8yKI0ZIyXFendtOabn3NYpKbw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})