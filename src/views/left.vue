<template lang="html">
  <div class="sideBar" :style="{'height':$store.state.winHeight+'px'}" >
      <add ref="add"></add>
      <ul>
        <li @click="addNotes"><Icon type="ios-plus-outline"></Icon></li>
        <li @click="setFavorite"><Icon type="ios-heart-outline"></Icon></li>
        <li @click="deleteNote"><Icon type="ios-minus-outline"></Icon></li>
      </ul>
  </div>
</template>

<script>
import add from './add.vue';
export default {
  methods:{
    addNotes: function(){
      let addVue = this.$refs.add;
      addVue.show = true;
    },
    setFavorite: function(){
      let _this = this;
      this.$store.commit('setFavorite', function(){
         _this.$Modal.success({
             title: "提示",
             content: "收藏成功!"
         });
      });
    },
    deleteNote: function(){
      let _this = this;
      this.$store.commit('delete',function(){
        _this.$Modal.success({
            title: "提示",
            content: "删除成功!"
        });
      });
    }
  },
  components:{
    add
  }
}
</script>

<style lang="css" lang="less">
@import '../style/common.less';
.sideBar{
  background: @main-color;
  color: #fff;
  padding:20px;
  text-align: center;
  i{
    color: #fff;
    font-size:30px;
    margin:10px 0px;
    cursor: pointer;
  }
}
</style>
