<template>
    <div>
      <v-card>
        <h4 class="pl-5 pt-5">{{detailPost.userId}}</h4>
        <v-card-title>{{detailPost.title}}</v-card-title>
        <v-card-text v-html="detailPost.body"></v-card-text>
        <hr>
        <h4 class="pl-5">Comments({{commentList.length}})</h4>
        <div v-for="(post,idx) in commentList" :key="idx"
                class="my-3 pa-5">
          <h6>{{post.name}}</h6>
          <h6>{{post.email}}</h6>
          <h6 class="text-none">{{post.body}}</h6>
        </div>
      </v-card>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "postDetail",
      data(){
          return{
          }
      },
      computed:{
        ...mapGetters(['detailPost','commentList'])
      },
      mounted(){
         this.getPostDetail(this.$route.params.id),
         this.getPostComments(this.$route.params.id)
      },
      methods: {
        async getPostDetail(id) {
          const res = await this.$store.dispatch('getPostDetail', id)
          console.log(res)
        },
        async getPostComments(id) {
          const res = await this.$store.dispatch('getPostComment', id)
          console.log(res)
        },
      }
    }
</script>

<style scoped>

</style>