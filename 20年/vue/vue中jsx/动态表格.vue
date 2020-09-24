<script>
export default {
    name: 'SchoolTable',
    data() {
        return {

        }
    },
    props: {
        tableColumn: {
            type: Array,
            default: () => []
        },
        tableData: {
            type: Array,
            default: () => []
        },
        pageList: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        janeList(list) {
            let that = this
            if (!list.length) return []
            let colList = list.map((v, i) => {
            if (!v.renderScope) {
                return ( <el-table-column {...{ props: v } } > </el-table-column>)
                }
                else {
                    let scopedSlots = {
                        default: (scope) => {
                            console.log(that.$scopedSlots.action);
                            return that.$scopedSlots[v.renderScope.name]({...scope })
                        }
                    }
                    return ( <el-table-column {... { props: v, scopedSlots } } > </el-table-column>)
                    }
                })
            return colList
        },
        janePageNat(pageList) {
            if (!pageList.currentPage || !pageList.total) return null

            let props = {
                ...pageList
            }
            let on = {
                sizeChange: this.sizeChange,
                currentChange: this.currentChange,
            }

            return ( <el-pagination {...{ props, on } } > </el-pagination>
            )

        },
        sizeChange(val) {
            console.log('size', val);
        },
        currentChange(val) {
            console.log('current', val);
        }
    },
    render() {
        let props = {
            data: this.tableData,
            height: '250'
        }
        let columnList = this.janeList(this.tableColumn)
        let pageNat = this.janePageNat(this.pageList)


        return ( <div >
            <el-table {... { props, style: {width: '1000px'}} } > { columnList } </el-table> 
            { pageNat }
                </div>
        )
    }
}
</script>>