import React, { useState, useEffect } from 'react';
import { Intro, Skills, Portfolio, Footer } from './components';
import { sun, moon } from './img/theme/';

function App() {
	const [theme, setTheme] = useState(null);
	
	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('moon');
		} else {
			setTheme('sun');
		}
	}, []);

	useEffect(() => {
		if (theme === 'moon') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	function handleClick() {
		setTheme(theme === 'sun' ? 'moon' : 'sun');
	}

	return (
		<>
			<button 
				onClick={handleClick} 
				className="fixed top-3 xs:top-5 right-3 xs:right-4 sm:right-8 bg-violet-500 dark:bg-orange-300 rounded-md p-1.5 md:p-2 z-10"
			>
				{ theme === 'sun' ? moon : sun }
			</button>

			<div className='bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300'>
				<div className="w-11/12 max-w-5xl mx-auto">
					<Intro />
					<Skills />
					<Portfolio /> 
					<Footer />
				</div>
			</div>
		</>
	)
}
export default App;