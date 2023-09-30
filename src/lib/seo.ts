import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'airbauer ─ developer';
	const description = "Hey 👋 I'm Viktor, a developer";

	return {
		title,
		description,
		canonical: `https://airbauer.eu/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'airbauer',
			url: `https://airbauer.eu/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://airbauer.eu/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@real_airbauer',
			site: '@real_airbauer',
		},
		...props,
	};
}
