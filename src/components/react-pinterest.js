import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PinterestBookmark extends Component {

	componentDidMount() {

		var js = document.createElement("script"),
			pin = document.getElementById("pinterest");

		js.setAttribute("async", "true");
		js.setAttribute("defer", "true");
		js.setAttribute("src", "//assets.pinterest.com/js/pinit.js");


		if (this.props.round == true) {

			pin.setAttribute("data-pin-round", "true");

		}

		if (this.props.large == true) {

			pin.setAttribute("data-pin-tall", "true");

		}


		if (this.props.language != "" || this.props.language != null) {

			pin.setAttribute("data-pin-lang", + this.props.language);

		}

		document.getElementsByTagName("head").item(0).appendChild(js);

	}

	render() {
		return (
			<div id="container">
				<a id="pinterest" data-pin-do="buttonBookmark" data-pin-lang={this.props.language} href="https://www.pinterest.com/pin/create/button/"></a>
			</div>
		)
	}
}

PinterestBookmark.propTypes = {
	round: PropTypes.bool,
	large: PropTypes.bool,
	language: PropTypes.string
}

// ------------------------------------------------------------------------------------

class PinterestButtonFollow extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {

		var js = document.createElement("script");

		js.setAttribute("async", "true");
		js.setAttribute("defer", "true");
		js.setAttribute("src", "//assets.pinterest.com/js/pinit.js");
		document.getElementsByTagName("head").item(0).appendChild(js);

	}

	render() {
		return (
			<div id="container">
				<a data-pin-do="buttonFollow" href={"https://www.pinterest.com/" + this.props.follow}>{this.props.fullName}</a>
			</div>
		)
	}
}

PinterestButtonFollow.propTypes = {
	follow: PropTypes.string.isRequired,
	fullName: PropTypes.string
}

// ------------------------------------------------------------------------------------

class PinterestPin extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {

		var js = document.createElement("script"),
			pin = document.getElementById("pinterest");

		js.setAttribute("async", "true");
		js.setAttribute("defer", "true");
		js.setAttribute("src", "//assets.pinterest.com/js/pinit.js");

		document.getElementsByTagName("head").item(0).appendChild(js);

	}

	render() {
		return (
			<div id="container">
				<a id="pinterest" data-pin-do="embedPin" data-pin-width={this.props.size} data-pin-terse={this.props.descriptionHide} href={"https://www.pinterest.com/pin/" + this.props.pinID}></a>
			</div>
		)
	}
}

PinterestPin.propTypes = {
	size: PropTypes.oneOf(["","small","medium","large"]).isRequired,
	descriptionHide: PropTypes.oneOf(["","true","false"])
}

// ------------------------------------------------------------------------------------

class PinterestBoard extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {

		var js = document.createElement("script"),
			pin = document.getElementById("pinterest");

		js.setAttribute("async", "true");
		js.setAttribute("defer", "true");
		js.setAttribute("src", "//assets.pinterest.com/js/pinit.js");

		if (this.props.format == "square") {
			pin.setAttribute("data-pin-board-width", "400");
			pin.setAttribute("data-pin-scale-height", "240");
			pin.setAttribute("data-pin-scale-width", "80");
		}

		if (this.props.format == "sidebar") {
			pin.setAttribute("data-pin-board-width", "150");
			pin.setAttribute("data-pin-scale-height", "800");
			pin.setAttribute("data-pin-scale-width", "60");
		}

		if (this.props.format == "header") {
			pin.setAttribute("data-pin-board-width", "900");
			pin.setAttribute("data-pin-scale-height", "120");
			pin.setAttribute("data-pin-scale-width", "115");
		}

		if (this.props.format == "custom") {
			pin.setAttribute("data-pin-board-width", + this.props.boardWidth);
			pin.setAttribute("data-pin-scale-height", + this.props.scaleHeight);
			pin.setAttribute("data-pin-scale-width", + this.props.scaleWidth);


		}

		document.getElementsByTagName("head").item(0).appendChild(js);

	}

	render() {
		return (
			<div id="container">
				<a id="pinterest" data-pin-do="embedBoard" href={"https://www.pinterest.com/" + this.props.boardUrl}></a>
			</div>
		)
	}
}

PinterestBoard.propTypes = {
	format: PropTypes.oneOf(["square","sidebar","header","custom"]).isRequired,
	boardWidth: PropTypes.string,
	scaleHeight: PropTypes.string,
	scaleWidth: PropTypes.string,
	boardUrl: PropTypes.string,
}

// ------------------------------------------------------------------------------------

class PinterestProfile extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {

		var js = document.createElement("script"),
			pin = document.getElementById("pinterest");

		js.setAttribute("async", "true");
		js.setAttribute("defer", "true");
		js.setAttribute("src", "//assets.pinterest.com/js/pinit.js");

		if (this.props.format == "square") {
			pin.setAttribute("data-pin-board-width", "400");
			pin.setAttribute("data-pin-scale-height", "240");
			pin.setAttribute("data-pin-scale-width", "80");
		}

		if (this.props.format == "sidebar") {
			pin.setAttribute("data-pin-board-width", "150");
			pin.setAttribute("data-pin-scale-height", "800");
			pin.setAttribute("data-pin-scale-width", "60");
		}

		if (this.props.format == "header") {
			pin.setAttribute("data-pin-board-width", "900");
			pin.setAttribute("data-pin-scale-height", "120");
			pin.setAttribute("data-pin-scale-width", "115");
		}

		if (this.props.format == "custom") {
			pin.setAttribute("data-pin-board-width", + this.props.boardWidth);
			pin.setAttribute("data-pin-scale-height", + this.props.scaleHeight);
			pin.setAttribute("data-pin-scale-width", + this.props.scaleWidth);


		}

		document.getElementsByTagName("head").item(0).appendChild(js);

	}

	render() {
		return (
			<div id="container">
				<a id="pinterest" data-pin-do="embedUser" href={"https://www.pinterest.com/" + this.props.userName}></a>
			</div>
		)
	}
}

PinterestProfile.propTypes = {
	format: PropTypes.oneOf(["square","sidebar","header","custom"]).isRequired,
	boardWidth: PropTypes.string,
	scaleHeight: PropTypes.string,
	scaleWidth: PropTypes.string,
	userName: PropTypes.string,
}

// ------------------------------------------------------------------------------------

export {
  PinterestBookmark,
  PinterestButtonFollow,
  PinterestPin,
  PinterestBoard,
  PinterestProfile
}
