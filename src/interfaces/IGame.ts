/// <reference path="IState.ts" />
/// <reference path="IMove.ts" />

module BackTrackingSolver {

	export interface IGame {

		isAcceptState: (state: BackTrackingSolver.IState) => boolean;
		isRejectState: (state: BackTrackingSolver.IState) => boolean;

		apply: (state: IState, move: IMove) => IState;
		getPlausibleMoves: (state: IState) => IMove[];

	}

}