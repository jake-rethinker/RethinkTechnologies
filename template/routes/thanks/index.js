import { h, Component } from 'preact';
import style from './style';

export default class Thanks extends Component {

	render() {
		return (
			<div class={`${style.home} page`}>
				<header className="masthead" style="background-image:url('../../assets/intro-bg.jpg'); height: 950px;">
					<div className="intro-body">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-auto">
									<h1 className="brand-heading"
									    style="opacity: 0.82;filter: blur(0px) brightness(179%);font-size: 60px;">Thank you for reaching out!</h1>
									<p className="intro-text">We'll get back to you as soon as possible.</p>
								</div>
							</div>
						</div>
					</div>
				</header>
			</div>
		);
	}
}
