import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
                <div className="container px-2  py-5">
                    <div className="p-4 p-lg-5 bg-light text-center">
                        <div className="content m-4 m-lg-5">
                            <h1 className="font-weight-bold display-6">A warm welcome!</h1>
                            <p className="fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                            <button className="btn btn-primary btn-lg">Call to action</button>
                        </div>
                    </div>
                </div>
        )
    }
}
