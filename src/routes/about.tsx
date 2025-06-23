import { PageContainer } from "@/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PageContainer>Hello "/about"!</PageContainer>;
}
