import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

const PagesOnly = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const isPageRoute = router.pathname.startsWith("/docs/pages");

  if (!isPageRoute) {
    return null;
  }

  return <>{children}</>;
};

export default PagesOnly;
