import React, { Component } from 'react';
import '../Home.css'

class Result extends Component{

    constructor(props){
        super(props);
        this.state = { childName : "" };
    }

    // static getDerivedStateFromProps(nextProps, prevState){
    //     if ( prevState.childName !== nextProps.childName ){
    //         return{
    //             childName : nextProps.childName
    //         };
    //     }
    //     return null;
    // }
    
    render(){
        return(
            <div className="content">
                <div className="inputSection">
                <h2 className="letters">{ this.props.value }</h2>
                </div>
            </div>
        );
    }
}

export default Result;