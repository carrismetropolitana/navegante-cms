/* * */

import { withPayload } from '@payloadcms/next/withPayload';
import { type NextConfig } from 'next';

/* * */

const nextConfig: NextConfig = {
	basePath: '/admin',
	output: 'standalone',
	reactStrictMode: true,

	images: {
		remotePatterns: [
			{
				hostname: '*.oraclecloud.com',
				port: '',
				protocol: 'https',
			},
		],
	}
};

/* * */

export default withPayload(nextConfig);
