import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://dotmenu.natesworks.com',
	integrations: [
		starlight({
			title: 'Dotmenu Wiki',
			editLink: {
                        baseUrl: 'https://github.com/dotmenu/wiki/edit/master/',
                        },
			social: {
				github: 'https://github.com/dotmenu/dotmenu',
			},
			sidebar: [
				{
					label: 'Getting started',
					items: [
						{ label: 'Installation', link: '/wiki/getting-started/installation' },
						{ label: 'Add using directive', link: '/wiki/getting-started/directive' },
					],
				},
				{
					label: 'Creating a menu',
					items: [
						{ label: 'Menu Creation', link: '/wiki/creating-menu/menu-creation' },
						{ label: 'Prompt', link: '/wiki/creating-menu/prompt' },
						{ label: 'Colors', link: '/wiki/creating-menu/colors' },
						{ label: 'Options', link: '/wiki/creating-menu/options' },
						{ label: 'Hidden Options', link: '/wiki/creating-menu/hidden-options' },
						{ label: 'Prefix', link: '/wiki/creating-menu/prefix' },
						{ label: 'Selector', link: '/wiki/creating-menu/selector' },
						{ label: 'Dynamic Options', link: '/wiki/creating-menu/dynamic-options' },
						{ label: 'Change selected option', link: '/wiki/creating-menu/change-selected-option' },
						{ label: 'Assigning Shortcuts', link: '/wiki/creating-menu/shortcuts' },
						{ label: 'Editing Options', link: '/wiki/creating-menu/editing' },
						{ label: 'Running the Menu', link: '/wiki/creating-menu/run' },
						{ label: 'Alternative selection key', link: '/wiki/creating-menu/alt-enter-key' }
					]
				},
				{
					label: 'Creating a multi select menu',
					items: [
						{ label: 'Menu Creation', link: '/wiki/creating-multiselectmenu/menu-creation' },
						{ label: 'Prompt', link: '/wiki/creating-multiselectmenu/prompt' },
						{ label: 'Colors', link: '/wiki/creating-multiselectmenu/colors' },
						{ label: 'Options', link: '/wiki/creating-multiselectmenu/options' },
						{ label: 'Getting checked option', link: '/wiki/creating-multiselectmenu/getting-checked-options' },
						{ label: 'Action on enter', link: '/wiki/creating-multiselectmenu/action-on-enter' },
						{ label: 'Hidden Options', link: '/wiki/creating-multiselectmenu/hidden-options' },
						{ label: 'Prefix', link: '/wiki/creating-multiselectmenu/prefix' },
						{ label: 'Selector', link: '/wiki/creating-multiselectmenu/selector' },
						{ label: 'Dynamic Options', link: '/wiki/creating-multiselectmenu/dynamic-options' },
						{ label: 'Change selected option', link: '/wiki/creating-multiselectmenu/change-selected-option' },
						{ label: 'Assigning Shortcuts', link: '/wiki/creating-multiselectmenu/shortcuts' },
						{ label: 'Editing Options', link: '/wiki/creating-multiselectmenu/editing' },
						{ label: 'Running the Menu', link: '/wiki/creating-multiselectmenu/run' },
						{ label: 'Alternative selection key', link: '/wiki/creating-multiselectmenu/alt-enter-key' }
					]
				}
			],
		}),
	],
});
