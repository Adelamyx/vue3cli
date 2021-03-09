<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
    <van-rate v-model="value"  :size="8"></van-rate>
    <div>
      <div>
        <p class="titlel">121212 1594968908940000睡觉睡觉死睡觉上课上课地道激动快点快点快点买的迪士尼死的你懂的快点快点快点就多久的激动呢死谁能死睡觉上课睡觉谁呢死多久死多久死睡觉死睡觉地道就死睡觉睡觉死睡觉死睡觉时死上课多久谁能死睡觉死上课地道能死睡觉死时时刻刻死谁能死睡觉地道的激动激动就多久死睡觉时isjsjsk
          小亟待解决的当你想看到你的快点多久上课时间是今生今世都觉得道激动极地的激动激动就多久激动的亟待解决的多久的多久的当你的激动激动就多久</p>
      </div>
      <van-cell is-link @click="showPopup">展示弹出层</van-cell>
      <van-popup v-model="popupShow" position="right" :style="{ width: '90%', height: '100%' }">
        <div class="popCotent">1212</div>
      </van-popup>
      <!-- <van-tabs v-model="active" swipeable sticky>
        <van-tab title="标签 1">
          <div class="tab1content">上课上课地道激动快点上课上课地道激动快点上课上课地道激动快点上课上课地道激动快点上课上课地道激动快点</div>
        </van-tab>
        <van-tab title="标签 2">
          <div class="tab1content">上课上课地道激动快点上课上课地道激动快点上课上课地道激动快点上课上课地道激动快点上课上课地道激动快点</div>
          上课上课地道激动快点上课上课地道激动快点上课上课地道激动快点上课上课地道激动快点上课上课地道激动快点 2</van-tab>
        <van-tab title="标签 3"> <div class="tab1content">上课上课地道激动快点上课上课地道激动快点上课上课地道激动快点上课上课地道激动快点上课上课地道激动快点</div>
          上课上课地道激动快点上课上课地道激动快点上课上课地道激动快点上课上课地道激动快点上课上课地道激动快点 3</van-tab>
      </van-tabs> -->
      <div>
        <p class="titlel">121212 1594968908940000睡觉睡觉死睡觉上课上课地道激动快点快点快点买的迪士尼死的你懂的快点快点快点就多久的激动呢死谁能死睡觉上课睡觉谁呢死多久死多久死睡觉死睡觉地道就死睡觉睡觉死睡觉死睡觉时死上课多久谁能死睡觉死上课地道能死睡觉死时时刻刻死谁能死睡觉地道的激动激动就多久死睡觉时isjsjsk
          小亟待解决的当你想看到你的快点多久上课时间是今生今世都觉得道激动极地的激动激动就多久激动的亟待解决的多久的多久的当你的激动激动就多久</p>
      </div>

      <!-- <VanImage src="https://img01.yzcdn.cn/vant/cat.jpeg"></VanImage> -->
     
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Popup, Rate, Cell, Tab, Tabs} from 'vant';

// import FixedBottom from '@/components/fixedBottom';

console.log(Popup, Tab, Tabs)
console.log(9999, process.env, process.env.VUE_APP_VUETS, )



@Component({
  components: {
    [Rate.name]: Rate,
    [Popup.name]: Popup,
    [Cell.name]: Cell,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,

    // FixedBottom,
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  public radio = 1
  public value = 4
  popupShow = false

  showPopup() {
    this.popupShow = true
  }
}
// console.log(Rate.name,Rate,  Image)

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title {
  
  font-size: 30px;
  color: #121212;
  line-height: 36px;
  border: 1PX solid #eee;
  // width: 654px;
  // width: 100%;
}
.titlel {
  font-size: 26px;
  @include ellipsis(4);
  line-height: 48px;
  width: 654px;
  height: 2000px;
  margin: 0 auto;
}
.popCotent {
  font-size: 26px;
  height: 100%;
  width: 700px;
  background: #fff;
}
.tab1content {
  font-size: 26px;
  line-height: 48px;
  background: #f9f9f9;
  height: 500px;
}
</style>
