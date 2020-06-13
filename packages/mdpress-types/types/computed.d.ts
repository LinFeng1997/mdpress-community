import { LocaleConfig, ThemeConfig } from './config'
import { SiteData } from './context'
import { Page, PageFrontmatter } from './page'

export interface ClientComputedMixin {
  readonly $site: SiteData;
  readonly $themeConfig: ThemeConfig;
  readonly $frontmatter: PageFrontmatter;
  readonly $localeConfig: LocaleConfig;
  readonly $siteTitle: string;
  readonly $title: string;
  readonly $description: string;
  readonly $lang: string;
  readonly $localePath: string;
  readonly $themeLocaleConfig: string;
  readonly $page: Page;

  __page: Page;

  setPage: (page: Page) => void;
}
