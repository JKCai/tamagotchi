import React from 'react';
import PropTypes from 'prop-types';
import TamagotchiActivities from './TamagotchiActivities';

function TamagotchiDetail(props) {
	return(
		<div>
			<h3>Tamagotchi name: {props.name}</h3>
			{/* pass the value of reduceLife and name to component TamagotchiActivities */}
			<h3><TamagotchiActivities reduceLife= {props.reduceLife} name={props.name}/></h3>
			<hr/>
		</div>
		
	);
}

TamagotchiDetail.propTypes = {
	name: PropTypes.string,
	life: PropTypes.number,
	hungryLevel: PropTypes.func,
	reduceLife: PropTypes.func
};


export default TamagotchiDetail;