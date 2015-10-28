/// <reference path="IState.ts" />
/// <reference path="IMove.ts" />

module BackTrackingSolver {

	export interface IBfsQueueItem {
		state: IState,
		moves: IMove[]
	}

}