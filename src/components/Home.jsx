import React, {Component} from 'react';
import Board from './Board';
// import Buttons from './Buttons';

class Home extends Component {
    constructor(props) {
        super();
        this.state = {
            xIsNext: null
        }
    }



    render() {
        return (
            <div>
                {/* <Buttons/> */}
                <Board />
            </div>

        )
    }
}

export default Home;