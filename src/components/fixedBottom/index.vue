<template>
  <div class="fixed-bottom" :style="{height}">
    <article :style="{backgroundColor,background}">
      <div ref="slot">
        <slot />
      </div>
      <div class="menu_wkBox_back_box" />
    </article>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class FixedBottom extends Vue {
  height = '0';
  backgroundColor = '#fff';
  background = ''
  mounted() {
    this.changeHeight()
  }
  updated() {
    this.changeHeight()
  }
  changeHeight() {
    const slotEle: HTMLElement = <HTMLElement>this.$refs.slot
    if (slotEle) {
      const rect = slotEle.getBoundingClientRect();
      try {
        const firstChild = <HTMLElement>slotEle.children[0];
        if(firstChild.style.backgroundColor) {
          this.backgroundColor = firstChild.style.backgroundColor
        } 
        if(firstChild.style.background) {
          this.background = firstChild.style.background
        }
      } catch (e) {
       
      }
      this.height = `${rect.height || 0}px`
    }
  }
}
</script>

<style lang="scss" scoped>
.fixed-bottom {
  article {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>