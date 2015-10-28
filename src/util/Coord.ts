module BackTrackingSolver {
	
	export enum Direction {
		Up, Down, Left, Right
	}

	export class Coord {
		x: number;
		y: number;

		constructor(x: number = 0, y: number = 0) {
			this.x = x;
			this.y = y;
		}

		toString(): string {
			return this.x + "x" + this.y;
		}

		toFancyString(): string {
			return "(" + (this.y + 1) + "; " + (this.x + 1) + ")";
		}

		neighbor(direction: Direction): Coord {
			switch(direction) {
				case Direction.Up:
					return new Coord(this.x, this.y - 1);
				case Direction.Down:
					return new Coord(this.x, this.y + 1);
				case Direction.Left:
					return new Coord(this.x - 1, this.y);
				case Direction.Right:
					return new Coord(this.x + 1, this.y);
			}
			throw "Unsupported direction: " + direction;
		}

		neighbors(width: number, height: number): Coord[] {
			var result: Coord[] = [];

			if (this.x > 0) result.push(new Coord(this.x - 1, this.y));
			if (this.x < (width - 1)) result.push(new Coord(this.x + 1, this.y));
			if (this.y > 0) result.push(new Coord(this.x, this.y - 1));
			if (this.y < (height - 1)) result.push(new Coord(this.x, this.y + 1));

			return result;
		}
	}
}
