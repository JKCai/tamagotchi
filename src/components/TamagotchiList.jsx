import React from 'react';
import PropTypes from 'prop-types';
import TamagotchiDetail from './TamagotchiDetail';

function TamagotchiList(props){
	console.log(props.creatures);
	return (
		
		<div>
			<hr/>
			{/* loop through all the creatures in the tamagotchiList */}
			<h3>{props.creatures.map((creature, index) =>
				
				// pass name, life and key to the component of TamagtochiDetail
				<TamagotchiDetail
					className = "tamagotchi"
					name= {creature.name}
					life={creature.life}
					key={index}/>
			)}
			</h3>
		</div>
	);
}

TamagotchiList.propTypes = {
	creatures: PropTypes.array,
};

export default TamagotchiList;