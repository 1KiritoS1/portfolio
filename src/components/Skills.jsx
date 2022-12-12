import React from 'react';
import { skillset, provide } from '../data/skillsData';

function Skills() {
	const heading = 'font-inter font-bold text-base md:text-lg text-stone-900 dark:text-white mb-3';

	const provideElements = provide.map(provide => 
		<div key={provide.id} className="text-center sm:text-left">
			<h3 className={heading}>
				{ provide.title }
			</h3>
			<ul>
				{ provide.list.map((listItem, index) =>
					<li 
						key={index}
						className={`font-inter font-semibold text-sm text-stone-900 dark:text-stone-300 ${index === provide.list.length - 1 ? 'mb-0' : 'mb-3'} before:hidden sm:before:block before:absolute before:w-[10px] before:h-[10px] before:mt-[5px] before:bg-green-500 before:rounded-full`}
					>
						<span className="pl-0 sm:pl-5">{ listItem }</span>
					</li>
				)}
			</ul>
		</div>
	);

	const skillsElements = skillset.map(skillset => 
		<div key={skillset.id} className="text-center sm:text-left">
			<h3 className={heading}>
				{ skillset.title }
			</h3>	
			<ul>
				{skillset.list.map((listItem, index) => 
					<li 
						key={index} 
						className={`font-inter font-semibold text-sm text-stone-900 dark:text-stone-300 ${index === skillset.list.length - 1 ? 'mb-0' : 'mb-3'} before:hidden sm:before:block before:absolute before:w-[10px] before:h-[10px] before:mt-[5px] before:bg-green-500 before:rounded-full`}
					>
						<span className="pl-0 sm:pl-5">{ listItem }</span>
					</li>
				)}
			</ul>
		</div>
	);

	return (
		<section className="w-full py-5 px-3 flex flex-col justify-center items-center"> 
			<div className="w-full max-w-[700px] gap-8 sm:gap-1 flex flex-col sm:flex-row justify-between items-center sm:items-start">
				{ provideElements } { skillsElements }	
			</div>
		</section>
	)
}
export default Skills;