import React, { Component } from 'react';

// searchbar component will also contain the submit button 
export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        // bind onInputChange to this
        this.onInputChange = this.onInputChange.bind(this);
    }

    // on change function for search bar
    // to update term state
    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault(); // tells the browser not to submit on enter key
        
        // we need to go fetch weather data
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                placeholder="Get a five-day forecast in your favorite cities"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}