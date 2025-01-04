<template>
  <div>
    <!-- <h1>{{message}}</h1> -->
   <element-view></element-view>
    
  </div>
</template>





<script>
import ElementView from './views/ElementView.vue'

export default{
    data() {
        return {
            message: "Hello world"
        };
    }, 
    methods: {
      
    },
    components: { ElementView }
}
</script>




<style>

</style>


