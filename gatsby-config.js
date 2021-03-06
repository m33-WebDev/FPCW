/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		siteUrl: `https://familypsychiatry.us`,
		title: `Family Psychiatry, Counseling and Wellness`,
		shortTitle: `FPCW`,
		description: `A mental health clinic with a focus on overall wellness. Find better, one step at a time.`,
		author: `Sabira Saifuddin, M.D.`,
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src`
			}
		},
		{
			resolve: `gatsby-plugin-robots-txt`,
			options: {
				policy: [
					{
						userAgent: '*',
						allow: '/',
						// crawlDelay: 2,
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-advanced-sitemap`,
			options: {
				exclude: [
					`/dev-404-page`,
					`/404`,
					`/formsuccess`
				]
			}
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `85wb86zbaewe`,
				accessToken: `uU3iwop7LhREN5CerJI5sONtkwBUMfCC_9yTKjDAXWE`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Family Psychiatry, Counseling and Wellness`,
				short_name: `FPCW`,
				start_url: `/`,
				background_color: `#f5f5f5`,
				theme_color: `#f5f5f5`,
				display: `standalone`,
				icon: `src/images/maskable_icon.png`,
				icon_options: {
					purpose: `maskable any`
				}
			},
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-autolink-headers`,
						options: {
							icon: false,
							// isIconAfterHeader: true,
						},
					},
					// {
					//   resolve: `gatsby-remark-images`,
					//   options: {
					//     maxWidth: 590,
					//     showCaptions: `true`,
					//     // wrapperStyle: `max-width: 100px`,
					//   },
					// },
					{
						resolve: `gatsby-remark-figure-caption`,
					},
					// // {
					// //   resolve: 'gatsby-remark-code-titles',
					// //   options: {
					// //     className: 'gatsby-remark-code-title'
					// //   }
					// // },
					// {
					//   resolve: `gatsby-remark-code-buttons`,
					//   options: {
					//     toasterText: 'Copied to clipboard.'
					//   }
					// },
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							// Class prefix for <pre> tags containing syntax highlighting;
							// defaults to 'language-' (e.g. <pre className="language-js">).
							// If your site loads Prism into the browser at runtime,
							// (e.g. for use with libraries like react-live),
							// you may use this to prevent Prism from re-processing syntax.
							// This is an uncommon use-case though;
							// If you're unsure, it's best to use the default value.
							classPrefix: 'language-',
							// This is used to allow setting a language for inline code
							// (i.e. single backticks) by creating a separator.
							// This separator is a string and will do no white-space
							// stripping.
							// A suggested value for English speakers is the non-ascii
							// character '›'.
							inlineCodeMarker: null,
							// This lets you set up language aliases.  For example,
							// setting this to '{ sh: "bash" }' will let you use
							// the language "sh" which will highlight using the
							// bash highlighter.
							aliases: {},
							// This toggles the display of line numbers globally alongside the code.
							// To use it, add the following line in gatsby-browser.js
							// right after importing the prism color scheme:
							//  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
							// Defaults to false.
							// If you wish to only show line numbers on certain code blocks,
							// leave false and use the {numberLines: true} syntax below
							showLineNumbers: false,
							// If setting this to true, the parser won't handle and highlight inline
							// code used in markdown i.e. single backtick code like `this`.
							noInlineHighlight: true,
							// This adds a new language definition to Prism or extend an already
							// existing language definition. More details on this option can be
							// found under the header "Add new language definition or extend an
							// existing language" below.
							languageExtensions: [
								{
									language: 'superscript',
									extend: 'javascript',
									definition: {
										superscript_types: /(SuperType)/,
									},
									insertBefore: {
										function: {
											superscript_keywords: /(superif|superelse)/,
										},
									},
								},
							],
							// Customize the prompt used in shell output
							// Values below are default
							prompt: {
								user: 'root',
								host: 'localhost',
								global: false,
							},
							// By default the HTML entities <>&'" are escaped.
							// Add additional HTML escapes by providing a mapping
							// of HTML entities and their escape value IE: { '}': '&#123;' }
							escapeEntities: {},
						},
					},
				],
			},
		},
		`gatsby-plugin-catch-links`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-122920911-4',
			},
		},
		{ 
			resolve: `gatsby-plugin-canonical-urls`, 
			options: {
				siteUrl: `https://familypsychiatry.us`
			} 
		},
		`gatsby-plugin-netlify`,
		`gatsby-plugin-offline`,
	],
};
