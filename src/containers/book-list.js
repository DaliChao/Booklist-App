import React, {Component} from 'react';
import {connect} from 'react-redux';

import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{

  renderList(){
    return this.props.books.map((book)=>{
      return <li className="list-group-item" key={book.title}
               onClick={()=>this.props.selectBook(book)}>
              {book.title}</li>
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

function mapStateToProps(state){
  //Whatever is returned will show up as props inside of BookList
  //实质上就是将redux里的state变为可以在react里用的props， 这应该就是container连接react和
  //redux的实质。
  return{
    books: state.books
  };
}

function mapDispatchToProps(dispatch){
//Anything returned from this function will end up as props on the BookList container
  return bindActionCreators({selectBook: selectBook},dispatch);
  //Whenever selectBook is called, the result should be passed to all of the reducers.
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);
