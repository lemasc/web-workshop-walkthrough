import Content from "./content.mdx"
import { RenderSourceEditor } from "./sources"

export default async function Page() {
    return <Content components={{RenderSourceEditor}} />
}