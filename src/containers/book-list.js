import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return(
        <li
        key={book.title}
        onClick={()=>this.props.selectBook(book)}
        className="list-group-item">
        {book.title}</li>
      );
    });
  }
  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //transfer state to props
  return {
      books: state.books
  };
}
//return to props on to the container
function mapDispatchToProps(dispatch) {
//passd to all reducers when selectBook is called
  return bindActionCreators({selectBook: selectBook} , dispatch)
}

//promote booklist to coainter. define new dispatch method

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
