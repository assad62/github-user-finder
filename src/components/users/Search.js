import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Search extends Component {

   
    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired

    }
    onChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value //for all names, not just text, could be other components too like email etc
        });
    }
    
    onSubmit = e => {
        e.preventDefault();
        //this.props.searchUsers(this.state.text);
        //this.setState({ text: '' });
        if (this.state.text === '') {
          this.props.setAlert('Please enter something', 'light');
        } else {
          this.props.searchUsers(this.state.text);
          this.setState({ text: '' });
        }
      };


    render() {
        const {showClear, clearUsers} = this.props;

        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" 
                    name= "text" 
                    placeholder="Search Users.."
                     value={this.state.text}
                      onChange={this.onChange}/>
                    <input type="submit" 
                    value = "Search" 
                    className="btn btn-dark btn-block" />
                </form>
                {showClear &&
                <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
                }
                
            </div>
        )
    }
}

export default Search
