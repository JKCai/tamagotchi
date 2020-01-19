import React from 'react';
import PropTypes from 'prop-types';
import TamagotchiModel from '../models/TamagotchiModel.js';

const tamaForm = {padding: '25px', lineHeight: '30px', textAlign: 'center'}
class TamagotchiForm extends React.Component {

	constructor(props){
		super(props);
		this.handleCreateTamagotchi = this.handleCreateTamagotchi.bind(this);
	}

	handleCreateTamagotchi(event) {
		event.preventDefault();
		const { _name } = this.refs;
		var newTamagotchi = new TamagotchiModel(_name.value);
		this.props.addNewCreatureToTamagotchi(newTamagotchi);
		this.props.hideFormAfterSubmission();
		console.log(newTamagotchi.name);
		
	}

	render(){
		return (
			<div style={tamaForm}>
				<form onSubmit={this.handleCreateTamagotchi}>
					<input
						ref="_name"
						type="text"
						id="name"
						placeholder="Tamagotchi Name"/><br></br>
					<button type="submit">Submit</button>
				</form>

			</div>
		);
	}
}

// define the proptype as function 
TamagotchiForm.propTypes = {
	addNewCreatureToTamagotchi: PropTypes.func,
	hideFormAfterSubmission: PropTypes.func,

};

export default TamagotchiForm;