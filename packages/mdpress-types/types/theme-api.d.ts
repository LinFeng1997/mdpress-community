import { PluginOptionAPI } from './plugin'
import { NormalizedPlugin } from './plugin-api'

export interface ResolvedComponent {
  filename: string;
  componentName: string;
  isInternal: boolean;
  path: string;
}

export interface ResolvedTheme {
  path?: string;
  name?: string;
  shortcut?: string;
  entry: {} | NormalizedPlugin;
}

export interface ThemeAPI {
  theme: ResolvedTheme;
  parentTheme: ResolvedTheme;
  existsParentTheme: boolean;
  mdpressPlugin: PluginOptionAPI;
  componentMap: Record<string, ResolvedComponent>;
  layoutComponentMap: Record<string, ResolvedComponent>;
  setAlias: (alias: Record<string, string>) => void;
  init: () => void;
  getComponents: () => Record<string, ResolvedComponent>;
  getLayoutComponentMap: () => Record<string, ResolvedComponent>;
}
