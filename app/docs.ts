import { readdirSync } from "node:fs";
import path from "node:path";

export const docs = readdirSync(path.join(process.cwd(), "app", "docs"), {
  withFileTypes: true,
  recursive: true,
})
  .filter((v) => v.isDirectory() && !v.name.includes("sidebar"))
  .map(({ name: fileName }) => {
    const index = parseInt(fileName.slice(0, 2));
    return {
      index,
      slug: fileName,
      type: "doc",
      fileName,
    } as const;
  });

export const units = [
  {
    name: "Getting Started",
    description: "ตั้งค่ารหัสผ่านบน Infra42 การ Setup Git, VS Code และอื่น ๆ",
    children: [docs[0]],
  },
  {
    name: "Basic Shell",
    description: `รู้จักกับ Shell ว่าคืออะไร ขั้นตอนการทำงาน โครงสร้าง File และ Directory พื้นฐาน`,
    children: [docs[1]],
  },
] as const;
