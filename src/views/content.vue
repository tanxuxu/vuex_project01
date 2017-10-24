<template lang="html">
  <div class="content" :style="{'height':$store.state.winHeight+'px'}">
      {{content}}
  </div>
</template>

<script>
export default {
  computed:{
    content: function(){
      let item = this.$store.state.activeNote;
      let notes = this.$store.state.notes;
      let content = "";
      for(let i=0;i<notes.length; i++){
        if(notes[i] == item){
          content = notes[i].content;
        }
      }
      return content;
    }
  }
}
</script>

<style lang="less" scoped>
@import '../style/common.less';
.content{
  padding:20px;
}
</style>
