import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/children/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/children/"!</div>;
}
