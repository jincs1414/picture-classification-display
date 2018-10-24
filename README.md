## 基于react的图片分类查看功能（demo）

npm命令
`npm i name -d --save` 安装开发版本的依赖 i-->(install) -d-->(--devDependencies)

## 总结

 - css
  通过添加`clear:both`样式实现内部元素撑开外部div的效果，清除`float: left;`带来的浮动效果引起的样式异常

  迭代对象

  ```js
    const tifOptions = Object.keys(tifs).map(key => 
        <option value={key}>{tifs[key]}</option>
    )
  ```