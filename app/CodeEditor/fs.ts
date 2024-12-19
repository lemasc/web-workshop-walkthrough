import { readdir, readFile } from "fs/promises";

export const readSources = async (folder: string) => {
  const dir = await readdir(folder, { withFileTypes: true });
  return Promise.all(
    dir
      .filter((file) => !file.isDirectory())
      .map(async (file) => {
        const value = await readFile(folder + "/" + file.name, {
          encoding: "utf-8",
        });
        const name = file.name;
        let language = name.split(".").pop()!;
        if (language === "js") language = "javascript";
        return { name, value, language };
      })
  );
};

export type SourceFile = Awaited<ReturnType<typeof readSources>>[number];
