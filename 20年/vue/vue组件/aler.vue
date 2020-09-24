
<script>
export default {
    name: 'aler',
    data() {
        return {
            type: '',
            option: {
                content: '',
                confirm: '',
                cancle: ''
            }
        }
    },
    mounted() {
        setTimeout(() => {
            document.body.removeChild(this.$el)
        },1500)
    },
    render() {
        let opt = {
            'class': [`my_aler`,`my_aler_${this.type}`]
        }
        let {content, confirm, cancle} = this.option
        return(
            <div {...opt}>
                <article>{content}</article>
                <footer>
                    <button>{confirm}</button>
                    <button>{cancle}</button>
                </footer>
            </div>
        )
    }
}
</script>
<style type="text/css" lang="scss" scoped>
    .my_aler {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        height: 200px;
        width: 200px;
    }
    .my_aler_error {
        border: 1px solid #ffaaaa;
    }
    .my_aler_add {
        border: 1px solid #fda;
    }
    .my_aler_success {
        border: 1px solid #19f;
    }   
</style>
