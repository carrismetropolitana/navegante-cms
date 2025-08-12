'use client';

/* * */

import { useRowLabel } from '@payloadcms/ui';

/* * */

export const FileOrUrlRowLabel = () => {
	//

	const { data } = useRowLabel<{ content_type: string, title: string }>();

	if (!data) {
		return '---';
	}

	const title = data.title || 'Documento sem nome';
	const contentType = data.content_type || ' - ';

	return `${title} (${contentType})`;

	//
};
