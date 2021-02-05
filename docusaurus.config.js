module.exports = {
  title: "SafeDynamicAPI Documentation",
  tagline:
    "Automatically generate APIs with your own authentication or via facebook, google, github, bitbucket or linkedin with customized roles and permissions, from MySQL/MariaDB database, PostgreSQL, SQL Server or SQLite with source code.",
  url: "https://safedynamicapi.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "SafeDynamicAPI",
      logo: {
        alt: "SafeDynamicAPIo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact Me",
              href: "https://www.marcoslima.com/contact",
            },
            {
              label: "Support",
              href: "https://www.marcoslima.com/support",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Demo frontend app",
              to: "https://safe-dynamic-api-demo-frontend.vercel.app",
            },
            {
              label: "Demo frontend app source code",
              to:
                "https://github.com/marcoslimacom/safe-dynamic-api-demo-frontend",
            },
            {
              label: "Demo backend app",
              href: "https://safe-dynamic-api-demo.dreamhosters.com/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SafeDynamicAPI`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
