import React, { Component } from "react";

class List extends Component {
    handleAddCount = () => {
        this.props.onAddCount(this.props.listState);
    };

    handleMinusCount = () => {
        this.props.onMinusCount(this.props.listState);
    };

    handleDeleteCount = () => {
        this.props.onDelete(this.props.listState);
    };
    render() {
        const { name, count } = this.props.listState;

        return (
            <>
                <li className="listSet">
                    <span className="name">{name}</span>
                    <span className="count">{count}</span>

                    <button className="countPlus_btn setBtn" onClick={this.handleAddCount}>
                        <i className="fas fa-plus-square"></i>
                    </button>

                    <button className="countMinus_btn setBtn" onClick={this.handleMinusCount}>
                        <i className="fas fa-minus-square"></i>
                    </button>

                    <button className="listTrash_btn setBtn" onClick={this.handleDeleteCount}>
                        <i className="fas fa-trash"></i>
                    </button>
                </li>
            </>
        );
    }
}

export default List;
