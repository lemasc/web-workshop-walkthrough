import CodeEditor from "@/app/CodeEditor";
import { readSources } from "@/app/CodeEditor/fs";
import { join } from "node:path"

const ROOT_PATH = "app/docs/(sidebar)/03-css-fundamentals/00-basic-css/sources"; 

export async function RenderSourceEditor({id}: {id: string}) { 
    const sources = await readSources(join(process.cwd(), ROOT_PATH));
    const source = sources[id];
    if(!source) {
        return <div>Source {id} not found</div>
    }
    return <CodeEditor id={id} files={source} />
}