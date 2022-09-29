<template>
  <div>
    <h4 class="py-3">Edit Post</h4>
    <v-card class="br-12 mt-10">
      <v-card-text class="pb-8 mx-auto">
        <v-form ref="updatePost">
          <v-row :dense="$vuetify.breakpoint.xsOnly">
            <v-col cols="10">
              <v-textarea rows="2"
                          solo
                          placeholder="Post Title"
                          class="no-shadow"
                          auto-grow
                          v-model="editForm.title"
                          background-color="#FDFDFD"
                          no-resize>
                {{ detailPost.title }}
              </v-textarea>
              <v-textarea rows="4"
                          solo
                          placeholder="Post Body"
                          class="no-shadow"
                          auto-grow
                          v-model="editForm.body"
                          background-color="#FDFDFD"
                          no-resize>
              </v-textarea>
              <v-btn
                  color="primary"
                  class="text-none no-before mr-3"
                  depressed
                  :class="{'justify-start':$vuetify.breakpoint.smAndUp}"
                  :small="$vuetify.breakpoint.xsOnly"
                  @click="updatePost()"
              >
                Update
              </v-btn>
              <v-btn class="grey text-none" @click="$router.go(-1)">Cancel</v-btn>
            </v-col>
          </v-row>
        </v-form>


      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "postEdit",
  data() {
    return {
      editForm: {},
      res:{}
    }
  },
  computed: {
    ...mapGetters(['detailPost'])
  },
  mounted() {
    this.getPostDetail(this.$route.params.id)
    this.editForm=this.detailPost
  },
  methods: {
    async getPostDetail(id) {
      const res = await this.$store.dispatch('getPostDetail', id)
      console.log(res)
    },
    async updatePost() {
      if (this.$refs.updatePost.validate()) {
        console.log(this.editForm)
        // const res = await this.$store.dispatch('editPost', this.editForm)
        // if (res) {
        //   this.$refs.updatePost.reset()
        // }
      }
    }
  }
}
</script>

<style scoped>

</style>