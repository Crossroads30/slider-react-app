import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
function App() {
	const [people, setPeople] = useState(data)
	const [index, setIndex] = useState(2)

  useEffect(() => {
    const lastIndex = people.length -1
    if ( index < 0 ) {
      setIndex(lastIndex)
    } if ( index > lastIndex ) {
      setIndex(0)
    }
  }, [index, people])

  useEffect(() => {
  const autoSlides = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => clearInterval(autoSlides) 
  }, [index])

  // without useEffect
	// const checkNumber = number => {
	// 	if (number < 0) {
	// 		return people.length - 1
	// 	}
	// 	if (number > people.length - 1) {
	// 		return 0
	// 	}
	// 	return number
	// }

	// const prevSlide = () => {
	// 	setIndex(index => {
	// 		const newIndex = index - 1
	// 		return checkNumber(newIndex)
	// 	})
	// }
	// const nextSlide = () => {
	// 	setIndex(index => {
	// 		const newIndex = index + 1
	// 		return checkNumber(newIndex)
	// 	})
	// }

	return (
		<section className='section'>
			<div className='title'>
				<h2>
					<span>/</span>reviews
				</h2>
			</div>
			<div className='section-center'>
				{people.map((person, personIndex) => {
					const { id, name, image, title, quote } = person
					let position = 'nextSlide'
					if (personIndex === index) {
						position = 'activeSlide'
					}
					if (
						personIndex === index - 1 ||
						(index === 0 && personIndex === people.length - 1)
					) {
						position = 'lastSlide'
					}
					return (
						<article className={position} key={id}>
							<img className='person-img' src={image} alt={name} />
							<h4>{name}</h4>
							<p className='title'>{title}</p>
							<p className='text'>{quote}</p>
							<FaQuoteRight className='icon' />
						</article>
					)
				})}
				{/* <button onClick={prevSlide} className='prev' type='button'> */}
				<button
					onClick={() => setIndex(index - 1)}
					className='prev'
					type='button'
				>
					<FiChevronLeft />
				</button>
				{/* <button onClick={nextSlide} className='next' type='button'> */}
				<button
					onClick={() => setIndex(index + 1)}
					className='next'
					type='button'
				>
					<FiChevronRight />
				</button>
			</div>
		</section>
	)
}

export default App
