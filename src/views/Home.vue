<template>
  <div class="home">
    <div>
      <v-card v-for="(post,idx) in postList" :key="idx"
              class="my-3 pa-5">
        <v-card-title class="text-h5"><a :href="'/post/' + post.id" class="text-decoration-none">{{post.title}}</a></v-card-title>
        <v-card-text v-html="post.body"></v-card-text>
        <div class="px-5">
          <v-btn class="red text-none mr-2" small @click="deletePost(post.id)"><v-icon>mdi-delete</v-icon>Delete</v-btn>
          <v-btn class="success text-none" small :href="'/edit-post/' + post.id"><v-icon>mdi-pen</v-icon> Edit</v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  computed:{
    ...mapGetters(['postList'])
  },
  mounted(){
    this.getPost()
  },
  methods:{
    async getPost(){
      await this.$store.dispatch('getPosts')
    },
    async deletePost(id){
      await this.$store.dispatch('deletePost',id)
      await this.getPost()
    }
  }
}
</script>
