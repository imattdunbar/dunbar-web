import { getData } from '$lib/util/data';

export async function load() {
	return getData();
}
