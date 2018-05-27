import React, { Component } from 'react';

class Recipe extends Component {
    render() {
        return (
            <div>Recipe {this.props.title}</div>
        );
    }
}
export default Recipe;