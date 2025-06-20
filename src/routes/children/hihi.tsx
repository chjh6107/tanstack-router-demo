import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/children/hihi")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/children/hihi"!</div>;
}
