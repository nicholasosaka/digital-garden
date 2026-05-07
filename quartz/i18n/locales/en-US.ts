import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "untitled",
    description: "no description provided",
  },
  components: {
    callout: {
      note: "Note",
      abstract: "Abstract",
      info: "Info",
      todo: "Todo",
      tip: "Tip",
      success: "Success",
      question: "Question",
      warning: "Warning",
      failure: "Failure",
      danger: "Danger",
      bug: "Bug",
      example: "Example",
      quote: "Quote",
    },
    backlinks: {
      title: "backlinks",
      noBacklinksFound: "no backlinks found",
    },
    themeToggle: {
      lightMode: "light mode",
      darkMode: "dark mode",
    },
    readerMode: {
      title: "reader mode",
    },
    explorer: {
      title: "explorer",
    },
    footer: {
      createdWith: "created with",
    },
    graph: {
      title: "graph view",
    },
    recentNotes: {
      title: "recent notes",
      seeRemainingMore: ({ remaining }) => `see ${remaining} more →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `transclude of ${targetSlug}`,
      linkToOriginal: "link to original",
    },
    search: {
      title: "search",
      searchBarPlaceholder: "search for something",
    },
    tableOfContents: {
      title: "table of contents",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} min read`,
    },
  },
  pages: {
    rss: {
      recentNotes: "recent notes",
      lastFewNotes: ({ count }) => `Last ${count} notes`,
    },
    error: {
      title: "not found",
      notFound: "either this page is private or doesn't exist.",
      home: "return to homepage",
    },
    folderContent: {
      folder: "Folder",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 item under this folder." : `${count} items under this folder.`,
    },
    tagContent: {
      tag: "tag",
      tagIndex: "tag index",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item with this tag." : `${count} items with this tag.`,
      showingFirst: ({ count }) => `showing first ${count} tags.`,
      totalTags: ({ count }) => `found ${count} total tags.`,
    },
  },
} as const satisfies Translation
