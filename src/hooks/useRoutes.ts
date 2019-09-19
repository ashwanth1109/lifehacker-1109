import React, { useEffect, useState, useCallback } from "react";

const changeRoutes = () => {
  console.log("CHANGE ROUTES");
};

const useRoutes = (routeObj: any, notFound: Function) => {
  // const [pathname, setPathname] = useState("/");
  // useEffect(() => {
  //   console.log("IN USE ROUTES", window.location);
  //   setPathname(window.location.pathname);
  //   window.addEventListener("popstate", changeRoutes);
  //   // clean up
  //   return () => window.removeEventListener("popstate", changeRoutes);
  // }, []);

  const { pathname } = window.location;
  if (routeObj[pathname]) return routeObj[pathname]();
  return notFound();
};

export default useRoutes;
