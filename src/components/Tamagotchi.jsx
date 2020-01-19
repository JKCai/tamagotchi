import React from 'react';
import PropTypes from  'prop-types';
import TamagotchiControl from './TamagotchiControl';
// import TamagotchiList from './TamagotchiList';
class Tamagotchi extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			masterTamagotchi: [],
		};

		this.addNewCreatureToTamagotchi = this.addNewCreatureToTamagotchi.bind(this);
		this.updateTamagotchiLife = this.updateTamagotchiLife.bind(this);
	}

	componentDidMount() {
		this.timeSinceBirth = setInterval(() =>
			this.updateTamagotchiLife(),
		5000
		);
	}


	addNewCreatureToTamagotchi(newTamagotchi) {
		let newMasterTamagotchi = this.state.masterTamagotchi.slice();
		newMasterTamagotchi.push(newTamagotchi);
		this.setState({masterTamagotchi: newMasterTamagotchi});
		console.log(this.state.masterTamagotchi);
	}

	updateTamagotchiLife() {
		let newMasterTamagotchi = this.state.masterTamagotchi.slice();
		newMasterTamagotchi.forEach((creature) =>
			creature.setTimeSinceBirth()
		);
		this.setState({masterTamagotchi: newMasterTamagotchi});
	}

	render() {
		return (
			<div>
      
				<TamagotchiControl addNewCreatureToTamagotchi= {this.addNewCreatureToTamagotchi}/>
				{/* <TamagotchiList
					creatures={this.state.masterTamagotchi}/> */}
			</div>
		);
	}

}


Tamagotchi.propTypes = {
	addNewCreatureToTamagotchi: PropTypes.func,
};

export default Tamagotchi;