import React, {Component} from 'react';
import Book from './book'

class Categories extends Component{
  
  		
	
 		render(){
          
          const {name, books} = this.props
          
        	return (
            	
            	<div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
          		{
                      books.map( 
                        ((book, index) => (
                        	<Book book={book} index={index} key={book.id} />))
                        )
                 }
              
          </ol>
        </div>
      </div>
            
            )
        
        } 
}

export default Categories