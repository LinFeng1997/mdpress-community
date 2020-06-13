import { SiteData } from "./context";
import { RouteProps } from "react-router";

export interface Route extends RouteProps {
  redirect: string;
}
export type EnhanceApp = (options: {
  sandbox: {
    [key: string]: any;
  };
  routes: Route[];
  siteData: SiteData;
  isServer: boolean;
}) => void;
