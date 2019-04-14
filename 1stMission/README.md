# 小任务1:我的钱包

## 运行方式
 - 进入目录后执行npm i 
 - 执行npm run dev
 - 访问localhost即可

## 常见问题
 - 0.0.0.0不可访问,请访问localhost
 - 请预留80端口(默认80口，可以在webpack.config.js中修改)

## 任务思考

### 移动端的布局

经过几天的学习和思考，参考了样式页面的设计，得出了下列布局方案

1.根据layout-width(以下的width不加特殊说明均为layout-width)计算html根元素的字体大小

2.html里面的元素padding，margin基本全部使用rem，根据html根元素大小放缩，个别特殊模块使用px写死

#### 关于布局的想法
关于viewport和dpr网上有很多文章可以了解。实际书写时基本通过`width=device-width,initial-scale=1`进行控制layout-width。

其中通过`width=device-width`就能使layout-width达到iphone6的layout-width为375px左右(我自己的安卓机是360px)

`initial-scale`也是控制layout-width的，和`width=device-width`选择一个起作用，可能也是兼容性保证吧。可以同时写。

```
html根元素字体大小=(layout-width/37.5)px
```

这是因为设计稿一般针对iphone6物理宽度750px进行设计，同时也使得设计稿中20px=1rem，方便将设计稿转化成代码。

就本项目而言基本就是这样，因为样式页面中`我的钱包`和`钱包管理`都是直接使用px写死的。我不太明白为什么要写死，后来自己把手机横过来又或者使用chorme进行移动端调试，得出的结论是样式页面在设计上本来就是为layout-width为375px左右的竖屏手机设计的。在横屏和pc上(pc上layout-width就很大了)表现不佳是正常的。

#### 整体布局使用基本流

整体布局使用基本流，从上到下的顺序结构。

其中header参考样式页面使用fix，header内部使用了flex布局进行水平居中，垂直居中

Hongbao模块就直接写就好啦。注意的是当时调整Hongbao模块的"--"字符时发现和样稿字间距不同，后来注意到是字体问题。

钱包服务和其他服务的Service模块应该是完全一样的，本应该写成一个的组件，结果分成两个组件是因为实际写时应该xhr获取数据，但是我现在在组件内模拟数据，干脆写成两个算了。。理想的情况下应该是组件有2个输入，一个是service组件标题，一个是获取的数据或者能获取数据的url

Service模块内部使用flex布局，每个item有自己的border划线，通过换行排列

两个service模块之间使用轮播图组件，我参考样式页面，使用了相同的Swiper库进行还原。

#### 样式方面
自己组件的样式采用styled.componnet，优势是css in js,和react很搭，而且编译出css样式本身是具备兼容的

轮播图组件内部样式采用Swiper库的样式和全局样式进行调整

#### 移动端兼容性，优化方面

1.使用`user-scalable=no`禁止了用户缩放，同时也禁止了移动端300ms的等待时间。
经过测试确实没有300ms延迟，but是不是`user-scalable=no`字段的作用有待考证。

2.`viewport-fit=cover`是为刘海屏设计的viewport字段，可以使页面充满刘海屏。

3.index.css使用postcss插件增加浏览器前缀进行兼容

4.styled-component也自带浏览器前缀兼容

5.禁止复制、选中文本
```html
html{
    -webkit-user-select:none;

    -moz-user-select:none;

    -khtml-user-select:none;

    user-select:none;
}
```
可能有未考虑到的，待补全


#### 关于touch事件

这方面写的没有经验。实现的不太好，是通过判断pc还是mobile然后再使用mousedown和mouseup(mouseup有一个不容易发现的小问题，暂时想不到较好的fix方法..)，或者touchstart，end，move来改变bgc，这个地方没有结合styledcomponet，主要是用的不太熟。。
















