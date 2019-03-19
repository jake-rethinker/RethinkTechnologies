import { h, Component } from 'preact';
import style from './style';
import Headroom from 'react-headroom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Footer from '../../components/footer';
import {faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons';

const Sub = require('../../assets/submarine supertanker.png');
const Elpipe = require('../../assets/elpipe.png');
const BallisticBreaker = require('../../assets/ballisticbreaker.jpg');
const Background = require('../../assets/intro-bg.jpg');

export default class Home extends Component {
	render() {
		return (
			<div class={`${style.home} page`}>
				<header className="masthead" style="background-image:url('../../assets/intro-bg.jpg'); height: 1000px;">
					<div className="intro-body">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-auto">
									<h1 className="brand-heading"
									    style="opacity: 0.82;filter: blur(0px) brightness(179%);font-size: 3rem;">Rethink
										Technologies</h1>
									<p className="intro-text">Inventing key technologies to confront global warming,
										overpopulation, and many other eco-disasters.</p><a
									className="btn btn-link btn-circle" role="button" href="#about">< FontAwesomeIcon icon={faAngleDoubleDown}/></a></div>
							</div>
						</div>
					</div>
				</header>
				<section id="about" className="content-section text-center" style="background-color: #333333; height: 1000px;">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 mx-auto">
								<h2 style="font-size: 60px; color: whitesmoke;">Key Inventions</h2>
								<div className="border-success accordian" style="filter: brightness(82%);">
									<ul>
										<li><a href="#" className="image_title"
										       style="color: rgb(255,255,255);font-size: 26px;">The Ballistic
											Breaker</a><a href="#"><img src={BallisticBreaker} /></a>
										</li>
										<li><a href="#" className={style.elpipe}
										       style="color: rgb(255,255,255);font-size: 26px;">The Electric
											Pipeline</a><a href="#"><img src={Elpipe} /></a>
										</li>
										<li><a href="#" className="image_title"
										       style="color: rgb(255,255,255);font-size: 26px;">Submarine
											Supertanker</a><a href="#"><img
											src={Sub} width="500" /></a></li>
									</ul>
								</div>
							</div>
						</div>
						<a
							className="btn btn-link btn-circle" role="button" href="#download">< FontAwesomeIcon icon={faAngleDoubleDown}/></a>
					</div>
				</section>
				<div class={style.backgroundimage}>
				<section id="download" className="download-section content-section text-center"
				         style="background-color: transparent; height: 1000px; display: flex; align-items: center; z-index: -1;">
					<div className="container">
						<div className="col-lg-8 mx-auto">
							<h1>What we do</h1>
							<p>Rethink Technologies strives to develop solutions to ongoing issues in our climate,
								economy, and foreign relationships.</p>
						</div>
					</div>
				</section>
					<Footer />
				</div>
			</div>
		);
	}
}
