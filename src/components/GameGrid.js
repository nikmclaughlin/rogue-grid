import React from 'react';
import Utils from '../utils';

// TODO: maybe define this globally elsewhere? Feels weird to be here.
const tileClassList = [
	{
		name: 'wall',
		selectionWeight: 4,
	},
	{
		name: 'enemy',
		selectionWeight: 1
	},
	{
		name: 'powerUp',
		selectionWeight: 1
	},
	{
		name: 'tile',
		selectionWeight: 5
	},
];

//TODO: This shouldn't live here. Extract to it's own component file
const Tile = () => {

	const tileClass = assignRandomTileClass();
	
	return (
	<div className={tileClass}></div>
	);
};


function assignRandomTileClass(){

	let selector = Utils.getRandomInt(0,10);

	for( let i = 0; i < tileClassList.length; i++){
		selector -= tileClassList[i].selectionWeight;
		if(selector <= 0) return tileClassList[i].name;
	}
}

const GameGrid = (props) => {

	let grid = [];
	let k = 0;

	for(let i = 0; i < props.size; i++){
		for(let j = 0; j < props.size; j++){
			grid.push(<Tile key={k} />);
			k ++;
		}
	}

	

	return (
		<div id="gameGrid">{grid}</div>
	);
};

export default GameGrid;