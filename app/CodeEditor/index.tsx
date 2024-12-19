"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { HtmlValidate, StaticConfigLoader } from "html-validate/browser";
import { SourceFile } from "./fs";

const Editor = dynamic(() => import("./monaco.client"), {
  ssr: false,
});
const config = new StaticConfigLoader({
  extends: ["html-validate:recommended"],
  elements: ["html5"],
});
const validator = new HtmlValidate(config);

export default function CodeEditor({ id, files }: { id: string; files: SourceFile[] }) {
  const [currentIndex] = useState(0);
  const [editorValue, setEditorValue] = useState(files);

  const setValue = (value: string | undefined) => {
    setEditorValue((prev) => {
      const newFiles = [...prev];
      newFiles[currentIndex].value = value ?? "";
      return newFiles;
    });
  };

  const currentFile = useMemo(
    () => editorValue[currentIndex],
    [editorValue, currentIndex]
  );

  useEffect(() => {
    const abort = new AbortController();
    (async () => {
      if (!abort.signal.aborted) {
        console.log(currentFile.value);
        validator.validateString(currentFile.value).then((result) => {
          console.log(result);
        });
      }
    })();
    return () => abort.abort();
  }, [currentFile.value]);

  return (
    <div className="grid grid-cols-2 bg-white rounded-sm">
      <div className="flex flex-col h-[50vh]">
        <div>Code</div>
        <Editor
          path={`${id}/${currentFile.name}`}
          defaultLanguage={currentFile.language}
          defaultValue={currentFile.value}
          onChange={setValue}
        />
      </div>
      <div className="h-full flex flex-col">
        <div>Preview</div>
        <iframe
          srcDoc={currentFile.value}
          className="w-full flex-grow"
          title="Preview"
        ></iframe>
      </div>
    </div>
  );
}
