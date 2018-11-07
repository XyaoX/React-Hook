import React, { Component } from 'react';


class Class extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value:"",
            width: window.innerWidth
        };
    this.handleUserChange = (e) => {
        this.setState({
            value:e.target.value
        })
    }
    this.handleResize =() =>{
        this.setState({
            width:window.innerWidth
        })
    }

    }
    componentDidMount(){
        window.addEventListener('resize', this.handleResize);
    }
    componentDidUpdate(){
    }
    componentWillUnmount(){
        //prevent memory leak
        window.removeEventListener('resize',this.handleResize);
    }
    
    render(){
        return(
        <div className="row"> 
            <label className="offset-2 col-5">{this.state.value}</label>
            <input type="text" className="offset-2 col-5" value={this.state.value} onChange={this.handleUserChange} name="user"/>    
            <p>Width</p>
            <p>{this.state.width}</p>
        </div>
        )
    }
}

export default Class;