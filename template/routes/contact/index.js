import { h, Component } from 'preact';
import style from './style';
import axios from 'axios';
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Footer from '../../components/footer';

export default class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			routeValue: '',
			email: '',
			phone: '',
			message: '',
			name: '',
			cname: ''
		};
		this.submit = this.submit.bind(this);
		this.handleValues = this.handleValues.bind(this);
	}

	changeURL(args) {
		window.location = args;
	}

	submit() {
		let data = {
			message: { },
			_replyto: this.props.email
		};
		console.log(data);
		axios.post(
			'https://formspree.io/mglkzpkx',
			this.state,
			{ headers: { Accept: 'application/json' }, method: 'POST' }
		).then((() => {
			window.location = '/thanks';
		}));
	}
	handleValues = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	onKeyPress = (event) => {
		if (event.key === 'Enter') {
			this.setState({
				routeValue: event.target.value
			});
			this.changeURL(this.state.routeValue);
		}
	};

	render() {
		return (
			<div class={`${style.home} page`}>
				<header className="masthead" style="background-image:url('../../assets/intro-bg.jpg'); height: 950px;">
					<div className="intro-body">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-auto">
									<h1 className="brand-heading"
									    style="opacity: 0.82;filter: blur(0px) brightness(179%);font-size: 60px;">Contact</h1>
									<p className="intro-text">Reach out to us if you have questions about our
										technologies or inquiries on collaborating with us.</p><a
									className="btn btn-link btn-circle" role="button" href="#contact"
									style="scroll-behavior: smooth;scroll-behavior: smooth;">< FontAwesomeIcon icon={faAngleDoubleDown}/></a></div>
							</div>
						</div>
					</div>
				</header>
				<div class={style.backgroundimage}>
					<div className="d-flex justify-content-xl-center align-items-xl-center contact-clean" id="contact"
					     style="height: 850px;">
						<form method="post" style="margin-top: 0px;">
							<h2 className="text-center" style="font-family: Roboto, sans-serif;">Contact us</h2>
							<div className="form-group"><input className="form-control" type="text" name="name" id="name"
							                                   onChange={this.handleValues} value={this.state.name} placeholder="Name" style="font-family: Roboto, sans-serif;"/>
							</div>
							<div className="form-group"><input className="form-control is-invalid" type="email" name="email" id="email"
							                                   placeholder="Email"
							                                   onChange={this.handleValues} value={this.state.email} style="font-family: Roboto, sans-serif;"/>
								<small className="form-text text-danger" style="font-family: Roboto, sans-serif;">Please
									enter a correct email address.
								</small>
							</div>
							<div
								className="form-group"><textarea className="form-control" rows="14" name="message" id="message"
							                                     onChange={this.handleValues} value={this.state.message} placeholder="Message"
							                                     style="font-family: Roboto, sans-serif;"/> </div>
							<div className="form-group">
								<button className="btn btn-primary" type="button" onClick={this.submit}>send</button>
							</div>
						</form>
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}
