'use client';

/* * */

import { useRowLabel } from '@payloadcms/ui';

/* * */

export const GeneralStatusMessageLabel = () => {
	//

	const { data } = useRowLabel<{ is_enabled: boolean, title: string }>();

	if (!data) {
		return '---';
	}

	const isEnabled = data.is_enabled ? '✅' : '❌';
	const title = data.title || 'Untitled Message';

	return `${isEnabled} ${title}`.trim();

	//
};
