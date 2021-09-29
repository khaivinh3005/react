import React, { Component } from 'react'

export default class Databinding extends Component {
    //Thuoc tinh
    age = 28;
    img = "https://i.imgur.com/e5Zxf5M.jpg";


    renderProduct = () => {
        let product = {
            name: "Tivi",
            moTa: "San pham",
            gia: 100,
            imgProduct: "https://i.imgur.com/e5Zxf5M.jpg"
        }

    return <div className="card" style={{ width: '18rem' }}>
                <img src={product.imgProduct} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.moTa}</p>
                    <a href="#" className="btn btn-primary">{product.gia}</a>
                </div>
            </div>
    }


    // Phương thức chính của react
    render() {
        // Biến thông thường
        let name = "Khai VInh"

        return (
            <div className="container d-flex justify-content-center text-center">
                    {this.renderProduct()}
            </div>
        )
    }
}
