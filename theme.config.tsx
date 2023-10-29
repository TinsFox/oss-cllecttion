import { useRouter } from "next/router";
import React from "react";

export default {
  logo: <span>OSS Collection</span>,
  project: {
    link: "https://github.com/TinsFox/oss-collection",
  },
  docsRepositoryBase: "https://github.com/TinsFox/oss-collection/tree/main",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – OSS Collection",
      };
    }
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "zh-CN", text: "中文" },
  ],
};
