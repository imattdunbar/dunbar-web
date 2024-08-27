import dayjs from 'dayjs'
import portfolio from '$lib/data/portfolio.json'

export type SiteData = {
	cards: CardInfo[]
	pages: PageInfo[]
}

export type CardInfo = {
	title: string
	description: string
	href: string
	imageUrl?: string
	imageAlt?: string
}

export type PageInfo = {
	title: string
	subtitle?: string
	entries: PortfolioEntry[]
}

export type PortfolioEntry = {
	title: string
	time?: string
	description: string
	imageUrl: string
	imageAlt: string
}

export function getData(): SiteData {
	return portfolio as SiteData
}

export function getAge(): string {
	const birthday = dayjs('12/05/1993')
	const today = dayjs()
	return `${today.diff(birthday, 'year')}`
}

export function getYear(): string {
	return `${dayjs().year()}`
}
