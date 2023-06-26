import React, {ReactElement} from 'react'

export interface BookProps {
	id: number
	title: string
	to: string
	icon: ReactElement
}

export const book = [
	{
		id: 1,
		title: 'Home',
		to: '/',
		icon: <div />,
	},
	{
		id: 2,
		title: 'Notifications',
		to: '/notifications',
		icon: <div />,
	},
	{
		id: 3,
		title: 'Messages',
		to: '/messages',
		icon: <div />,
	},
	{
		id: 4,
		title: 'Subscriptions',
		to: '/subscriptions',
		icon: <div />,
	},
	{
		id: 5,
		title: 'Subscribers',
		to: '/subscribers',
		icon: <div />,
	},
	{
		id: 6,
		title: 'Suggestions',
		to: '/suggestions',
		icon: <div />,
	},
	{
		id: 7,
		title: 'My Profile',
		to: '/profile',
		icon: <div />,
	},
]
