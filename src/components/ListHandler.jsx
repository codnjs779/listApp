import React, { Component } from "react";
import InputHandler from "./InputHandler";
import List from "./List";

class ListHandler extends Component {
    handleAddCount = (selectedList) => {
        this.props.onAddCount(selectedList);
    };

    handleMinusCount = (selectedList) => {
        this.props.onMinusCount(selectedList);
    };

    handleDeleteCount = (selectedList) => {
        this.props.onDeleteCount(selectedList);
    };

    render() {
        return (
            <>
                <InputHandler onListAdd={this.props.onListAdd} />
                <ul>
                    {this.props.state.lists.map((list) => {
                        return <List listState={list} key={list.id} onAddCount={this.handleAddCount} onMinusCount={this.handleMinusCount} onDelete={this.handleDeleteCount} />;
                    })}
                </ul>
            </>
        );
    }
}

export default ListHandler;
