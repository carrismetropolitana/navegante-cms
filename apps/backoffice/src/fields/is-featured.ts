/* * */

import type { Field } from 'payload';

/* * */

export const isFeaturedField: Field = {
	admin: {
		position: 'sidebar',
	},
	label: 'Em Destaque?',
	name: 'is_featured',
	type: 'checkbox',
};
