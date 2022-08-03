import React from 'react';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import GameGrid from './GameGrid';

const GridContainer = () => {
	return (
		<div id="gridContainer">
		<TopBar />
        <GameGrid size={8}/>
        <BottomBar />
		</div>
	);
};

export default GridContainer;