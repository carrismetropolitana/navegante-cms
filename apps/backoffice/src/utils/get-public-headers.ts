/* * */

/**
 * Get public headers for API responses.
 * This function sets the necessary headers for public API responses,
 * including CORS headers and content type.
 * @param cacheAge The age in seconds for which the response can be cached.
 * @returns Headers object with the appropriate headers set.
 */
export function getPublicHeaders(cacheAge: null | number): HeadersInit {
	return {
		'Access-Control-Allow-Origin': '*',
		'Expires': cacheAge ? new Date(Date.now() + cacheAge * 1000).toUTCString() : '0',
	};
}
