import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pathogens/$pathogenId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { pathogenId } = Route.useParams();
  return <div>Hello {`/pathogens/${pathogenId}!`}</div>;
}
