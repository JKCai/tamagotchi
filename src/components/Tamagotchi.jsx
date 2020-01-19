import React from 'react';
import PropTypes from  'prop-types';
import TamagotchiControl from './TamagotchiControl';
import TamagotchiList from './TamagotchiList';
class Tamagotchi extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			TamagotchiList: [],
		};

		//  add new tamagotchi to the list
		this.addNewCreatureToTamagotchi = this.addNewCreatureToTamagotchi.bind(this);

	}

	addNewCreatureToTamagotchi(newTamagotchi) {
		let newTamagotchiList = this.state.TamagotchiList.slice();
		// add the newly created tamagotchi to the list
		newTamagotchiList.push(newTamagotchi);
		this.setState({TamagotchiList: newTamagotchiList});
		console.log(TamagotchiList);
	}

	render() {
		return (
			<div>
				<TamagotchiControl addNewCreatureToTamagotchi= {this.addNewCreatureToTamagotchi}/>
				<TamagotchiList creatures={this.state.TamagotchiList}/>
			</div>
		);
	}
}


Tamagotchi.propTypes = {
	addNewCreatureToTamagotchi: PropTypes.func,
};

export default Tamagotchi;