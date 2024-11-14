import * as p from './src';
const options = [
	{ value: 'starter-ts', label: 'ts', hint: 'pure ts or cli' },
	{ value: 'unplugin-starter', label: 'unplugin-starter', hint: 'plugin' },
	{ value: 'vitesse-vue-uno', label: 'vue-uno' },
	{ value: 'vitesse-vue-tailwind', label: 'vue-tailwind' },
	{ value: 'vitesse-h', label: 'vue-h' },
	{ value: 'vitesse-uniapp', label: 'uniapp' },
	{ value: 'vitesse-template', label: 'vue-template' },
	{ value: 'vitesse-jsvue', label: 'vue-js-template' },
	{ value: 'vitesse-tsx', label: 'vue-tsx' },
	{ value: 'vitesse-nuxt3', label: 'nuxt3' },
	{ value: 'vitesse', label: 'vitesse' },
	{ value: 'vitesse-lite-react', label: 'react-uno' },
	{ value: 'react-vite-ts-tailwind-daisyUI', label: 'react-tailwind' },
	{ value: 'vitesse-next', label: 'next' },
	{ value: 'vitesse-vitepress', label: 'vitepress' },
	{ value: 'vitesse-vitessr', label: 'vite-ssr' },
	{ value: 'vitesse-reactssr', label: 'react-ssr' },
	{ value: 'vitesse-svelte', label: 'svelte' },
	{ value: 'vitesse-solid', label: 'solid' },
	{ value: 'vitesse-vscode', label: 'vscode' },
];

p.group({
	d: () =>
		p.search({
			options,
			message: 'xxx',
		}),
});
