import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return (
            <div className="container px-2">
                <div className="products">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        <div className="col mb-4">
                            <div className="card h-100 p-4  text-center bg-light">
                                <div className="card-item bg-primary text-white">
                                    <i class="fab fa-airbnb"></i>
                                </div>
                                <div className="card-content mt-4">
                                    <h1 className="fs-4 fw-bold">Fresh new layout</h1>
                                    <p className="mb-0">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                                </div>
                            </div>
                        </div>       
                        <div className="col mb-4">
                            <div className="card h-100 p-4  text-center bg-light">
                                <div className="card-item bg-primary text-white">
                                    <i class="fa fa-cloud-download-alt"></i>
                                </div>
                                <div className="card-content mt-4">
                                    <h1 className="fs-4 fw-bold">Free to download</h1>
                                    <p className="mb-0">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                                </div>
                            </div>
                        </div>       
                        <div className="col mb-4">
                            <div className="card h-100 p-4  text-center bg-light">
                                <div className="card-item bg-primary text-white">
                                    <i class="fa fa-address-card"></i>
                                </div>
                                <div className="card-content mt-4">
                                    <h1 className="fs-4 fw-bold">Jumbotron hero header</h1>
                                    <p className="mb-0">The heroic part of this template is the jumbotron hero header!</p>
                                </div>
                            </div>
                        </div>       
                        <div className="col mb-4">
                            <div className="card h-100 p-4  text-center bg-light">
                                <div className="card-item bg-primary text-white">
                                    <i class="fab fa-bitbucket"></i>
                                </div>
                                <div className="card-content mt-4">
                                    <h1 className="fs-4 fw-bold">Feature boxes</h1>
                                    <p className="mb-0">We've created some custom feature boxes using Bootstrap icons!</p>
                                </div>
                            </div>
                        </div>       
                        <div className="col mb-4">
                            <div className="card h-100 p-4  text-center bg-light">
                                <div className="card-item bg-primary text-white">
                                    <i class="fa fa-code"></i>
                                </div>
                                <div className="card-content mt-4">
                                    <h1 className="fs-4 fw-bold">Simple clean code</h1>
                                    <p className="mb-0">We keep our dependencies up to date and squash bugs as they come!</p>
                                </div>
                            </div>
                        </div>       
                        <div className="col mb-4">
                            <div className="card h-100 p-4  text-center bg-light">
                                <div className="card-item bg-primary text-white">
                                    <i class="fa fa-box-open"></i>
                                </div>
                                <div className="card-content mt-4">
                                    <h1 className="fs-4 fw-bold">A name you trust</h1>
                                    <p className="mb-0">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                                </div>
                            </div>
                        </div>       
                    </div>

                </div>
            </div>
        )
    }
}
