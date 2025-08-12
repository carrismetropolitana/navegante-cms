'use client';

/* * */

import { useField } from '@payloadcms/ui';

/* * */

export function OpenTransactionDocumentButton({ path }) {
	//

	//
	// A. Fetch data

	const { value: docId } = useField({ path: path.replace('open_pdf', 'doc_id') });

	//
	// B. Render components

	return (
		<a
			className="btn btn--size-medium btn--style-primary"
			href={`/api/account/payments/get-invoice-pdf/${docId}`}
			style={{ textAlign: 'center' }}
			target="_blank"
		>
			Abrir Fatura em PDF
		</a>
	);

	//
}
