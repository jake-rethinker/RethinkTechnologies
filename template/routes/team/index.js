import { h, Component } from 'preact';
import style from './style';
import Footer from '../../components/footer';
const Roger = require('../../assets/team/roger.jpg');
const Kin = require('../../assets/team/kin.gif');
const Jake = require('../../assets/team/jake.gif');
const James = require('../../assets/team/james.gif');
const Kaela = require('../../assets/team/kaela.gif');
const Adam = require('../../assets/team/adam.gif');
const Philipp = require('../../assets/team/philipp.gif');
const Peter = require('../../assets/team/peter.gif');
const Joel = require('../../assets/team/joel.gif');

export default class Team extends Component {
	render() {
		return (
			<div class={`${style.home} page`}>
				<div class={style.backgroundimage}>
				<header className="masthead" style="background-color: transparent;">
					<div className="intro-body">
						<div className="container">
							<div className="row" style="margin: 0;margin-top: 79px;">
								<div className="col-lg-12" style="height: 71px;">
									<h3 className="my-4">Our Team</h3>
								</div>
								<div className="col-sm-6 col-lg-4 mb-4 text-center"><img
									className="rounded img-fluid border rounded-circle border-dark shadow d-block mx-auto"
									src={Roger} width="200"/>
									<h3 className="m-0">Roger Faulkner</h3>
									<h5 className="my-1">President and Founder</h5>
									<p>Polymer Scientist, Inventor<br/>Cornelius, NC<br/>roger.rethinker@gmail.com</p>
								</div>
								<div className="col-sm-6 col-lg-4 mb-4 text-center"><img
									className="rounded-circle img-fluid border border-dark shadow d-block mx-auto"
									src={Kin} width="200"/>
									<h3 className="m-0">Kin Yue</h3>
									<h5 className="my-1">Chief Financial Officer</h5>
									<p>CFO, Marketing<br/>Cornelius, NC<br/>kin.rethinker@gmail.com</p>
								</div>
								<div className="col-sm-6 col-lg-4 mb-4 text-center"><img
									className="rounded-circle img-fluid border border-dark shadow d-block mx-auto"
									src={Jake} width="200"/>
									<h3 className="m-0">Jake Wenzel</h3>
									<h5 className="my-1">Chief Information Officer</h5>
									<p>Python, React, C#<br/>Cornelius, NC<br/>jake.rethinker@gmail.com</p>
								</div>
								<div className="col-sm-6 col-lg-4 mb-4 text-center"><img
									className="rounded-circle img-fluid border border-dark shadow d-block mx-auto"
									src={James} width="200"/>
									<h3 className="m-0">James Gratrix</h3>
									<h5 className="my-1">Software Engineer</h5>
									<p>C#, C++, 3D Modelling<br/>Manchester, UK<br/>james.rethinker@gmail.com</p>
								</div>
								<div className="col-sm-6 col-lg-4 mb-4 text-center"><img
									className="rounded img-fluid border rounded-circle border-dark shadow d-block mx-auto"
									src={Kaela} width="200"/>
									<h3 className="m-0">Kaela Duncan</h3>
									<h5 className="my-1">Research and development</h5>
									<p>Biology, Polymers, Materials<br/>Cornelius, NC<br/>kaela.rethinker@gmail.com</p>
								</div>
								<div className="col-sm-6 col-lg-4 mb-4 text-center"><img
									className="rounded-circle img-fluid border border-dark shadow d-block mx-auto"
									src={Adam} width="200"/>
									<h3 className="m-0">Adam Baker</h3>
									<h5 className="my-1">Software Engineer</h5>
									<p>HTML, CSS, JS<br/>Somerset, UK<br/>adam.rethinker@gmail.com</p>
								</div>
								<div className="col-sm-6 col-lg-4 mb-4 text-center"><img
									className="rounded-circle img-fluid border border-dark shadow d-block mx-auto"
									src={Philipp} width="200"/>
									<h3 className="m-0">Philipp Müller<br/></h3>
									<h5 className="my-1">Software Engineer</h5>
									<p>Linux, Clojure, SQL<br/>Germany<br/>phillip.rethinker@gmail.com</p>
								</div>
								<div className="col-sm-6 col-lg-4 mb-4 text-center"><img
									className="rounded-circle img-fluid border border-dark shadow d-block mx-auto"
									src={Peter} width="208.5"/>
									<h3 className="m-0">Peter Brown</h3>
									<h5 className="my-1">Software Engineer</h5>
									<p>Java, C#, Angular<br/>Netherlands<br/>peter.rethinker@gmail.com</p>
								</div>
								<div className="col-sm-6 col-lg-4 mb-4 text-center"><img
									className="rounded-circle img-fluid border border-dark shadow d-block mx-auto"
									src={Joel} width="208.5"/>
									<h3 className="m-0">Joel Niemi</h3>
									<h5 className="my-1">Cyber Security Analyst</h5>
									<p>Linux, Python, Electronics<br/>Finland<br/>joel.rethinker@gmail.com</p>
								</div>
							</div>
						</div>
					</div>
				</header>
					<Footer />
				</div>
			</div>
		);
	}
}
