<template>
    <div>

    </div>
</template>
<script lang='ts'>
  export default {
    name: 'Test',
    data() {
        return {
            list: [1, 2, 3, 4]
        }
    },
    methods: {
       request(number) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(number + 2);
            }, 1000)
        })
       },
       delay() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 20000)
        })
       }, 
       async requestList() {
          for(let i = 0, l = this.list.length; i < l; i++) {
             const res = await this.request(this.list[i]) // res 为 1/2/3/4 + 2
             // todo 处理返回值
             //  同步延迟20秒  
             await this.delay();
          }
       }
    },
    mounted() {
       this.requestList(); 
    }
  }
</script>