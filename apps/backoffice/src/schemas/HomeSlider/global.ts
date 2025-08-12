/* * */

import { type GlobalConfig } from 'payload';

/* * */

export const HomeSlider: GlobalConfig = {

	access: {
		read: () => true,
	},

	fields: [
		{
			admin: {
				components: {
					RowLabel: '@/components/HomeSliderMessageLabel/index#HomeSliderMessageLabel',
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
					fields: [
						{
							label: 'Image',
							name: 'image',
							relationTo: 'media',
							type: 'upload',
						},
					],
					type: 'row',
				},
				{
					fields: [
						{
							label: 'Title (used for accessibility)',
							name: 'title',
							type: 'text',
						},
						{
							label: 'More Info URL (optional)',
							name: 'more_info_url',
							type: 'text',
						},
					],
					type: 'row',
				},
				{
					fields: [
						{
							label: 'Start Date (optional)',
							name: 'start_date',
							type: 'date',
						},
						{
							label: 'End Date (optional)',
							name: 'end_date',
							type: 'date',
						},
					],
					type: 'row',
				},
			],
			name: 'slides',
			type: 'array',
		},
	],

	label: {
		plural: 'Home Slider',
		singular: 'Home Slider Slide',
	},

	slug: 'home-slider',

};
