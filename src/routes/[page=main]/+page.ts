import { getData, type PageInfo } from '$lib/util/data';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const data = getData();
	const pageData = data.pages.find((page) =>
		page.title.toLowerCase().includes(params.page.toLowerCase())
	) as PageInfo;
	return pageData;
};
