import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
function App() {
	const [people, setPeople] = useState(data)
	const [index, setIndex] = useState(0)
	const { id, name, image, title, quote } = people[index]
	return (
		<main>
			<section className='section'>
				<div className='title'>
					<h2>
						<span>/</span>reviews
					</h2>
				</div>
			</section>
			<section className='section-center'>
				<article>
					<img className='person-img' src={image} alt={name} />
					<h4>{name}</h4>
					<div className='title'>{title}</div>
					<p>{quote}</p>
				</article>
			</section>
		</main>
	)
}

export default App
