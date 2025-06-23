import { PageContainer } from "@/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/children/$id/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();

  return <PageContainer>Hello "/children/{id}"!</PageContainer>;
}
