import { PageContainer } from "@/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/children/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PageContainer>Hello "/children/"!</PageContainer>;
}
