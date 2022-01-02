import React, { Component } from "react";

class List extends Component {
    render() {
        return (
            <>
                <li className="listSet">
                    <span className="name">Running</span>
                    <span className="count">0</span>
                    <button className="countPlus_btn">
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <button className="countMinus_btn">
                        <i className="fas fa-minus-square"></i>
                    </button>
                    <button className="listTrash_btn">
                        <i className="fas fa-trash"></i>
                    </button>
                </li>
            </>
        );
    }
}

export default List;
