<template>
<div>
    <div @click="pp1">p1</div>
    <div @click="pp2">p2</div>
    
</div>
</template>
<script>
export default {
    name: "index",
    data() {
        return {
            peer1:null,
            peer2:null,
        }
    },
    methods: {
        pp1(){
            this.peer1.send('{sdf:1111}')
        },
        pp2(){
            this.peer2.signal({sdf:1111})
        },
    },
    created() {
        let Peer = require('simple-peer')
    
        var peer1 = new Peer({ initiator: true })
        var peer2 = new Peer()
        this.peer1=peer1
        this.peer2=peer2
        peer1.on('signal', data => {
            // when peer1 has signaling data, give it to peer2 somehow
            peer2.signal(data)
        })
    
        peer2.on('signal', data => {
            // when peer2 has signaling data, give it to peer1 somehow
            // peer1.signal(data)
        })
    
        peer1.on('connect', () => {
            // wait for 'connect' event before using the data channel
            peer1.send('hey peer2, how is it going?')
        })
    
        peer2.on('data', data => {
            // got a data channel message
            console.log('got a message from peer1: ' + data)
        })
    }
}
</script>

<style scoped>

</style>
