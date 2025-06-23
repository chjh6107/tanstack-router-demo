import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/children/$id/detail")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/children/$id/detail"!</div>;
}
