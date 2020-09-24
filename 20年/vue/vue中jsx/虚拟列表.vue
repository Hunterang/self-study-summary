<script>
export default {
      data() {
        return {
          start: 0,
          end: 20,
          type: true,
          hasStart: false,
          haseEnd: false,
          timer: null,
          timerDown: null,
        };
      },
      methods: {
        scroll(e) {
          let type = this.type;
          if (type) {
            console.log("shang");
            if (e.target.scrollTop > 60) {
              e.target.scrollTop = 60;
              if (this.timer) clearTimeout(this.timer);
              this.timer = setTimeout(() => {
                this.start += 5;
                this.end += 5;
                this.timer = null;
              });
            }
          } else {
            if (this.start > 3) {
              e.target.scrollTop = 60;
              if (this.timerDown) clearTimeout(this.timerDown);
              this.timerDown = setTimeout(() => {
                this.start -= 5;
                this.end -= 5;
                this.timerDown = null;
              });
            }
          }
        },
        deb(cb, tim = 0) {
          let timer = null;
          return () => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
              cb();
              timer = null;
            }, tim);
          };
        },
        janarateList(start, end) {
          let result = [];
          for (let i = start; i < end; i++) {
            let vDom = <li style="height:30px">这是第{i}条</li>;
            result.push(vDom);
          }
          return result;
        },
        wheel(e) {
          console.log(e);
          this.type = e.wheelDelta < 0;
        },
      },
      render() {
        let list = this.janarateList(this.start, this.end);
        let options = {
          on: {
            mousewheel: this.wheel,
            scroll: this.scroll,
          },
          style: {
            overflow: "auto",
            height: "300px",
          },
        };
        return (
          <div {...options}>
            <ul style="list-style:none">{list}</ul>
          </div>
        );
      },
}
</script>