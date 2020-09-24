<script>
export default {
    name: 'sortVue',
    props: {
        arr: {
            type: Array,
            default: () => []
        }
    },
    render() {
        if(this.arr.length< 2) {
            return (<span>{this.arr+ ''}</span>)
        }else {
            let first = this.arr[0]
            let left = [],right = [],middle = []
            for(let i= 0;i<this.arr.length;i++) {
                let c = this.arr[i]
                if(c> first) {
                    right.push(c)
                }else if(c < first){
                    left.push(c)
                }else {
                    middle.push(c)
                }
            }
            console.log(left, right);
            return (
                <span>
                    <sort-vue arr={left}></sort-vue>
                    <span >{middle + ''}</span>
                    <sort-vue arr={right}></sort-vue>
                </span>
            )
        }
    }
}
</script>
