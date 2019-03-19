import React, {Component} from 'react'
import './Booklist.scss';
import Book from '../Book/Book';
import {data} from '../../data/data';
export default class Booklist extends Component {
    state = {
        bookdata: data
    }

    removeBook=(idToRemove)=>{
       
        const filteredBooks = this.state.bookdata.filter((item)=>{
            return item.id !== idToRemove;
        })
       
        this.setState(()=>{
            return{
                bookdata: filteredBooks
            }
        })
    }

    render() {
        return (
            <div className="booklist">
                {this
                    .state
                    .bookdata
                    .map((item) => {
                        return <Book key={item.id} details={item} forRemove={this.removeBook}/>
                    })
}

            </div>
        )
    }
}
