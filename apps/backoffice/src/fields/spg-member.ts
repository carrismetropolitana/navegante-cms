/* * */

import type { Field } from 'payload';

/* * */

export const spgMemberFieldSet: Field[] = [
	{
		fields: [
			{
				label: 'Nome',
				name: 'name',
				required: true,
				type: 'text',
			},
			{
				label: 'Cargo',
				name: 'position',
				type: 'text',
			},
			{
				label: 'Cidade',
				name: 'city',
				type: 'text',
			},
		],
		type: 'row',
	},
	{
		label: 'Foto',
		name: 'photo',
		relationTo: 'media',
		type: 'upload',
	},
	{
		label: 'Separar do elemento seguinte',
		name: 'separated_from_next',
		type: 'checkbox',
	},
];
