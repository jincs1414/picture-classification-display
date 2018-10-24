import React from 'react';
import ReactDOM from 'react-dom';
import ImageItemList from './compent/image-item-list';
import ImageBoard from "./compent/image-board";
import * as serviceWorker from './serviceWorker';
import './App.css';

const imageItems ={
    title:'11',
    imageItems:[{
        name:'1',
        src:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    },{
        name:'2',
        src:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    },
    {
        name:'3',
        src:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    }]
};
let datas = new Array();
datas.push(imageItems);
datas.push(imageItems);
datas.push(imageItems);
datas.push(imageItems);

let boardData = {
    image:{
        src:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    },
    information:{
        name:'测试'
    }
};
// 通过属性向组件传递参数 ，如<ImageItemList datas={datas} />就使用了datas属性向ImageItemList组件
//传递datas参数，组件通过this.props.datas获取传递过来的datas参数
ReactDOM.render(<ImageItemList datas={datas} />, document.getElementById('left'));
ReactDOM.render(<ImageBoard data={boardData}/>, document.getElementById('right'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
