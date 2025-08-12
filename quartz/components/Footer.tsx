import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={displayClass ?? ""}>
                <div dangerouslySetInnerHTML={{ __html: `The resources on this site by Russell Gordon and David Jones are licensed under <a href=\"http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1\" target=\"_blank\" rel=\"license noopener noreferrer\" style=\"display:inline-block;\">CC BY 4.0</a> unless otherwise noted.` }} />
              </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
