export const units = [
  {
    name: "Getting Started",
    description: "ตั้งค่ารหัสผ่านบน Intra 42 การ Setup Git, VS Code และอื่น ๆ",
    path: "00-getting-started-intra42",
    type: "document",
  },
  {
    name: "Shell (Introduction)",
    description: `รู้จักกับ Shell ว่าคืออะไร ขั้นตอนการทำงาน โครงสร้าง File และ Directory พื้นฐาน`,
    path: "01-shell-introduction",
    type: "document",
  },
  {
    name: "Introduction to HTML",
    description:
      "รู้จักกับที่มาของเว็บไซต์ที่เราใช้กันในปัจจุบัน ภาษา HTML และทดลองเขียนคำสั่งง่าย ๆ",
    path: "02-html-basics",
    type: "series",
  },
  {
    name: "CSS Fundamentals",
    description: "เริ่มต้นออกแบบเว็บไซต์ให้สวยงามยิ่งขึ้นบนทุกอุปกรณ์ด้วย CSS Grid และ Flexbox",
    path: "03-css-fundamentals",
    type: "series"
  }
] as const;
