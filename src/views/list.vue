<template lang="html">
  <div class="listBox" :style="{'height':$store.state.winHeight+'px'}">
     <ButtonGroup style="width: 100%;margin-bottom: 20px;">
          <Button type="primary" style="width: 120px;" @click="all">全部</Button>
          <Button type="ghost" style="width: 120px;" @click="favorite">收藏</Button>
     </ButtonGroup>
     <ul>
       <li v-bind:class="{ current: activeNote == item }"  v-for="(item,index) in listData" @click="showDetail(item)">{{index+1+'.'}}{{item.title}}</li>
     </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show: 'all'
    }
  },
  mounted(){
    let note = this.$store.state.notes[0]
    this.$store.commit('setActiveNote',note);
  },
  computed:{
    listData: function(){
      if(this.show == 'all'){
        return this.$store.state.notes;
      }else{
        return this.$store.getters.notes.filter(note=>note.favorite)
      }
    },
    activeNote: function(){
      return this.$store.state.activeNote;
    }
  },
  methods: {
    //显示详情
    showDetail: function(item){
       this.$store.commit("setActiveNote",item);
    },
    all: function(){
       this.show = 'all';
    },
    favorite: function(){
       this.show = '';
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../style/common.less';
  .listBox{
    background: @grey-bg;
    padding:20px;
    li{
      line-height: 30px;
      height: 30px;
      font-size: 14px;
      padding:0px 10px;
    }
    li.current{
      background: @main-color;
      color: #fff;
    }
  }
</style>
