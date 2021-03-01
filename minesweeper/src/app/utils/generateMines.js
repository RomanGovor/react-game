import {MINE_STATE_CLEAR, MINE_STATE_MINE} from '../constants';
import {getAdjacentCells} from './getAdjacentCells';

export function generateMines(numRows, numCols, numMines, initialCellId) {

	const numCells = numRows * numCols;
	const mines = new Array(numCells)
		.fill(MINE_STATE_CLEAR);

	const adjCells1 = getAdjacentCells(initialCellId, numRows, numCols, 1);
	const adjCells2 = getAdjacentCells(initialCellId, numRows, numCols, 2);

	let minesAllocated = 0;
	while (minesAllocated < numMines) {
		const index = Math.floor(Math.random() * numCells);

		if (index === initialCellId || mines[index] === MINE_STATE_MINE) {
			continue;
		}

		if (adjCells1.indexOf(index) !== -1) {
			if (Math.random() > 0.1) {
				continue;
			}
		} else if (adjCells2.indexOf(index) !== -1) {
			if (Math.random() > 0.4) {
				continue;
			}
		}

		mines[index] = MINE_STATE_MINE;
		minesAllocated += 1;
	}

	return mines;

}
