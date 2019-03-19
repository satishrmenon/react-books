import React, {Component} from 'react'
import './Book.scss';
export default class Book extends Component {
    state = {
        showInfo: false
    }
    onInfoClick = () => {
        console.log(this.state.showInfo);
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    render() {
        const {id, img, bname, author, info} = this.props.details;
        return (
            <article className="book">
                <div className="image-container">
                    <img src={img} alt={bname}/>
                    <span 
                    onClick={()=>{
                        this.props.forRemove(id)
                    }}                  
                    
                    className="close-btn">
                        <i className="fas fa-window-close"/>
                    </span>
                </div>
                <div className="book-info">
                    <h3>{bname}</h3>
                    <h4>{author}</h4>
                    <h5>Info<span onClick={this.onInfoClick} className="fas fa-caret-square-down"></span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>
        )
    }
}
