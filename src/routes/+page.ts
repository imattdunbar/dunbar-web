import { getData } from '$lib/util/data'
import type { PageLoad } from './$types'

export const load: PageLoad = () => {
	const data = getData()
	return { cards: data.cards }
}
