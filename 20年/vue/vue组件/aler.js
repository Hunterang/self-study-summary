import Vue from 'vue';
import aler from './aler.vue';

let InstanceConstructor = Vue.extend(aler)


function show(type, opt = {}) {
    let baseForm = {
        type,
        option: {}
    }
    opt = Object.assign({}, baseForm, opt)
    let instance = new InstanceConstructor({
        data: opt
    })
    instance.$mount()
    let el = instance.$el
    console.log(instance);
    document.body.appendChild(el)
}

['success', 'add', 'error'].forEach(element => {
    show[element] = function(opt) {
        show(element, opt)
    }
});

export default show