import React from 'react';

export default class Hijo1 extends React.Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.metodoSet("Pablo")
    }

    render() {
        return (
            <div>
                <p>Hijo que modifica</p>
                <button onClick={this.handleClick}>Cambiar nombre a Pablo</button>
            </div>
        )
    }
}
