<template>
    <div id="app">
        <ckeditor :id="id" ref="editor" v-model="editorData" @ready="editorReady" :config="editorConfig"></ckeditor>
    </div>
</template>
<script lang='ts'>
  export default {
    name: 'App',
    data() {
            return {
                editorData: '',
                editorConfig: {
                    // The configuration of the editor.
                },
                id: new Date().getTime(),
                pageBreakHeight: 300,
            };
    },
    methods: {
        // 获取编辑器高度、滚动高度
        getEditorBody(callback) {
          const iframeWrap = document.getElementById(this.id)
          const iframe = iframeWrap.querySelector('iframe')
          if(!iframe) {
            this.$nextTick(() => {
              setTimeout(() => { this.getEditorWrap(callback) }, 100)
            });
          } else callback && callback(iframe.contentWindow.document.body)
        },
        // 监听变化 事件
        editorReady(Editor) {
          Editor.on('change', () => {
            console.log(Editor.execCommand('pagebreakCmd', Editor));
            // console.log(this.editorData);
             console.log(Editor);
            // this.computedPageBreak(Editor);
          })
        },
        // 计算分页
        computedPageBreak(Editor) {
            console.log(Editor);
           this.getEditorBody((context) => {
              const innerHeight = context.scrollHeight;
              // 小于一页    
              if(innerHeight < this.pageBreakHeight) {
                return;
              } else {
                const pages = Math.floor(innerHeight / this.pageBreakHeight);
                console.log(pages);
              }
           })
        }
    }
  }
</script>


<style lang='less' scoped>

</style>