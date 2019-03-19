import { h, Component } from 'preact';
import { route } from 'preact-router';
import Headroom from "react-headroom";
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

export default class Header extends Component {

	render() {
		return (
			<div>
				<Headroom class={style.headroom} wrapperStyle={{ position: 'fixed', left: '0', right: '0', fontsize: '25px' }}>
					<nav className="navbar navbar-light navbar-expand-md navbar navbar-expand-lg js-scroll-trigger" id="mainNav" data-offset-bottom="400">
						<div className="container"><a className="navbar-brand" href="/">Rethink
							Technologies</a>
							<button className="navbar-toggler" type="button" data-toggle="collapse"
							        data-target="#navbarResponsive" aria-controls="navbarNav" aria-expanded="false"
							        aria-label="Toggle navigation">
								<FontAwesomeIcon icon={faBars} />
							</button>
							<div className="collapse navbar-collapse" id="navbarResponsive">
								<ul className="nav navbar-nav ml-auto">
									<li className="nav-item nav-link js-scroll-trigger" role="presentation"><a
										className="nav-link js-scroll-trigger" href="/team">Team</a></li>
									<li className="nav-item nav-link js-scroll-trigger" role="presentation"><a
										className="nav-link js-scroll-trigger" href="/contact">contact</a></li>
								</ul>
							</div>
						</div>
					</nav>
				</Headroom>
			</div>
		);
	}
}
