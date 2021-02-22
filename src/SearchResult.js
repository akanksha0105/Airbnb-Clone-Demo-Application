import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import "./SearchResult.css";

function SearchResult({
	img,
	location,
	title,
	description,
	star,
	price,
	total,
}) {
	return (
		<div className="searchResult">
			<img src={img} alt="" />
			<FavoriteBorderIcon className="searchResult__heartIcon" />
			<div className="searchResult__info">
				<div className="searchResult__infoTop">
					<p>{location}</p>
					<h2>{title}</h2>
					<p>___</p>
					<p>{description}</p>
				</div>
				<div className="searchResult__infoBottom">
					<div className="infoBottom__rate">
						<StarIcon className="searchResult__rateIcon" />
						<p>
							<strong>{star}</strong>
						</p>
					</div>
					<div className="infoBottom__price">
						<h2>{price}</h2>
						<p>{total}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchResult;
