import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import NavComponent from './NavComponent'
import ContentComponent from './ContentComponent'
import FooterComponent from './FooterComponent'

export default class HomeComponent extends Component {
    renderTitlt = () => {
        let i = 1;

        setTimeout(function() {
            return i++;
        },3000)
        
    }
    render() {
        let title = "Khai Vinh 123"
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        {/* Header component */}
                        {title}
                        <HeaderComponent />
                    </div>
                    <div className="col-4">
                        {/* Nav component */}
                        <NavComponent />
                    </div>
                    <div className="col-8">
                        {/* Content component */}
                        <ContentComponent />
                    </div>
                    <div className="col-12">
                        {/* Footer component */}
                        <FooterComponent />
                        {this.renderTitlt()}
                    </div>
                </div>
            </div>
        )
    }
}
