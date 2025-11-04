import { Date, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []
      const subtitles: (string | JSX.Element)[] = []

      if (fileData.dates && !fileData.frontmatter?.hideDate) {
        segments.push(<Date date={getDate(cfg, fileData)!} locale={cfg.locale} />)
      }

      if (fileData.frontmatter?.subtitle) {
        subtitles.push(
          `${fileData.frontmatter.subtitle}`
        )
      }

      // Display reading time if enabled AND not an index file
      if (options.showReadingTime && !fileData.filePath.includes("index.md")) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(<span>{displayedTime}</span>)
      }

      return (
        <>
          {subtitles.length > 0 && (
            <p style={{ margin: '0', padding: '0' }}  class={classNames(displayClass, "content-meta")}>
              <span style={{fontStyle: 'italic'}}>{subtitles}</span>
            </p>
          )}
          <p show-comma={options.showComma} style={{ margin: '0', padding: '0' }} class={classNames(displayClass, "content-meta")}>
            {segments}
          </p>
        </>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
