import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
                    <div className="container px-lg-5">
                        <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                        <button className="navbar-toggler color-w" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon " />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}
