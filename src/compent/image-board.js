import React, { Component } from 'react';

import { Icon } from 'antd';
import './image-board.css';

class ImageBoard extends Component {
    // {
    //     image:{},
    //     information:{}
    // }

    imageBoardImage(image) {

        return <img src={image.src}></img>;
    }

    imageBoardWidget() {

        return <div className="image-board-widget-content">
            <Icon type="step-backward" theme="outlined" style={{ fontSize: '50px'}}/>
            <Icon type="play-circle" theme="outlined" style={{ fontSize: '50px'}}/>
            <Icon type="step-forward" theme="outlined" style={{ fontSize: '50px'}}/>
        </div>;
    }

    imageBoardInformation(information) {
        //迭代对象
        const context = Object.keys(information).map(key =>
            <div><span>{key}：</span><span>{information[key]}</span></div>
        )
        return context;
    }

    build(data) {
        let image = this.imageBoardImage(data.image)
        let widget = this.imageBoardWidget();
        let information = this.imageBoardInformation(data.information);
        return <div className='image-board'>
            <div className='image-board-image'>{image}</div>
            <div className='image-board-widget'>{widget}</div>
            <div className='image-board-information'>{information}</div>

        </div>;
    }

    render() {
        return (
            this.build(this.props.data)
        );
    }
}

export default ImageBoard;