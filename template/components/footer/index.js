import { h, Component } from 'preact';

import style from './style.css';


export default class Footer extends Component {

	render() {
		return (
			<div class={style.footer}>
				<div class={style.holder}>
					<a href="/" class={style.link}>Home</a>
					<a href="/team" className={style.link}>Team</a>
					<a href="/contact" className={style.link}>Contact</a>
				</div>
			</div>
		);
	}
}
