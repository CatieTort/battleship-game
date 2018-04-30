import React, { Component } from 'react';
import '../App.css';
import Scoreboard from './Scoreboard';
import Square from './Square';

//4 possible states for each cell: empty, ship, miss, hit assign numbers to each within the grid.
//ship's value is = to the size
const EMPTY = 0;
const HIT = 10;
const MISS = 9;

const HORIZONTAL = 0;
const VERTICAL = 1;

const shipDetails = [
    {name: "Carrier", size: 5, hits:0},
    {name: "Battleship", size: 4, hits:0},
    {name: "Destroyer", size: 3, hits:0},
    {name: "Submarine", size: 2, hits:0},
    {name: "Frigate", size: 1, hits:0},
]

class Board extends Component {
    constructor(props){
        super(props)

        this.state = {
            board: this.setUpBoard(),
			shotsRemaining: 50,
            ships: 5,
			win: false,
			lose: false
        }
    }

	componentWillMount() {
	   this.placeShips()
   }

    setUpBoard(){
        var board = []
        for(let row = 0; row < 10; row++){
            board.push([])
            for(let col = 0; col < 10; col++){
                board[row][col] = EMPTY
            }
        }
        return board
    }

	checkForWinner(){
		const { shotsRemaining, ships, win, lose } = this.state

		if (shotsRemaining === 0 && ships === 0){
			this.setState({win: true})
		} else if (shotsRemaining > 0 && ships === 0){
			this.setState({win: true})
		} else if (shotsRemaining === 0 && ships > 0){
			this.setState({lose: true})
		} else {
			this.setState({lose: true})
		}
	}

	checkArea(board, row, col, size, orientation){
		for(let i = 0; i < size; i++){
		console.log(board);
			if (board[row][col] > EMPTY){
				return false
			} else if (orientation === HORIZONTAL){

				if(row + i >= 10){
					return false
				} else if (board[row + i][col] > EMPTY){
					return false
				}

			} else if (orientation === VERTICAL){

				if (col + i >= 10){
					return false
				} else if (board[row][col + i] > EMPTY){
					return false
				}

			} else {
				return true
			}
		}
	}

	placeShips() {
           const { board } = this.state
		   let size

           for(let i = 0; i < shipDetails.length; i++){
               size = shipDetails[i].size

               this.placeShip(size)
           }
           // console.log("board:", board);
       }

	placeShip(size) {
		const { board } = this.state

		var orientation = Math.floor(Math.random()*2)
		var row = Math.floor(Math.random()*10)
		var col = Math.floor(Math.random()*10)

		// console.log("orientation:",orientation);
		// console.log("row:",row);
		// console.log("col",col);

		let checkArea = this.checkArea(board, row, col, size, orientation)
		// pull random coordiates that = the number of cells that is the length of each ship
			if (checkArea === false){
				return this.placeShip(size)
			} else {

			for (let i = 0; i < size; i++){

				if (orientation === HORIZONTAL){
					board[row + i][col] = size
				} else if (orientation === VERTICAL) {
					board[row][col + i] = size
				} else {
					board[row][col + i] = size
				}
			}
		}
	}

	handleClick (val){
		const {shotsRemaining, ships} = this.state

		if (val === EMPTY){
			val = MISS
			// console.log("Miss:", val)
		} else if (val > EMPTY && val <= 5){
			this.whichShip(val)
			val = HIT
			// console.log("Hit:", val)
			this.setState({shotsRemaining: shotsRemaining - 1})
		} else if (val >= 9) {
			return
		}
		this.checkForWinner()
	}

	whichShip(val){
		//checks which ship was hit and when the ship is hit the max amount it is removed from the ship count in state
		const {ships} = this.state

		if (val === 5){
			//add hit to carrier
			shipDetails[0].hits = shipDetails[0].hits + 1

			if (shipDetails[0].hits === 5){
				this.setState({ships: ships - 1})
			}
		} else if (val === 4){
			//add hit to Battleship
			shipDetails[1].hits = shipDetails[1].hits + 1

			if (shipDetails[1].hits === 4){
				this.setState({ships: ships - 1})
			}
		} else if (val === 3){
			//add hit to Destroyer
			shipDetails[2].hits = shipDetails[2].hits + 1

			if (shipDetails[2].hits === 3){
				this.setState({ships: ships - 1})
			}
		} else if (val === 2){
			//add hit to Submarine
			shipDetails[3].hits = shipDetails[3].hits + 1

			if (shipDetails[3].hits === 2){
				this.setState({ships: ships - 1})
			}
		} else if (val === 1) {
			//sink Frigate and - ship
			shipDetails[4].hits = shipDetails[4].hits + 1

			if (shipDetails[4].hits === 1){
				this.setState({ships: ships - 1})
			}
		}
		this.checkForWinner()
	}

    renderCols(row){
        const { board } = this.state

        var cols = []

        for (let col = 0; col < 10; col++){

			let val = board[row][col]

            cols.push(
				<Square id={row, col}
					key={row, col}
					value={val}
					onClick={this.handleClick.bind(this, val)}
				/>)
        }
        return cols
    }

    renderRows(){
        var rows = []

        for (let row = 0; row < 10; row++){
            rows.push(<tr key={row}>{this.renderCols(row)}</tr>)
        }
        return rows
    }

	render (){
		const { shotsRemaining, ships } = this.state

		return(
			<div className="game">
				<Scoreboard  shotsRemaining={shotsRemaining} ships={ships}/>
				<main className="board">
					<table>
						<tbody>
						{this.renderRows()}
						</tbody>
					</table>
				</main>
			</div>
		)
	}
}

export default Board;
