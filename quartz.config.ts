import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
  pageTitle: "📚 YYX2O S1",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Helvetica, Arial",
        body: "Helvetica, Arial",
        code: "IBM Plex Mono",
      },
                        colors: {
        lightMode: {
          light: "#FFFFFF",
          lightgray: "#E6E9EE",
          gray: "#BDC4CF",
          darkgray: "#515A69",
          dark: "#2C3441",
          secondary: "#002D62",
          tertiary: "#EB6E1F",
          highlight: "rgba(0,45,98,0.14)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#121417",
          lightgray: "#2B323B",
          gray: "#5A6574",
          darkgray: "#CDD3DD",
          dark: "#E8ECF2",
          secondary: "#00B6E6",
          tertiary: "#F99E1A",
          highlight: "rgba(0,182,230,0.18)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
//      Plugin.CustomOgImages(),
    ],
  },
}

export default config
