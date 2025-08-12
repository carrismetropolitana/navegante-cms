/* * */

import { type CollectionConfig } from 'payload';

/* * */

export const CatalogProducts: CollectionConfig = {

	access: {
		read: () => true,
	},

	admin: {
		useAsTitle: 'title',
	},

	fields: [
		{
			label: 'ID do Produto APEX',
			name: 'product_id',
			required: true,
			type: 'text',
		},
		{
			label: 'Título',
			name: 'title',
			required: true,
			type: 'text',
		},
		{
			label: 'Imagem de Capa',
			name: 'cover_image',
			relationTo: 'media',
			required: false,
			type: 'upload',
		},
		{
			admin: {
				components: {
					RowLabel: '@/components/CatalogProductsCardLabel/index#CatalogProductsCardLabel',
				},
				initCollapsed: true,
			},
			fields: [
				{
					defaultValue: false,
					label: 'Is Enabled',
					name: 'is_enabled',
					type: 'checkbox',
				},
				{
					label: 'Título',
					name: 'title',
					required: true,
					type: 'text',
				},
				{
					label: 'Description',
					name: 'description',
					required: true,
					type: 'textarea',
				},
				{
					label: 'Imagem (opcional)',
					name: 'image',
					relationTo: 'media',
					required: false,
					type: 'upload',
				},
			],
			label: 'Cartões de Informação',
			name: 'info_cards',
			type: 'array',
		},
	],

	labels: {
		plural: 'Catálogo',
		singular: 'Produto',
	},

	slug: 'catalog-products',

};
