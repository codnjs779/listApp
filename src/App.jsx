import "./App.css";
import ListHandler from "./components/ListHandler";
import NavBar from "./components/NavBar";
import React, { Component } from "react";

class App extends Component {
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

    handleListAdd = (name) => {
        const lists = [...this.state.lists, { id: Date.now(), name, count: 0 }];
        this.setState({ lists });
    };

    totalCounter = () => {
        const totalCount = this.state.lists.filter((total) => total.count > 0).length;
        return totalCount;
    };

    render() {
        return (
            <>
                <NavBar onTotalCounter={this.totalCounter} />
                <ListHandler state={this.state} onAddCount={this.handleAddCount} onMinusCount={this.handleMinusCount} onDeleteCount={this.handleDeleteCount} onListAdd={this.handleListAdd} />
            </>
        );
    }
}

export default App;
