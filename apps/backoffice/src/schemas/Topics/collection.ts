/* * */

import { type CollectionConfig } from 'payload';

/* * */

export const Topics: CollectionConfig = {

	access: {
		read: () => true,
	},

	admin: {
		useAsTitle: 'title',
	},

	fields: [
		{
			label: 'Título',
			name: 'title',
			required: true,
			type: 'text',
		},
		{
			label: 'Descrição',
			name: 'description',
			required: false,
			type: 'text',
		},
	],

	labels: {
		plural: 'Tópicos',
		singular: 'Tópico',
	},

	slug: 'topics',

};
