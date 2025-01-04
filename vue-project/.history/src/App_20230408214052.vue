<template>
  <div>
    <!-- <h1>{{message}}</h1> -->
   <!-- <element-view></element-view> -->
    <!-- 员工管理组件 -->
    <emp-view></emp-view>
    
    
  </div>
</template>

<script>
import ElementView from './views/tlias/EmpView.vue';

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


