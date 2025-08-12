/* * */

import type { Field } from 'payload';

/* * */

export const featuredImageField: Field = {
	admin: {
		position: 'sidebar',
	},
	label: 'Image de Destaque',
	name: 'featured_image',
	relationTo: 'media',
	type: 'upload',
};
