/* * */

import { type GlobalConfig } from 'payload';

/* * */

export const VirtualCardTutorial: GlobalConfig = {

	access: {
		read: () => true,
	},

	fields: [
		{
			admin: {
				components: {
					RowLabel: '@/components/VirtualCardTutorialStepLabel/index#VirtualCardTutorialStepLabel',
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
					label: 'Vídeo',
					name: 'video',
					relationTo: 'media',
					required: true,
					type: 'upload',
				},
				{
					fields: [
						{
							label: '✅ Opção de Resposta Correta',
							name: 'correct_answer',
							required: true,
							type: 'text',
						},
						{
							label: '❌ Opção de Resposta Errada',
							name: 'wrong_answer',
							required: true,
							type: 'text',
						},
					],
					type: 'row',
				},
			],
			name: 'steps',
			type: 'array',
		},
	],

	label: {
		plural: 'Tutorial do Cartão Virtual',
		singular: 'Tutorial do Cartão Virtual',
	},

	slug: 'virtual-card-tutorial',

};
