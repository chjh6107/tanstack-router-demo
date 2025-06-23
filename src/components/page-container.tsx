import type { ReactNode } from "react";
import { AppSidebar } from "./app-sidebar";

interface Props {
  children?: ReactNode;
}

const PageContainer = ({ children }: Props) => {
  return (
    <div>
      <AppSidebar></AppSidebar>
      {children}
    </div>
  );
};
export default PageContainer;
