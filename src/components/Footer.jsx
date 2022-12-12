import React from 'react';
import socialData from '../data/socialData';

function Footer() {
	const socialElements = socialData.map(social => 
		<a 
			key={social.id} 
			href={social.link} 
			title={social.title}
			className="p-2 bg-stone-400 rounded-full duration-200 ease-out hover:bg-[#8d8884]"
		>
			<img 
				src={social.icon} 
				alt={social.title} 
				className="w-[25px] h-[25px] object-contain ml"
			/>
		</a>
	);

	return (
		<footer className="w-full pt-16 sm:pt-24 pb-5">
			<div className="flex flex-col justify-center items-center">
				<nav className="flex flex-row gap-3 mb-3">
					{ socialElements }
				</nav>
				<p className="font-inter font-normal text-sm text-stone-900 dark:text-white opacity-50">
					© 2022 Roman S. All rights reserved.
				</p>
			</div>
		</footer>
	)
}
export default Footer;