import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://dotmenu.natesworks.com',
	integrations: [
		starlight({
			title: 'Dotmenu Wiki',
			social: {
				github: 'https://github.com/dotmenu/dotmenu',
			},
			sidebar: [
				{
					label: 'Beta',
					items: [
						{ label: 'Add using directive', link: '/wiki/v3/getting-started/directive' },
						{ label: 'Creating menus', link: '/wiki/v3/creating-menu' },
						{ label: 'Themes', link: '/wiki/v3/creating-menu/themes' },
					],
				},
				{
					label: 'Getting started',
					items: [
						{ label: 'Installation', link: '/wiki/v2/getting-started/installation' },
						{ label: 'Add using directive', link: '/wiki/v2/getting-started/directive' },
					],
				},
				{
					label: 'Creating a menu',
					items: [
						{ label: 'Menu Creation', link: '/wiki/v2/creating-menu/menu-creation' },
						{ label: 'Prompt', link: '/wiki/v2/creating-menu/prompt' },
						{ label: 'Colors', link: '/wiki/v2/creating-menu/colors' },
						{ label: 'Options', link: '/wiki/v2/creating-menu/options' },
						{ label: 'Hidden Options', link: '/wiki/v2/creating-menu/hidden-options' },
						{ label: 'Prefix', link: '/wiki/v2/creating-menu/prefix' },
						{ label: 'Selector', link: '/wiki/v2/creating-menu/selector' },
						{ label: 'Dynamic Options', link: '/wiki/v2/creating-menu/dynamic-options' },
						{ label: 'Change selected option', link: '/wiki/v2/creating-menu/change-selected-option' },
						{ label: 'Assigning Shortcuts', link: '/wiki/v2/creating-menu/shortcuts' },
						{ label: 'Editing Options', link: '/wiki/v2/creating-menu/editing' },
						{ label: 'Running the Menu', link: '/wiki/v2/creating-menu/run' },
						{ label: 'Alternative selection key', link: '/wiki/v2/creating-menu/alt-enter-key' }
					]
				},
				{
					label: 'Creating a multi select menu',
					items: [
						{ label: 'Menu Creation', link: '/wiki/v2/creating-multiselectmenu/menu-creation' },
						{ label: 'Prompt', link: '/wiki/v2/creating-multiselectmenu/prompt' },
						{ label: 'Colors', link: '/wiki/v2/creating-multiselectmenu/colors' },
						{ label: 'Options', link: '/wiki/v2/creating-multiselectmenu/options' },
						{ label: 'Getting checked option', link: '/wiki/v2/creating-multiselectmenu/getting-checked-options' },
						{ label: 'Action on enter', link: '/wiki/v2/creating-multiselectmenu/action-on-enter' },
						{ label: 'Hidden Options', link: '/wiki/v2/creating-multiselectmenu/hidden-options' },
						{ label: 'Prefix', link: '/wiki/v2/creating-multiselectmenu/prefix' },
						{ label: 'Selector', link: '/wiki/v2/creating-multiselectmenu/selector' },
						{ label: 'Dynamic Options', link: '/wiki/v2/creating-multiselectmenu/dynamic-options' },
						{ label: 'Change selected option', link: '/wiki/v2/creating-multiselectmenu/change-selected-option' },
						{ label: 'Assigning Shortcuts', link: '/wiki/v2/creating-multiselectmenu/shortcuts' },
						{ label: 'Editing Options', link: '/wiki/v2/creating-multiselectmenu/editing' },
						{ label: 'Running the Menu', link: '/wiki/v2/creating-multiselectmenu/run' },
						{ label: 'Alternative selection key', link: '/wiki/v2/creating-multiselectmenu/alt-enter-key' }
					]
				}
			],
		}),
	],
});
