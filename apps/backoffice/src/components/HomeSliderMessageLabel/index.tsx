'use client';

/* * */

import { useRowLabel } from '@payloadcms/ui';

/* * */

export const HomeSliderMessageLabel = () => {
	//

	const { data } = useRowLabel<{ is_enabled: boolean, title: string }>();

	if (!data) {
		return '---';
	}

	const isEnabled = data.is_enabled ? '✅' : '❌';
	const title = data.title || 'Untitled Slide';

	return `${isEnabled} ${title}`.trim();

	//
};
