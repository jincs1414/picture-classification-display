import React, { Component } from 'react';
import './image-item.css';

class ImageItem extends Component {

    // {
    //     title:'',
    //     imageItems:[
    //         {
    //             src:'',
    //             name:''
    //         }
    //     ]
    // }
    //成员函数
    imageItemBody(imageItems) {
        const Content = imageItems.map((imageItem) =>
            <div className='image-item-content' title={imageItem.name}>
                <img src={imageItem.src}></img>
            </div>
        );
        return Content;
    }

    imageItemTitle(title) {
        //在jsx中使用变量采用{变量名}，不能加分号（会当成字符串处理）
        return <span>{title}</span>;
    }

    build(data) {
        let head = this.imageItemTitle(data.title)
        let body = this.imageItemBody(data.imageItems);
        return <div className='image-item'>
            <div className='image-item-head'>{head}</div>
            <div className='image-item-body'>{body}</div>
        </div>;
    }

    render() {
        return (
         this.build(this.props.data)
        );
    }
}

export default ImageItem;