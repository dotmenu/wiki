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
					label: 'Getting started',
					items: [
						{ label: 'Installation', link: '/guides/getting-started/installation' },
						{ label: 'Add using directive', link: '/guides/getting-started/directive' },
					],
				},
				{
					label: 'Creating a menu',
					items: [
						{ label: 'Menu Creation', link: '/guides/creating-menu/menu-creation' },
						{ label: 'Prompt', link: '/guides/creating-menu/prompt' },
						{ label: 'Colors', link: '/guides/creating-menu/colors' },
						{ label: 'Options', link: '/guides/creating-menu/options' },
						{ label: 'Hidden Options', link: '/guides/creating-menu/hidden-options' },
						{ label: 'Prefix', link: '/guides/creating-menu/prefix' },
						{ label: 'Selector', link: '/guides/creating-menu/selector' },
						{ label: 'Dynamic Options', link: '/guides/creating-menu/dynamic-options' },
						{ label: 'Change selected option', link: '/guides/creating-menu/change-selected-option' },
						{ label: 'Assigning Shortcuts', link: '/guides/creating-menu/shortcuts' },
						{ label: 'Editing Options', link: '/guides/creating-menu/editing' },
						{ label: 'Running the Menu', link: '/guides/creating-menu/run' },
						{ label: 'Alternative selection key', link: '/guides/creating-menu/alt-enter-key' }
					]
				},
				{
					label: 'Creating a multi select menu',
					items: [
						{ label: 'Menu Creation', link: '/guides/creating-multiselectmenu/menu-creation' },
						{ label: 'Prompt', link: '/guides/creating-multiselectmenu/prompt' },
						{ label: 'Colors', link: '/guides/creating-multiselectmenu/colors' },
						{ label: 'Options', link: '/guides/creating-multiselectmenu/options' },
						{ label: 'Getting checked option', link: '/guides/creating-multiselectmenu/getting-checked-options' },
						{ label: 'Action on enter', link: '/guides/creating-multiselectmenu/action-on-enter' },
						{ label: 'Hidden Options', link: '/guides/creating-multiselectmenu/hidden-options' },
						{ label: 'Prefix', link: '/guides/creating-multiselectmenu/prefix' },
						{ label: 'Selector', link: '/guides/creating-multiselectmenu/selector' },
						{ label: 'Dynamic Options', link: '/guides/creating-multiselectmenu/dynamic-options' },
						{ label: 'Change selected option', link: '/guides/creating-multiselectmenu/change-selected-option' },
						{ label: 'Assigning Shortcuts', link: '/guides/creating-multiselectmenu/shortcuts' },
						{ label: 'Editing Options', link: '/guides/creating-multiselectmenu/editing' },
						{ label: 'Running the Menu', link: '/guides/creating-multiselectmenu/run' },
						{ label: 'Alternative selection key', link: '/guides/creating-multiselectmenu/alt-enter-key' }
					]
				}
			],
		}),
	],
});
