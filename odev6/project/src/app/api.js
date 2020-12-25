import { API_PROTOCOL, API_HOST } from '@env';

/**
 * @param {string} uri 
 * @return {json}
 */
export async function $get(uri) {
    const seperator = uri.charAt(0) === '/' ? '' : '/';
    const url = `${API_PROTOCOL}://${API_HOST}${seperator}${uri}`;
    const response = await fetch(url);
    
    if (response.ok) {
        return await response.json();
    } else {
        return false;
    }
}