import { Outlet, createRootRoute, redirect } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false;
  const token = localStorage.getItem("token"); // 또는 다른 인증 키
  return Boolean(token);
};

export const Route = createRootRoute({
  component: RootComponent,
  beforeLoad: ({ location }) => {
    if (location.pathname === "/login") return;

    if (!isAuthenticated())
      throw redirect({ to: "/login", search: { redirect: location.href } });
  },
});

function RootComponent() {
  return (
    <>
      <div className="h-screen w-screen">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  );
}
