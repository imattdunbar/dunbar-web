import axios from 'axios';
import dayjs from 'dayjs';

export type SiteData = {
	cards: CardInfo[];
	pages: PageInfo[];
};

export type CardInfo = {
	title: string;
	description: string;
	href: string;
	imageUrl?: string;
	imageAlt?: string;
};

export type PageInfo = {
	title: string;
	subtitle?: string;
	entries: PortfolioEntry[];
};

export type PortfolioEntry = {
	title: string;
	time?: string;
	description: string;
	imageUrl: string;
	imageAlt: string;
};

export async function getData(): Promise<SiteData> {
	if (import.meta.env.DEV) {
		axios.defaults.baseURL = 'http://localhost:7777';
	}

	const data = (await axios.get('portfolio.json')).data as SiteData;
	return data;
}

export function getAge(): string {
	const birthday = dayjs('12/05/1993');
	const today = dayjs();
	return `${today.diff(birthday, 'year')}`;
}

export function getYear(): string {
	return `${dayjs().year()}`;
}
