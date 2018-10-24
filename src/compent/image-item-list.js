import React, { Component } from 'react';
import ImageItem from './image-item'; //载入组件
import './image-item-list.css';//载入css样式

class ImageItemList extends Component {
    //通过重写（overrid）render函数，让react框架执行自定义组件的功能
    render() {
        return (
           <div className='image-item-list'>
           {this.props.datas.map((data) => <ImageItem data={data}/>)}
           </div>
        );
    }
}

export default ImageItemList; //导出自定义组件