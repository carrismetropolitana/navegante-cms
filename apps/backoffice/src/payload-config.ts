/* * */

import { getPublicVariable } from '@carrismetropolitana/navegante-cms-shared-settings';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { nodemailerAdapter } from '@payloadcms/email-nodemailer';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { s3Storage } from '@payloadcms/storage-s3';
import { buildConfig } from 'payload';
import sharp from 'sharp';

/* * */

import { CatalogProducts } from '@/schemas/CatalogProducts/collection';
import { Media } from '@/schemas/Media/collection';
import { Users } from '@/schemas/Users/collection';

/* * */

import { GeneralStatus } from '@/schemas/GeneralStatus/global';
import { VirtualCardTutorial } from '@/schemas/VirtualCardTutorial/global';

/* * */

export default buildConfig({

	admin: { user: 'users' },

	collections: [
		Media,
		CatalogProducts,
		Users,
	],

	db: mongooseAdapter({ url: process.env.CMSDB_URI || 'mongodb://placeholder:placeholder@placeholder:12345/placeholder' }),

	editor: lexicalEditor(),

	email: nodemailerAdapter({
		defaultFromAddress: process.env.EMAIL_FROM_ADDRESS ?? '',
		defaultFromName: process.env.EMAIL_FROM_NAME ?? '',
		skipVerify: true,
		transportOptions: {
			auth: {
				pass: process.env.EMAIL_SERVER_PASSWORD,
				user: process.env.EMAIL_SERVER_USER,
			},
			host: process.env.EMAIL_SERVER_HOST,
			port: Number(process.env.EMAIL_SERVER_PORT ?? 465),
		},
	}),

	globals: [
		GeneralStatus,
		VirtualCardTutorial,
	],

	plugins: [
		s3Storage({
			bucket: process.env.OCI_S3_NAMESPACE ?? 'placeholder', // Bucket should be the namespace in OCI Object Storage
			collections: {
				media: true,
			},
			config: {
				credentials: {
					accessKeyId: process.env.OCI_S3_ACCESS_KEY_ID ?? 'placeholder',
					secretAccessKey: process.env.OCI_S3_SECRET_ACCESS_KEY ?? 'placeholder',
				},
				endpoint: process.env.OCI_S3_ENDPOINT ?? 'https://placeholder.endpoint.com',
				region: process.env.OCI_S3_REGION ?? 'placeholder',
				requestHandler: {
					connectionTimeout: 5_000,
					httpAgent: {
						keepAlive: false,
						maxSockets: 300,
					},
					httpsAgent: {
						keepAlive: false,
						maxSockets: 300,
					},
					requestTimeout: 30_000,
				},
			},
		}),
	],

	routes: {
		admin: '/',
	},

	secret: process.env.PAYLOAD_SECRET || 'placeholder',

	serverURL: getPublicVariable('server_url_backoffice'),

	sharp: sharp,

});
