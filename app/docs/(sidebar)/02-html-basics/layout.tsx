import { createLayout } from "../default-layout";

const Layout = createLayout({
  docs: [
    {
      slug: "00-introduction",
      title: "Introduction to Website",
      description: "",
    },
    {
      slug: "01-basic-structure",
      title: "Basic Structure of HTML",
      description: "ทำความรู้จักกับโครงสร้างพื้นฐานของ HTML ว่ามีอะไรบ้าง",
    },
    {
      slug: "02-basic-html-tags",
      title: "Basic HTML Tags",
      description: "รู้จักกับ Tag พื้นฐานต่าง ๆ ของ HTML",
    },
  ],
  series: {
    title: "HTML Basics",
    slug: "02-html-basics",
  },
});

export default Layout;
