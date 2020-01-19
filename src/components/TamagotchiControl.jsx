import React from 'react';
import PropTypes from 'prop-types';
import TamagotchiForm from './TamagotchiForm';

const btnStyle = {height: '40px', background: 'lightgreen', borderRadius: '8px'}

// this component controls whether to show the 'tamagotchiForm'
class TamagotchiControl extends React.Component {

	constructor(props) {
		super(props);
		this.showForm = this.showForm.bind(this);
		this.hideForm = this.hideForm.bind(this);
		this.state = {formIsVisible: false};
	}

	showForm() {
		this.setState({formIsVisible: true});
	}

	hideForm() {
		this.setState({formIsVisible: false});
	}

	render(){
		const formIsVisible = this.state.formIsVisible;
        let formContent = null;

        // if the current form is not visble and createTamagotchi button is clicked,
        // a form will be presented, otherwise the form will be hided
		if (this.state.formIsVisible) {
			formContent = <TamagotchiForm addNewCreatureToTamagotchi={this.props.addNewCreatureToTamagotchi}
				hideFormAfterSubmission = {this.hideForm}/>;
		} else {
            formContent = <div style={{textAlign: 'center'}}>
                                <button onClick={this.showForm.bind(this)} style = {btnStyle} >
                                    Create Tamagotchi
                                </button>
                              </div>
		}
		return (
			<div>
				{formContent}
			</div>

		);
	}

}



export default TamagotchiControl;