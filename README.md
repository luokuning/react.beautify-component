#react.beautify-component
Some beautified component with react, you can understand just a UI component, nothing more.
If you want to use those component in your project, I suggest you check out the source code (it's very short).
Now it has only two components, I'll create some new component such as Pagination and Sortable in some days.

1. react.input
  * input[type=checkbox]
  
  ![](https://github.com/luokuning/react.beautify-component/blob/master/pics/pic1.png?raw=true)

  * input[type=radio]
  
  ![](https://github.com/luokuning/react.beautify-component/blob/master/pics/pic2.png?raw=true)

  
  **Usage:**
  You can just see `Input` as `<label>` tag, but more convenient, since we can attach some attributes to `Input`.
  
  ```html
  <Input type='checkbox' onChange={changeHandler} checked={this.state.checked} disabled={this.state.disabled} >
    hello test
  </Input>
  ```
  It'll render like that:
  ![](https://github.com/luokuning/react.beautify-component/blob/master/pics/pic4.png?raw=true)
  
  Just like use normal `<label>` and `<input>` tag. Every attribute you attach to `Input` except **style**,**onMousedown**     will copy to the internal `<input>` tag in `Input`.
  
  You can add `style` attribute to `Input`, and then it'll extend the internal wapper style.
  
  If you want `input[type=radio]`, just replace `type` attribute to `radio`: `<Input type='radio' />`, and other usage are     the same;
  



2. react.droplist

  ![](https://github.com/luokuning/react.beautify-component/blob/master/pics/pic.gif?raw=true)
  
  The above gif animation seems to be not very smooth, might cause by the tool I use to recorde gif, in fact the animation is        very smooth.
  
  **Usage:**
  ```html
  <DropList listDatas={['a','b','c']} className='droplist' style={{}} />
  ```
  It'll render like that:
  ![](https://github.com/luokuning/react.beautify-component/blob/master/pics/pic5.png?raw=true)
  
  Obviously, `listDatas` is a array that will be used to create droplist. `className` and `style` will copy to `DropList` wrapper, so you can change the style as you want. You would like to add `.droplist li:hover{/*...*/}` (in that case classname is `droplist`) to any css file in your project if you want hover affect.
  
  
**Notice:** all those components rely on [Font-Awesome](http://fortawesome.github.io/Font-Awesome/).If you don't want to include `underscore`, just replace `_.extend` and `_.uniqueId` to your own function in source code and make sure it can merge two object.

You can either include the component in a `<script>` tag (after you've include React and underscore/lodash) or through RequireJS/AMD and CommonJS:
 ```javascript
 define(['react', 'underscore', 'react.input'],function(React, _, Input){
   var MyComponent = React.createClass({
     render:function(){
       return (
         <div>
           // ...
           <Input />
           // ...
         </div>
       );
     }
   });
 });
  ```
or
```javascript
var Input = require('react.input');
```
