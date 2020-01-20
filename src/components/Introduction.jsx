import React from 'react';
import cat from '../assets/img/001-cat.svg';
import cow from '../assets/img/002-cow.svg';
import puppy from '../assets/img/003-puppy.svg';
import giraffe from '../assets/img/004-giraffe.svg';
import monkey from '../assets/img/005-monkey.svg';
import panda from '../assets/img/006-panda.svg';
import koala from '../assets/img/007-koala.svg';
import kangaroo from '../assets/img/008-kangaroo.svg';

const imgStyle = {width: '60px'};
const introPara = {padding: '25px',lineHeight: '30px'}

class Introduction extends React.Component {
	
	render(){
		return (
			<div style={introPara}>
				<h1>Tamagotchi App</h1>
                <h3>Created by Jiankun</h3>
				<p>A Tamagotchi was a virtual pet created in the 90's. They can be interacted and raised it through various activities including eating, playing, and making it sleep. Tamagotchis went through several life cycles (egg, teen, adult, elderly) and could die from lack of attention or old age.</p>
				<img style={imgStyle} src={cat} alt='cat'/>
				<img style={imgStyle} src={cow} alt='cow'/>
				<img style={imgStyle} src={puppy} alt='puppy'/>
				<img style={imgStyle} src={giraffe} alt='giraffe'/>
				<img style={imgStyle} src={monkey} alt='monkey'/>
				<img style={imgStyle} src={panda} alt='panda'/>
				<img style={imgStyle} src={koala} alt='koala'/>
				<img style={imgStyle} src={kangaroo} alt='kangaroo'/>
				
			</div>
		);
	}
}

export default Introduction;