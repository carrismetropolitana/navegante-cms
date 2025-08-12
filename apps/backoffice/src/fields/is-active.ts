/* * */

import type { Field } from 'payload';

/* * */

export const isActiveField: Field = {
	admin: {
		position: 'sidebar',
	},
	label: 'Ativo?',
	name: 'is_active',
	type: 'checkbox',
};
