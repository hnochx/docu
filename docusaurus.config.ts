import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "Noci Docu",
	tagline: `Writing for remember \n기억하기 위해 기록합니다.`,
	favicon: "img/favicon.ico",
	url: "https://docu-rho.vercel.app/",

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	// Set the production url of your site here
	// url: "https://your-docusaurus-site.example.com",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "hnochx", // Usually your GitHub org/user name.
	projectName: "docu", // Usually your repo name.

	onBrokenLinks: "throw",

	i18n: {
		defaultLocale: "ko",
		locales: ["ko"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ["rss", "atom"],
						xslt: true,
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
					// Useful options to enforce blogging best practices
					onInlineTags: "warn",
					onInlineAuthors: "ignore",
					onUntruncatedBlogPosts: "warn",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		colorMode: {
			respectPrefersColorScheme: true,
		},
		navbar: {
			title: "Noci Docu",
			logo: {
				alt: "My Site Logo",
				src: "img/logo.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "dev",
					position: "left",
					label: "개발",
				},
				{ to: "/blog", label: "블로그", position: "left" },
				{
					href: "https://github.com/hnochx",
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
							label: "개발",
							to: "/docs/dev",
						},
						{
							label: "블로그",
							to: "/blog",
						},
					],
				},
				// {
				//   title: 'Community',
				//   items: [
				//     {
				//       label: 'Stack Overflow',
				//       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
				//     },
				//     {
				//       label: 'Docusaurus',
				//       href: 'https://docusaurus.io/ko/',
				//     },
				//   ],
				// },
				{
					title: "More",
					items: [
						{
							label: "GitHub",
							href: "https://github.com/hnochx",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/hnochx">hnochx</a>.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
		metadata: [
			{
				name: "keywords",
				content: "현호, hnochx, hno, 프론트엔드, frontend, 개발, develop",
			},
		],
	} satisfies Preset.ThemeConfig,
};

export default config;
