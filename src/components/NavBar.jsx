import React, { Component } from "react";

class NavBar extends Component {
    render() {
        const totalCount = this.props.onTotalCounter();

        return (
            <>
                <nav>
                    Todo List
                    <span>{totalCount}</span>
                </nav>
            </>
        );
    }
}

export default NavBar;
