<template>
    <div id="app">
         {{ $route.path }}
        <div v-if="$route.path!='/'">
            <router-view></router-view>
        </div>
        
        <div v-else>
            asdasd
            
            <router-view></router-view>
        </div>
     
    </div>
</template>
<script>
import Peer from "simple-peer";

export default {
    name: "App",
    data() {
        return {
            socket: null,
            peer1: null,
            peer2: null,
        }
    },
    components: {},
  
    
}
</script>
<style lang="scss">
@import "../src/styles/index";

</style>
<style lang="scss" scoped>
#app {
    height: 100vh;
    //box-sizing: border-box;
}
</style>
