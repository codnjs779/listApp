import React, { Component } from "react";
import List from "./List";
class ListHandler extends Component {
    state = {
        lists: [
            { id: 0, name: "Working", count: 0 },
            { id: 1, name: "App", count: 0 },
            { id: 2, name: "Shopping", count: 0 },
            { id: 3, name: "Coding", count: 0 },
        ],
    };

    handleAddCount = (selectedList) => {
        const lists = [...this.state.lists];
        const index = lists.indexOf(selectedList);
        lists[index].count++;
        this.setState({ lists: lists });
    };

    handleMinusCount = (selectedList) => {
        const lists = [...this.state.lists];
        const index = lists.indexOf(selectedList);
        console.log(`num`);
        if (selectedList.count > 0) {
            lists[index].count--;
            this.setState({ lists });
        }
    };

    handleDeleteCount = (selectedList) => {
        const lists = [...this.state.lists];
        const index = lists.indexOf(selectedList);
        const resultList = lists.filter((item) => {
            return lists[index] !== item;
        });
        this.setState({ lists: resultList });
    };

    render() {
        return (
            <ul>
                {this.state.lists.map((list) => {
                    return <List listState={list} key={list.id} onAddCount={this.handleAddCount} onMinusCount={this.handleMinusCount} onDelete={this.handleDeleteCount} />;
                })}
            </ul>
        );
    }
}

export default ListHandler;
