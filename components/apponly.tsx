import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

const AppOnly = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const isAppRoute = router.pathname.startsWith("/docs/app");

  if (!isAppRoute) {
    return null;
  }

  return <>{children}</>;
};

export default AppOnly;
