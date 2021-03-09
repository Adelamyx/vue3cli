<template>
  <div class="about">
    <h1 @click="sayHello">This is an about page</h1>
  </div>
</template>
<script>
export default {
  data(){
    return {
      name:'tome'
    }
  },
  methods: {
    sayHello() {
      console.log('name is ', this.name);
      console.log('name is ', this.name);
      console.log('name is ', this.name);
      console.log('name is ', this.name);
      console.log('name is ', this.name);
    }
  }
}
</script>
