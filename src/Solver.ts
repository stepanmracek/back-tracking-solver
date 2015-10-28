/// <reference path="interfaces.ts" />

module BackTrackingSolver {
	export class Solver {

		constructor(private game: IGame) { }

		private solution: IMove[];
		private counter: number;

		public solve(state: BackTrackingSolver.IState): IMove[] {
			this.solution = undefined;
			this.counter = 0;
			this.backTrackingSolve(state, []);
			return this.solution;
		}

		public applySolution(state: BackTrackingSolver.IState, moves: IMove[] ): BackTrackingSolver.IState {
			moves.forEach(function(move) {
				console.log(move.toString());
				state = this.game.apply(state, move);
				console.log(state.toString());
			}, this);
			return state;
		}

		private backTrackingSolve(state: BackTrackingSolver.IState, currentMoves: IMove[]) {
			this.counter++;
			if (this.counter % 10000 == 0) {
				console.log(this.counter + "; depth: " + currentMoves.length);
				//console.log(state.toString());
			}

			if (this.game.isRejectState(state)) {
				//console.log("Dead end");
				return;
			}
			if (this.game.isAcceptState(state)) {
				this.solution = currentMoves;
				console.log("Got solution :-)");
				return;
			};
			
			var moves = this.game.getPlausibleMoves(state);
			for (var i = 0; i < moves.length; i++) {
				var newState = this.game.apply(state, moves[i]);
				this.backTrackingSolve(newState, currentMoves.concat(moves[i]));
				if (this.solution) return;
			}
		}

		bfsSolve(state: BackTrackingSolver.IState): IMove[] {
			var queue: IBfsQueueItem[] = [{
				state: state,
				moves: []
			}];

			while (queue.length > 0) {
				if (queue.length % 10000 == 0) {
					console.log("Queue length: " + queue.length + "; depth: " + queue[0].moves.length);
				}
				var front = queue.shift();

				var moves = this.game.getPlausibleMoves(front.state);
				for (var i = 0; i < moves.length; i++) {
					var newState = this.game.apply(front.state, moves[i]);
					if (this.game.isRejectState(newState)) continue;

					if (this.game.isAcceptState(newState)) {
						console.log("Got solution!");
						return front.moves.concat(moves[i]);
					}

					queue.push({
						state: newState,
						moves: front.moves.concat(moves[i])
					});
				}
			}

			return undefined;
		}
	}
}