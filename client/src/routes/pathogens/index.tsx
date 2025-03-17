import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pathogens/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/pathogens/"!</div>;
}
