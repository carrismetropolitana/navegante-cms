/* * */

import type { Field } from 'payload';

/* * */

export const updatedAtField: Field = {

	admin: {
		date: {
			displayFormat: 'yyyy-MM-dd HH:mm',
			pickerAppearance: 'dayAndTime',
		},
		position: 'sidebar',
	},

	hooks: {
		beforeChange: [
			() => new Date(),
		],
	},

	label: 'Data de Atualização',

	name: 'updatedAt',

	required: true,

	type: 'date',
};
