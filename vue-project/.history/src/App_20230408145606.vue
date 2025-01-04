<template>
  <div>
    <!-- <h1>{{message}}</h1> -->
    <element-view></element-view>
  </div>
</template>





<script>

import { electron } from './views/ElementView.vue';

export default{
    data() {
        return {
            message: "Hello world"
        };
    }, 
    methods: {},
    components: { electron }
}
</script>




<style>

</style>


