import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Link to="/children">sdaf</Link>
      <Outlet />
      <div>I'm footer</div>
      <TanStackRouterDevtools />
    </>
  );
}
