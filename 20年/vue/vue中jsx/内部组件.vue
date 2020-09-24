<script>
export default {
  name: "exchangeProfessional",

  data() {
    return {
        showProfession: false,
        showClass: false,
        showStundentNo: false,
        showNewCharge: false,
        list1 : [{project: '学费',mount: 200}],
        list : [{project: '学费',mount: 200}],
        isSearch: true
    };
  },
  components: {
    chargeStand: {
        props: {
            isNew: {
                type: Boolean,
                default: false
            },
            list: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            janerateList(list) {
                let child = []
                let total = 0
                if(!this.isNew) {
                    child = list.map(v => {
                        total += Number(v.mount)
                        return (
                            <li class='d-charge-li'>
                                <span>{v.project}</span>
                                <span>{v.mount}</span>
                            </li>
                        )
                    })
                }else {
                    child = list.map((v, k) => {
                        let options = {
                            props: { type: 'number' },
                            attrs: {
                                value: v.mount,
                                placeholder: '请输入'
                            },
                            on: { input: this.input.bind(this,v, k) },
                            class: 'd-input-style'
                        }
                        let item = <input {...options} />
                        total += Number(v.mount)
                        return (
                            <li class='d-charge-li'>
                                <span>{v.project}</span>
                                <span>{item}</span>
                            </li>
                        )
                    })
                }
            
                return (
                    (
                        <ul>
                            {child}
                            <li class='d-charge-li'>
                                <span>合计</span>
                                <span>{total}</span>
                            </li>
                        </ul>
                    )
                ) 
            },
            input(v, k, e) {
                let value = e.target.value
                console.log(v, k, value)
                this.$emit('changeCharge', v,k,value)
            }
        },
        render() {
            let title = this.isNew ? '新的' : '现有'

            let list = this.janerateList(this.list)
            
            return (
                <div class='d-charge-standerd'>
                    <div class='d-charge-header'>{title}学杂费应收标准</div>
                    {list}
                </div>
            )
        }
    },
    infoItem: {
      props: {
        label: String,
      },
      render() {
        return (
          <div class="item-wrap">
            <div class="item-label">{this.label}</div>
            <div class="item-contain">{this.$slots.default}</div>
            <div class="choose-item">{this.$slots.right}</div>
          </div>
        );
      },
    },
    innerItem: {
      props: {
        info: String,
        isSearch: {
          type: Boolean,
          default: false,
        },
        placeholder: String,
        needed: {
          type: Boolean,
          default: true,
        },
        type: String,
      },
      data() {
        return {
          input: "",
        };
      },
      methods: {
        janerateInner() {
          if (this.isSearch) {
            let options = {
              attrs: {
                placeholder: this.placeholder,
              },
              props: {
                value: this.input,
              },
              class: "input-with-select",
              on: {
                input: this.onInput,
              },
            };
            return (
              <el-input {...options}>
                <el-button
                  slot="append"
                  icon="el-icon-search"
                  onClick={() => {
                    this.$emit("search", this.input);
                  }}
                ></el-button>
              </el-input>
            );
          } else {
            let needed = this.needed;
            let adjustButton = (
              <el-button type="primary" {...{ on: { click: this.onClick } }}>
                调整
              </el-button>
            );
            return (
              <div class="info-item">
                <div>{this.info}</div>
                {needed && adjustButton}
              </div>
            );
          }
        },
        onClick(e) {
          this.input = ''
          this.$emit("Dclick", this.type);
        },
        onInput(e) {
          this.input = e;
        },
      },
      render() {
        let inner = this.janerateInner();
        return <div class="info-item">{inner}</div>;
      },
    },
  },
  methods: {
    changeCharge(v,index, value) {
        this.list[index].mount = value
    },
    handleChargeStandard() {
        this.showNewCharge = true
        console.log('123')
    },
    Dclick(v) {
      console.log(v);
      switch(v) {
          case 'init':
              this.initParam()
              break
          case 'professional':
              this.showProfession = true
              break
          case 'class':
              this.showClass = true
              break
          case 'classNo':
              this.showStundentNo = true
              break
      }
    },
    initParam() {
        this.isSearch = true
        
        this.showProfession = false
        this.showClass = false
        this.showStundentNo = false
        this.showNewCharge = false
        this.list1 = []
        this,list = []
    },
    handleSearch(v) {
      console.log(v);
      if(!v) {
        this.$cusDialog.error(() => [], '请输入学生姓名或者身份证号');
        return
      }
      this.isSearch = false 
    },
  },
};
</script>