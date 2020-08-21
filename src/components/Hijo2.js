import React from 'react';

export default class Hijo2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nombre: this.props.name
        }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick() {
        this.props.metodoSet("Josefito")
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props.name) {
            this.setState({
                nombre: nextProps.name
            })
        }
    }

    render() {
        return (
            <div>
                <p>Hijo que muestra, el valor que recibo de mi padre es: <strong>{this.state.nombre}</strong></p>
                <button onClick={this.handleClick}>Cambiar nombre a Josefito</button>
            </div>
        )
    }
}