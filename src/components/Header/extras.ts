import { AvengerassmenleJPG, AvengersJPG, FrozenJPG, JokerJPG, SpidermanJPG, SuperMarioJPG } from "@assets/components/Header";

export interface IDraft{
	image: string;
	title: string;	
	description: string;

}


export const DDraft:IDraft[] = [
	{
		image: `${SpidermanJPG}`,
		title: 'Spider Man',
		description: 'Description for Slide 1',
	},
	
]
