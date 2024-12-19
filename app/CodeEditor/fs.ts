import { readdir, readFile } from "fs/promises";

export const readSourceFolder = async (folder: string) => {
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

export type SourceFile = Awaited<ReturnType<typeof readSourceFolder>>[number];

export const readSources = async (sourceFolder: string) => {
  const reads = await readdir(sourceFolder, { withFileTypes: true });
  const subfolders = reads.filter((file) => file.isDirectory());
  const result: Record<string, SourceFile[]> = {}
  for (const folder of subfolders) {
    result[folder.name] = await readSourceFolder(sourceFolder + "/" + folder.name);
  }
  return result;
}
