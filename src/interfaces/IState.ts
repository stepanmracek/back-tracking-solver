module BackTrackingSolver {

	export interface IState {
		toString: () => string;
		clone: () => IState;
	}

}