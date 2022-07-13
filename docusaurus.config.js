// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mercusuar',
  tagline: 'Catatan daring milik Yose Marthin Giyay',
  url: 'https://mercusuar.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'imyohntears', // Usually your GitHub org/user name.
  projectName: 'taman-digital', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/imyohntears/taman-digital/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Mercusuar',
        logo: {
          alt: 'Dino',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro/intro',
            position: 'left',
            label: 'Taman Digital 🌿',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://instagram.com/giyaibo',
            label: '📷',
            position: 'right',
          },
          {
            href: 'https://twitter.com/jind0sh',
            label: '🐦',
            position: 'right',
          },
          {
            href: 'https://github.com/taman-digital/',
            position: 'right',
            label: 'GitHub',
          },          
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Lain-lain',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/harpokratez',
              },
              {
                label: 'Masimlameraido',
                href: 'https://discord.gg/vPZTymY426',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ebegu, Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
