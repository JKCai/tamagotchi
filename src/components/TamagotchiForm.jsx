import React from 'react';
import PropTypes from 'prop-types';

const tamaForm = {padding: '25px', lineHeight: '30px', textAlign: 'center'}
class TamagotchiForm extends React.Component {

	constructor(props){
		super(props);
		this.handleCreateTamagotchi = this.handleCreateTamagotchi.bind(this);
	}

	handleCreateTamagotchi(event) {
		event.preventDefault();
		console.log(this.refs);
		const { _name } = this.refs;
		
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

export default TamagotchiForm;