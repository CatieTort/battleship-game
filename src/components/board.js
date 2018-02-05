import React, { Component } from 'react';
import '../App.css';
import Header from './header';
import Scoreboard from './scoreboard';
import Ships from './ships';
import Square from './square';

const EMPTY = 0;
const SHIP = 1;
const HIT = 2;
const MISS = 3;

class Board extends Component {
    constructor(props){
        super(props)

        this.state = {
            board: this.setUpBoard()
        }
    }

    // componentWillMount (){
    //     this.placeShips();
    // }

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

    // placeShips(){
    //
    // }

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

        return(
            <div>
                <Header />
                <div className="score-container">
                    <Scoreboard />
                </div>
                <div className="board-container">
                    <table>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </div>
                <div className="ship-container">
                    <Ships />
                </div>
            </div>
        )
    }
}

export default Board;
