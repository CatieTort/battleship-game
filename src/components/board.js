import React, { Component } from 'react';
import '../App.css';
import Scoreboard from './scoreboard';
import Square from './square';

const EMPTY = 0;
const SHIP = 1;
const HIT = 2;
const MISS = 3;

const HORIZONTAL = 0;
const VERTICAL = 1;

const shipDetails = [
    {name: "Carrier", size: 5},
    {name: "Battleship", size: 4},
    {name: "Destroyer", size: 3},
    {name: "Submarine", size: 3},
    {name: "Frigate", size: 2},
]

class Board extends Component {
    constructor(props){
        super(props)

        this.state = {
            board: this.setUpBoard(),
			shotsRemaining: this.props.maxShots,
            ships: this.props.shipCount
        }
    }

	componentWillMount() {
	   this.placeShips()
   }
   //4 possible states for each cell: empty, ship, miss, hit assign numbers to each within the grid.
   // all cells start empty = 0,
   // after ships are placed ship cells = 1

    setUpBoard(){
        var gameBoard = []
        for(let row = 0; row < 10; row++){
            gameBoard.push([])
            for(let col = 0; col < 10; col++){
                gameBoard[row][col] = EMPTY
            }
        }
        return gameBoard
    }

	checkArea(board, row, col, size, orientation){
		for(let i = 0; i < size; i++){
		// console.log(board);
			if (board[row][col] === SHIP){
				return false
			} else if (orientation === HORIZONTAL){

				if(row + size >= 10){
					return false
				} else if (board[row + i][col] === SHIP){
					return false
				}

			} else if (orientation === VERTICAL){

				if (col + size >= 10){
					return false
				} else if (board[row][col + i] === SHIP){
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
               console.log("size:", size);
               this.placeShip(size)
           }
           console.log("board:", board);
       }

	placeShip(size) {
		const { board } = this.state

		var orientation = Math.floor(Math.random()*2)
		var row = Math.floor(Math.random()*10)
		var col = Math.floor(Math.random()*10)

		console.log("orientation:",orientation);
		console.log("row:",row);
		console.log("col",col);

		let checkArea = this.checkArea(board, row, col, size, orientation)
		// pull random coordiates that = the number of cells that is the length of each ship
			if (checkArea === false){
				return this.placeShip(size)
			} else {

			for (let i = 0; i < size; i++){

				if (orientation === HORIZONTAL){
					board[row + i][col] = SHIP
				} else {
					board[row][col + i] = SHIP
				}
			}
		}
	}

    renderCols(row){
        const { board } = this.state

        var cols = []

        for (let col = 0; col < 10; col++){
            cols.push(<Square id={row, col} key={row, col}/>)
        }
        return cols
    }

    renderRows(){
        var rows = []

        for (let row = 0; row < 10; row++){
            rows.push(<tr key={`${row}`}>{this.renderCols(row)}</tr>)
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
