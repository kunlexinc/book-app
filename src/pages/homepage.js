import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import BookAction from '../components/book_action';
import Categories from '../components/book_category';
import { Link } from 'react-router-dom';


class HomePage extends Component{
  
  	constructor(props) {
    	super(props);
    		this.state = {
      			allBooks: []
    		};
  		}

  	async componentDidMount() {

     
          const allBooks = await BooksAPI.getAll();

          this.setState({ allBooks });
      
      console.log(allBooks)

  	}
  
  	
  
	render(){
      	return(
          <div>
          
          	<div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <Categories name='Currently Reading' books={this.state.allBooks}/>
              </div>
          
              <div className="list-books-content">
                 <Categories name='Want to Read' books={this.state.allBooks}/>
              </div>
          
              <div className="list-books-content">
                  <Categories name='Reading' books={this.state.allBooks}/>
              </div>
              <div className="open-search">
                <Link className='btn' to='/search'>Add a book</Link>
              </div>
         	</div>
         </div>
          
        
          )
    }

}

export default HomePage