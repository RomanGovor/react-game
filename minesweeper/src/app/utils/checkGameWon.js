import {CELL_STATE_FLAGGED, CELL_STATE_UNCLEARED, MINE_STATE_CLEAR} from '../constants';

export const checkGameWon = (mines, numMines, board) => {

	if (board.filter(cellState => cellState === CELL_STATE_FLAGGED || cellState === CELL_STATE_UNCLEARED).length === numMines) {
		return true;
	}

	for (let i = 0, n = mines.length; i < n; i++) {
		const cellState = board[i];
		if (mines[i] === MINE_STATE_CLEAR && cellState === CELL_STATE_FLAGGED) {
			return false;
		}
	}
	return true;
};
