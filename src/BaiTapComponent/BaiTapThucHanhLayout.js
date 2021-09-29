import React, { Component } from 'react'
import Header from './Header'
import Banner from './Banner'
import Body from './Body'
import Footer from './Footer'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <Body />
                <Footer/>
            </div>
        )
    }
}
