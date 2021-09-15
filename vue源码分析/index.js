import { Mixininit } from './init'

import { eventsMixin } from './events'

function Vue(opt) {
    if(!this instanceof Vue) {
        throw Error(
            'Vue is a constructor and should be called with the `new` keyword'
        )
    }

    this._init(opt)
}

Mixininit(Vue)

eventsMixin(Vue)
export default Vue
