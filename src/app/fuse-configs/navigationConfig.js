import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'home',
				title: 'Inicio',
				translate: 'Inicio',
				type: 'item',
				icon: 'whatshot',
				url: '/home',
			},
			{
				id: 'products-component',
				title: 'Notas',
				translate: 'Notas',
				type: 'item',
				icon: 'folder',
				url: '/notas'
			},
			{
				id: 'category-component',
				title: 'Category',
				translate: 'Category',
				type: 'item',
				icon: 'add',
				url: '/categories'
			},
			{
				id: 'example-component',
				title: 'Example',
				translate: 'Example',
				type: 'item',
				icon: 'extension',
				url: '/example'
			},
		]
	}
];

export default navigationConfig;
