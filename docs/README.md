# 介绍

ve-table 是基于 Element-UI 封装的表格组件，用于使用统一的数据格式，以及简化的配置项，
实现常用的功能，同时支持 1.x 和 2.x 版本。

## 安装

### npm

```
npm i element-ui ve-table -S
```

### cdn

```
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/numerify/lib/index.umd.min.js"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script src="https://unpkg.com/ve-table/lib/index.js"></script>
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"></link>
```

#### cdn 使用示例
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>ve-table</title>
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/numerify/lib/index.umd.min.js"></script>
  <script src="https://unpkg.com/element-ui/lib/index.js"></script>
  <script src="https://unpkg.com/ve-table/lib/index.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"></link>
</head>
<body>
  <div id="app">
    <div>
      <div classname="wrapper">
        <ve-table :data="tableData" :columns="tableColumns">
      </ve-table></div>
    </div>
  </div>
  <script>
    var Main = {
      data () {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            num: 123123
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            num: 123123
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            num: 123123
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            num: 123123
          }],
          tableColumns: [
            { label: '日期', prop: 'date' },
            { label: '姓名', prop: 'name' },
            { label: '地址', prop: 'address' },
            { label: '数值', prop: 'num' }
          ]
        }
      }
    }
    var Ctor = Vue.extend(Main)
    new Ctor().$mount('#app')
  </script>
</body>
</html>

```
