import React, { Component } from 'react';

import styles from './Search.module.css';

class Search extends Component {
    state = {
        query: '',
    }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

 render() {
   return (
     <form className={styles.Search}>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input
         placeholder="Search..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
     </form>
   )
 }
}

export default Search