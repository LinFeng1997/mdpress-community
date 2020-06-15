import { SiteData } from "./context";
import { RouteProps } from "react-router";

export interface Route extends RouteProps {
  redirect: string;
}

type Hook = Function;
export type EnhanceApp = (options: {
  sandbox: {
    [key: string]: any;
  };
  routes: Route[] & {
    shouldUpdateScroll: (prevRouterProps: any, routerProps: any) => void;
  };
  hooks: Hook[];
  siteData: SiteData;
  isServer: boolean;
}) => void;
