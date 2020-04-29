###vue中的key -- v-for
* 有key的情况，当数组发生变化的时候，有key的对dom进行移动，没有key的则会被删除。
* 没有key的情况，当数组发生变化时，dom不会移动，但是内容发生变化，纯粹展示的时候，有提升性能的作用。
* 用index作为key会出现bug，key需要是唯一标识。
```javascript
//diff数据对比
//同层比较
//比较中还要考虑sameVnode的情况 key相同dom相同
```
