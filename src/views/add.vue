<template lang="html">
    <Modal
        v-model="show"
        title="添加笔记">
        <div class="content">
            <Row>
              <Col span='24'>
                  <Input v-model="title" placeholder="请输入标题" style="width: 100%"></Input>
              </Col>
            </Row>
            <Row style="margin:10px 0;">
              <Col span='24'>
                  <Input v-model="content" type="textarea" placeholder="请输入笔记内容" style="width: 100%"></Input>
              </Col>
            </Row>
        </div>
        <div slot="footer">
          <Button type="text" @click="cancel">取消</Button>
          <Button type="primary" @click="add">添加</Button>
        </div>
    </Modal>
</template>

<script>
export default {
  data: function(){
    return {
      show: false,
      title: "",
      content: ""
    }
  },
  methods:{
    add: function(){
       let title = this.title;
       let content = this.content;
       this.$store.commit('addNotes',{title,content});
       this.show = false;
       //新增完后清空对象
       this.title = "";
       this.content = "";
    },
    cancel: function(){
       this.show = false;
    }
  }
}
</script>

<style lang="less" scoped="true">
.content{
  padding: 20px;
}
</style>
