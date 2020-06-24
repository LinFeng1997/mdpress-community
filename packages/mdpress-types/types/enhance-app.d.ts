import { SiteData } from "./context";
import { RouteProps } from "react-router";

export interface Route extends RouteProps {
  redirect: string;
}

type Hook = Function;
interface MdConfig {
  lineNumbers?: boolean;
  slugify?: Function;
  anchor?: {
    permalink?: boolean;
    permalinkBefore?: boolean;
    permalinkSymbol?: string;
  };
  externalLinks?: Record<string, string>;
  toc?: Record<string, any>;
  extractHeaders?: string[];
}
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
  mdConfig: MdConfig;
}) => void;
