import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Claude Course by Tenten',
  tagline: 'Claude Course for Hackers',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://doc-cursor.vercel.app',
  baseUrl: '/',
  organizationName: 'tentendev',
  projectName: 'doc-cursor',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/tentendev/doc-cursor/edit/main/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    metadata: [
      { name: 'description', content: 'Claude Course for Hackers' },
      { property: 'og:title', content: 'Claude Course by Tenten' },
      { property: 'og:description', content: 'Claude Course for Hackers' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://doc-cursor.vercel.app' },
      { property: 'og:image', content: 'img/docusaurus-social-card.jpg' },
    ],
    navbar: {
      title: 'Claude Course by Tenten',
      logo: {
        alt: 'Claude Course Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/tentendev/doc-cursor',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/tentendev/doc-cursor',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tenten. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}; 