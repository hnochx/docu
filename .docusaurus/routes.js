import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b53'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/first_post',
    component: ComponentCreator('/blog/first_post', '9f9'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '53a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ac9'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '7b3'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fce'),
            exact: true
          },
          {
            path: '/docs/tags/test',
            component: ComponentCreator('/docs/tags/test', 'e13'),
            exact: true
          },
          {
            path: '/docs/tags/테스트',
            component: ComponentCreator('/docs/tags/테스트', '5b9'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', '2f9'),
            routes: [
              {
                path: '/docs/category/dev',
                component: ComponentCreator('/docs/category/dev', 'e99'),
                exact: true,
                sidebar: "dev"
              },
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', '818'),
                exact: true,
                sidebar: "dev"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', 'fbe'),
                exact: true,
                sidebar: "dev"
              },
              {
                path: '/docs/dev/',
                component: ComponentCreator('/docs/dev/', '891'),
                exact: true,
                sidebar: "dev"
              },
              {
                path: '/docs/dev/test/',
                component: ComponentCreator('/docs/dev/test/', '059'),
                exact: true,
                sidebar: "dev"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'c95'),
                exact: true,
                sidebar: "dev"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', 'b9e'),
                exact: true,
                sidebar: "dev"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '51f'),
                exact: true,
                sidebar: "dev"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'd20'),
                exact: true,
                sidebar: "dev"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '12e'),
                exact: true,
                sidebar: "dev"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'f4b'),
                exact: true,
                sidebar: "dev"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'c1b'),
                exact: true,
                sidebar: "dev"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'e7d'),
                exact: true,
                sidebar: "dev"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '514'),
                exact: true,
                sidebar: "dev"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
