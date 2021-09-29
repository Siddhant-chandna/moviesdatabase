import React from 'react'

function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">Rating: {selected.imdbRating} <br />
				<strong>RunTime : {selected.Runtime}</strong> <br />
				Language : {selected.Language} </p>
				<div className="plot">
					<img src={selected.Poster} alt=" " />
					<p>Actors : {selected.Actors}
					<br />
						Directed by : {selected.Director}
					<br />
					  <i> Genre : {selected.Genre}</i>
					</p>
					<p>{selected.Plot}</p>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup