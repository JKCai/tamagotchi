import React from 'react';
import PropTypes from 'prop-types';


class TamagotchiActivities extends React.Component {

	constructor(props) {
		super(props);
		this.putToBed = this.putToBed.bind(this);
		this.feed = this.feed.bind(this);
		this.reduceLife = this.reduceLife.bind(this);
		this.increaseHungry = this.increaseHungry.bind(this);
		this.state = {
			life: 100, hungryLevel: 1, creatures: this.props.creatures,
		};
	}

	componentDidMount() {
		// live span will be decreased every 3 seconds
		this.life = setInterval(() =>
			this.reduceLife(), 3000 );
		
		// hungry level will be increased every 6 seconds
		this.hungryLevel = setInterval(()=>
			this.increaseHungry(), 6000);

	}

	// every 3 seconds, live span will be desearsed by three
	reduceLife() {
		var newLife = this.state.life - 3;
		this.setState({life: newLife});

		// if live <= 0, tamagotchi die.
		if (newLife <= 0) {
			this.deadTamagotchi();
		}
	}

	// Every 6 seconds, hungry level will be increased by one
	increaseHungry(){
		var hungryLevel = this.state.hungryLevel + 1;
		this.setState({hungryLevel: hungryLevel});
		
		// if hungry level is triple multiple, live got deducted
		if(hungryLevel % 3 === 0){
			this.reduceLife();
		}

		// if hungry level is 9, tamagotchi die.
		if(hungryLevel >= 9){
			this.deadTamagotchi();
		}
	}

	deadTamagotchi(){
		var life = this.state.life
		var hungryLevel = this.state.hungryLevel
		clearInterval(this.life);
		clearInterval(this.hungryLevel);
		if (life <= 0) {
			alert('sorry your pet has died due to run out of live.');
		}
		if(hungryLevel >= 9){
			alert('sorry your pet has died due to starved');
		}
		
		
	}

	//  feeding tamagotshi will increase 5 live and reduce one hungry.
	feed(event) {
		
		var hungryLevel = this.state.hungryLevel;
		if(hungryLevel > 0){
			hungryLevel = hungryLevel - 1;
		}else{
			hungryLevel = 0;
		}

		var currLive = this.state.life;
		if(currLive + 5 <= 100){
			currLive = this.state.life + 5;
		}else{
			currLive = 100;
		}
		
		this.setState({life: currLive, hungryLevel: hungryLevel});
	}

	// if the tamagotchi is put to bed, its live will be increased by 10
	putToBed(event) {
		var currLive = this.state.life;
		if(currLive <= 90){
			currLive = this.state.life + 10;
		}else{
			currLive = 100;
		}
		this.setState({life: currLive});
	}

	render() {
		let poopContent = null;
		let dieContent = null;
		var hungryLevel = this.state.hungryLevel;
		var currLive = this.state.life;
		if(hungryLevel <= 0){
			poopContent = <p>{this.props.name} is pooping</p>
		}
		if(hungryLevel >= 9){
			dieContent = <p>{this.props.name} is dead because of starve</p>
		}

		if(currLive <= 0){
			dieContent = <p>{this.props.name} is dead because of no live</p>
		}
		return (
			<div>
				<p>Life Span: {this.state.life}</p>
				<p>Hungry Level: {this.state.hungryLevel}</p>
				{poopContent}
				{dieContent}
				{!dieContent && 
					<div>
					<button onClick={this.feed}>Feed {this.props.name}</button>
					<button onClick={this.putToBed}>Put to Bed</button>
					</div>
				}
			</div>
		);
	}
}

TamagotchiActivities.propTypes = {
	componentDidMount: PropTypes.func,
	life: PropTypes.number,
	hungryLevel: PropTypes.number,
	increaseHungry: PropTypes.func,
	reduceLife: PropTypes.func,
	name: PropTypes.string,
	feed: PropTypes.func,
	putToBed: PropTypes.func,
};

export default TamagotchiActivities;