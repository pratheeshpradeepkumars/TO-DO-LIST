import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <h4>
                    {this.props.header}
                </h4>
            </header>
        )
    }
}

export default Header;