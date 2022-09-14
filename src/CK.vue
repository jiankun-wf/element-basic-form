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
              setTimeout(() => { this.getEditorBody(callback) }, 100)
            });
          } else callback && callback(iframe.contentWindow.document.body)
        },
        // 监听变化 事件
        editorReady(Editor) {
          // Editor.execCommand('pagebreak');
          Editor.on('change', () => {
            this.computedPageBreak(Editor);
          })
        },
        // 计算分页
        computedPageBreak(Editor) {
           this.getEditorBody((context) => {
              const innerHeight = context.scrollHeight;
              // 小于一页    
              if(innerHeight < this.pageBreakHeight) {
                console.log(Editor, '1');
                this.editorData.length === 9 && Editor.execCommand('pagebreak');
                return;
              } else {
                const pages = Math.ceil(innerHeight / this.pageBreakHeight);
                console.log(pages);
              }
           })
        }
    }
  }
</script>


<style lang='less' scoped>
 #app {
   width: 50%;
   margin: 60px auto;
 }
</style>