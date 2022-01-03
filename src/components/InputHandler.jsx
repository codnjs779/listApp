import React, { Component, createRef } from "react";

class InputHandler extends Component {
    inputRef = React.createRef();

    onSubmit = (e) => {
        e.preventDefault();
        const name = this.inputRef.current.value;
        this.props.onListAdd(name);
    };
    render() {
        return (
            <>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.inputRef} placeholder="내용을 입력해주세요" className="inputTxt"></input>
                    <button className="inputBtn">입력</button>
                </form>
            </>
        );
    }
}

export default InputHandler;
