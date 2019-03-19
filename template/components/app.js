import { h, Component } from 'preact';
import { Router } from 'preact-router';


import Header from './header/index';
import Footer from './footer';
import Home from '../routes/home/index';
import NotFound from '../routes/404/index';
import Contact from '../routes/contact';
import Thanks from '../routes/thanks';
import Team from '../routes/team'
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.setState({
			currentUrl: e.url
		});
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Team path="/team" />
					<Contact path="/contact" />
					<Thanks path="/thanks" />
					<NotFound default />
				</Router>
			</div>
		);
	}
}
