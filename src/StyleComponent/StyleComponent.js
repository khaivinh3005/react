import React, { Component } from 'react'
// css stylesheet
import './Style.css';
import styleModule from "./StyleComponent.module.css"

export default class StyleComponent extends Component {
    render() {
        let styleInline = {
            backgroundColor:"pink",
            color:"white"
        }
        return (
            <div className="container">
                {/* Style react la` đối tượng */}
                <p style={{backgroundColor:"yello",borderRadius:"20px"}} className="text">StyleComponent</p>
                <p style={styleInline}>Hello</p>
                <p className={styleModule.fontText}>Style module</p>
            </div>
        )
    }
}
