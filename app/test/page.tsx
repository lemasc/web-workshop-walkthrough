import { join } from "node:path";
import CodeEditor from "../CodeEditor";
import { readSources } from "../CodeEditor/fs";

export default async function TestPage() {
  const files = await readSources(join(process.cwd(), "app/test/source"));
  return <CodeEditor files={files} />;
}
