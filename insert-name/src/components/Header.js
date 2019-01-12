import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div>
                <div className="whole">
                    <div className="banner">
                        <Link to="/"><h2 className="banner_title">Suhhny Blog</h2></Link>
                        <p></p>
                        <Link to="/result"><h2 className="banner_click">Click Me</h2></Link>
                        </div>
                        <div className="line">
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;