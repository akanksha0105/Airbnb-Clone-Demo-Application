import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__icon"
					src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
					alt=""
				/>
			</Link>

			<div className="header__search">
				<input type="text"></input>
				<SearchIcon />
			</div>

			<div className="header__featureBar">
				<p>Become a host</p>
				<LanguageIcon />
				<ExpandMoreIcon />
				<AccountCircleIcon />
			</div>
		</div>
	);
}

export default Header;
