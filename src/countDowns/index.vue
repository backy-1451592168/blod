<template>
  <div id="countDown" :style="`background-color: ${backgroundColor};`">
    <div @click="animate">
      <div id="countdown">
        <svg :width="size" :height="size">
          <!--    <circle>标签可用来创建一个圆   cx和cy定义圆点的x和y属性坐标,如果省略cx和cy，圆的中心会被设置为(0, 0)   r 属性定义圆的半径   -->
          <circle
            fill="transparent"
            :stroke-width="stroke"
            :stroke="innerColor"
            :r="radius"
            :cx="circleOffset"
            :cy="circleOffset">
          </circle>
          <circle
            class="circle"
            fill="transparent"
            :stroke-width="stroke"
            :stroke="color"
            :r="radius"
            :cx="circleOffset"
            :cy="circleOffset"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="progress"
            stroke-linecap="round">
          </circle>
        </svg>
        <span :style="`color: ${color};`">{{ countdown }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// 扫码
export default {
  name: 'countDowns',
  props: {
      seconds: {
      // 默认类型
      type: Number,
      // 是否必须
      required: true,
      // 是否默认
      default: true
    },
    // 外圈颜色
    color: {
      type: String,
      required: true
    },
    // 背景颜色
    backgroundColor: {
      type: String,
      required: true
    },
    // 内圈颜色
    innerColor: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      size: 600,
      stroke: 30,
      percentage: 100,
      timer: null,
      state: true,
      aaa: 0
    }
  },
  created () {
  },
  
  // 计算属性 html写好对应的计算属性的函数名
  computed: {
    radius() {
      return (this.size / 2) - (this.stroke / 2);
    },
    circleOffset() {
      return this.size / 2;
    },
    circumference() {
      return this.radius * 2 * Math.PI;
    },
    progress() {
      return this.circumference - this.circumference * this.percentage / 100;
    },
    countdown() {
      console.log(Math.ceil(this.seconds * this.percentage / 100), this.percentage);

      return Math.ceil(this.seconds * this.percentage / 100)
    }
  },
  witch: {

  },
  methods: {
    animate() {
      if (!this.state) return
      this.state = false
      this.timer = setInterval(() => {
        this.percentage -= 1/10;

        if (this.percentage <= 0) {
          clearInterval(this.timer)
          this.percentage = 100;
          this.state = true
        }
      }, this.seconds * 1000 / 100 / 10)
    }
  },

  // 实例销毁之前调用
  beforeDestroy () {
  }
}
</script>

<style scoped>
#countDown {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.circle {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;;
}

#countdown {
  display: inline-block;
  position: relative;
}

span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 500px;
  font-family: monospace;
}

</style>
