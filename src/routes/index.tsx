import { PageContainer } from "@/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PageContainer>Hello "/"!</PageContainer>;
}
