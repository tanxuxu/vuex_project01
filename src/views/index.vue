<style scoped lang="less">
    @import '../style/common.less';

</style>
<template>
    <div class="index">
      <Row>
        <Col span="2">
            <left></left>
        </Col>
        <Col span="5">
            <list></list>
        </Col>
        <Col span="17">
            <detail></detail>
        </Col>
      </Row>
    </div>
</template>
<script>
    import left from './left.vue';
    import list from './list.vue';
    import detail from './content.vue';
    export default {
        mounted(){

        },
        created(){

        },
        computed:{
          
        },
        methods: {

        },
        components: {
          left,
          list,
          detail
        }
    };
</script>
