import React from 'react';

function Intro() {
	return (
		<section className="pt-16 pb-8 px-3 sm:pb-10 flex flex-col justify-center items-center">
			<div className="w-full max-w-xs xs:max-w-sm sm:max-w-[480px] text-center">
				<h1 className="font-inter font-bold text-2xl md:text-3xl dark:text-white">
					Roman S.
				</h1>
				<p className="font-inter font-medium text-base md:text-lg my-2">
					Front-End Developer
				</p>	
				<p className="font-inter font-semibold text-sm">
					I'm a front-end developer who's main passion is creating responsive & pixel-perfect websites and specialize in their animation. Also, I have experience in Figma and Photoshop.
				</p>
			</div>
		</section>
	)
}
export default Intro;