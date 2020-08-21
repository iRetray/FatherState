import React from 'react';
import Hijo1 from './Hijo1'
import Hijo2 from './Hijo2'

export default class Padre extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nombre: 'Julian'
        }
        this.setName = this.setName.bind(this)
    }

    setName = (newName) => {
        this.setState({
            nombre: newName
        })
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>
                            <p>En el padre el nombre es: <strong>{this.state.nombre}</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Hijo1 metodoSet={this.setName} name={this.state.nombre} />
                        </td>
                        <td>
                            <Hijo2 metodoSet={this.setName} name={this.state.nombre} />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
