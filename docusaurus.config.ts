import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Technical Documentation',
  favicon: 'img/favicon.ico',

  url: 'https://uma-hive.github.io/',
  baseUrl: '/docs/',

  organizationName: 'uma-hive',
  projectName: 'docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/uma-hive/docs/tree/main',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Technical Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-light.svg',
        srcDark: 'img/logo-dark.svg'
      },
      items: [
        {
          href: 'https://github.com/uma-hive/docs',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'search',
          position: 'left',
        }
      ],

    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  themes: [
    [require.resolve('@easyops-cn/docusaurus-search-local'), (
      {
        docsRouteBasePath: '/',
        indexBlog: false,
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
      }
    )]
  ]
};

export default config;
