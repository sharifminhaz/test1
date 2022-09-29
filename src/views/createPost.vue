<template>
  <v-card class="br-12 mt-10">
    <v-card-text class="pb-8 mx-auto">
      <v-form ref="createPost">
        <v-row :dense="$vuetify.breakpoint.xsOnly">
          <v-col cols="10">
            <v-textarea rows="2"
                        solo
                        placeholder="Post Title"
                        class="no-shadow"
                        auto-grow
                        v-model="form.title"
                        background-color="#FDFDFD"
                        no-resize>
            </v-textarea>
            <v-textarea rows="4"
                        solo
                        placeholder="Post Body"
                        class="no-shadow"
                        auto-grow
                        v-model="form.body"
                        background-color="#FDFDFD"
                        no-resize>
            </v-textarea>
            <v-btn
                color="primary"
                class="text-none no-before"
                depressed
                :class="{'justify-start':$vuetify.breakpoint.smAndUp}"
                :small="$vuetify.breakpoint.xsOnly"
                @click="submitPost()"
            >
              Post
            </v-btn>
          </v-col>
        </v-row>
      </v-form>


    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "createPost",
  data() {
    return {
      form:{}
    }
  },
  methods:{
    async submitPost(){
      if(this.$refs.createPost.validate()){
        this.form.userID = 2
        console.log(this.form)
        const res = await this.$store.dispatch('createPost',this.form)
        if(res) {
          this.$refs.createPost.reset()
        }
      }
    }
  }

}
</script>

<style scoped>

</style>