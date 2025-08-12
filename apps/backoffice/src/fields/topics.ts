/* * */

import type { Field } from 'payload';

/* * */

export const topicsField: Field = {
	admin: {
		position: 'sidebar',
	},
	hasMany: true,
	label: 'Tópicos',
	name: 'topics',
	relationTo: 'topics',
	type: 'relationship',
};
