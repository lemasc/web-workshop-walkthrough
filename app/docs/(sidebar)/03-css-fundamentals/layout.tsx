import { createLayout } from "../default-layout";

const Layout = createLayout({
  docs: [
    {
      slug: "00-basic-css",
      title: "The very basic of CSS",
      description: "",
    },
    {
      slug: "01-think-in-responsive",
      title: "Think in Responsive",
      "description": "มองการออกแบบเว็บให้ง่าย และแสดงได้ทุกอุปกรณ์ด้วย Responsive"
    }
  ],
  series: {
    title: "CSS Fundamentals",
    slug: "03-css-fundamentals",
  },
});

export default Layout;
