/// <reference path="harmony/harmony.ts" />
/// <reference path="puralax/puralax.ts" />
/// <reference path="hanoi/hanoi.ts" />
/// <reference path="sudoku/sudoku.ts" />
/// <reference path="Solver.ts" />

/*var game = new Harmony.Game();
var state = new Harmony.State(4);*/

// level 85
/*state.cells = {
	'0x0': { line: 2, dots: 2 },
	'1x0': { line: 1, dots: 2 },
	'2x0': { line: 0, dots: 2 },
	'3x0': { line: 1, dots: 1 },

	'0x1': { line: 2, dots: 2 },
	'1x1': { line: 0, dots: 2 },
	'2x1': { line: 0, dots: 2 },
	'3x1': { line: 1, dots: 1 },

	'0x2': { line: 2, dots: 3 },
	'1x2': { line: 1, dots: 1 },
	'2x2': { line: 0, dots: 1 },
	'3x2': { line: 2, dots: 1 },

	'0x3': { line: 3, dots: 1 },
	'1x3': { line: 3, dots: 1 },
	'2x3': { line: 3, dots: 1 },
	'3x3': { line: 3, dots: 1 },
};*/

// level 86
/*state.cells = {
	'0x0': { line: 2, dots: 1 },
	'1x0': { line: 0, dots: 1 },
	'2x0': { line: 2, dots: 1 },
	'3x0': { line: 0, dots: 1 },

	'0x1': { line: 1, dots: 1 },
	'1x1': { line: 1, dots: 1 },
	'2x1': { line: 1, dots: 1 },
	'3x1': { line: 1, dots: 1 },

	'0x2': { line: 0, dots: 1 },
	'1x2': { line: 3, dots: 1 },
	'2x2': { line: 0, dots: 1 },
	'3x2': { line: 3, dots: 1 },

	'0x3': { line: 3, dots: 1 },
	'1x3': { line: 2, dots: 1 },
	'2x3': { line: 3, dots: 1 },
	'3x3': { line: 2, dots: 1 },
};*/

// level 88
/*state.cells = {
	'0x0': { line: 3, dots: 1 },
	'1x0': { line: 0, dots: 1 },
	'2x0': { line: 1, dots: 1 },
	'3x0': { line: 0, dots: 1 },

	'0x1': { line: 1, dots: 1 },
	'1x1': { line: 2, dots: 2 },
	'2x1': { line: 0, dots: 1 },
	'3x1': { line: 1, dots: 1 },

	'0x2': { line: 2, dots: 1 },
	'1x2': { line: 1, dots: 1 },
	'2x2': { line: 2, dots: 1 },
	'3x2': { line: 2, dots: 1 },

	'0x3': { line: 0, dots: 1 },
	'1x3': { line: 3, dots: 1 },
	'2x3': { line: 3, dots: 2 },
	'3x3': { line: 3, dots: 1 },
};
var solution: Harmony.Move[] = [
	new Harmony.Move(new BackTrackingSolver.Coord(0, 0), new BackTrackingSolver.Coord(0, 3)),
	new Harmony.Move(new BackTrackingSolver.Coord(1, 0), new BackTrackingSolver.Coord(3, 0)),
	new Harmony.Move(new BackTrackingSolver.Coord(2, 0), new BackTrackingSolver.Coord(2, 1)),
	new Harmony.Move(new BackTrackingSolver.Coord(0, 1), new BackTrackingSolver.Coord(3, 1)),
	new Harmony.Move(new BackTrackingSolver.Coord(1, 1), new BackTrackingSolver.Coord(1, 2)),
	new Harmony.Move(new BackTrackingSolver.Coord(0, 2), new BackTrackingSolver.Coord(1, 2)),
	new Harmony.Move(new BackTrackingSolver.Coord(2, 2), new BackTrackingSolver.Coord(3, 2)),
	new Harmony.Move(new BackTrackingSolver.Coord(1, 3), new BackTrackingSolver.Coord(2, 3)),
	new Harmony.Move(new BackTrackingSolver.Coord(1, 3), new BackTrackingSolver.Coord(3, 3)),
];*/


/*var game = new Puralax.Game(Puralax.Colors.Purple);
var state = new Puralax.State(5, 6);
state.setCells([
	{ coord: '0x0', cell: { color: Puralax.Colors.Green, dots: 1 } },
	{ coord: '1x0', cell: { color: Puralax.Colors.Red, dots: 0 } },
	{ coord: '2x0', cell: { color: Puralax.Colors.Purple, dots: 1 } },
	{ coord: '3x0', cell: { color: Puralax.Colors.Red, dots: 1 } },
	{ coord: '4x0', cell: { color: Puralax.Colors.Green, dots: 0 } },

	{ coord: '0x1', cell: { color: Puralax.Colors.Green, dots: 0 } },
	{ coord: '1x1', cell: { color: Puralax.Colors.Green, dots: 0 } },
	{ coord: '2x1', cell: { color: Puralax.Colors.Blue, dots: 0 } },
	{ coord: '3x1', cell: { color: Puralax.Colors.Green, dots: 0 } },
	{ coord: '4x1', cell: { color: Puralax.Colors.Green, dots: 0 } },

	{ coord: '0x2', cell: { color: Puralax.Colors.Red, dots: 0 } },
	{ coord: '1x2', cell: { color: Puralax.Colors.Yellow, dots: 0 } },
	{ coord: '2x2', cell: { color: Puralax.Colors.Green, dots: 0 } },
	{ coord: '3x2', cell: { color: Puralax.Colors.Yellow, dots: 1 } },
	{ coord: '4x2', cell: { color: Puralax.Colors.Red, dots: 0 } },

	{ coord: '0x3', cell: { color: Puralax.Colors.Red, dots: 0 } },
	{ coord: '1x3', cell: { color: Puralax.Colors.Yellow, dots: 0 } },
	{ coord: '2x3', cell: { color: Puralax.Colors.Green, dots: 0 } },
	{ coord: '3x3', cell: { color: Puralax.Colors.Yellow, dots: 0 } },
	{ coord: '4x3', cell: { color: Puralax.Colors.Red, dots: 0 } },

	{ coord: '0x4', cell: { color: Puralax.Colors.Green, dots: 0 } },
	{ coord: '1x4', cell: { color: Puralax.Colors.Green, dots: 0 } },
	{ coord: '2x4', cell: { color: Puralax.Colors.Blue, dots: 2 } },
	{ coord: '3x4', cell: { color: Puralax.Colors.Green, dots: 0 } },
	{ coord: '4x4', cell: { color: Puralax.Colors.Green, dots: 0 } },

	{ coord: '0x5', cell: { color: Puralax.Colors.Green, dots: 1 } },
	{ coord: '1x5', cell: { color: Puralax.Colors.Red, dots: 0 } },
	{ coord: '2x5', cell: { color: Puralax.Colors.Purple, dots: 0 } },
	{ coord: '3x5', cell: { color: Puralax.Colors.Red, dots: 1 } },
	{ coord: '4x5', cell: { color: Puralax.Colors.Green, dots: 0 } }
]);*/

var game = new Hanoi.Game();
var state = new Hanoi.State(3);

//var game = new Sudoku.Game();
//var state = new Sudoku.State(16);
//var state = new Sudoku.State(9);
/*state.items = {
	'1x0': 1, '4x0': 4,
	'2x1': 4, '3x1': 8, '8x1': 9,
	'3x2': 2, '4x2': 9, '5x2': 1, '7x2': 5,
	'2x3': 3, '3x3': 4, '5x3': 6, '6x3': 2, '7x3': 7,
	'0x4': 7, '2x4': 8, '6x4': 4, '8x4': 5,
	'1x5': 4, '2x5': 5, '3x5': 1, '5x5': 7, '6x5': 3,
	'1x6': 8, '3x6': 7, '4x6': 1, '5x6': 2,
	'0x7': 4, '5x7': 8, '6x7': 9,
	'4x8': 6, '7x8': 2
};*/
/*state.items = {
	'0x0': 8,
	'2x1': 3, '3x1': 6,
	'1x2': 7, '4x2': 9, '6x2': 2,
	'1x3': 5, '5x3': 7,
	'4x4': 4, '5x4': 5, '6x4': 7,
	'3x5': 1, '7x5': 3,
	'2x6': 1, '7x6': 6, '8x6': 8,
	'2x7': 8, '3x7': 5, '7x7': 1,
	'1x8': 9, '6x8': 4
}*/

console.log(state.toString());
var startState = state.clone();
var solver = new BackTrackingSolver.Solver(game);

var solution = solver.bfsSolve(state);
//var solution = solver.solve(startState);

if (solution)
	solver.applySolution(startState, solution);
else
	console.log("No solution found");
