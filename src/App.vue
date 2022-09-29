<template>
  <v-app class="d-flex flex-column">

    <v-main>
      <v-row>
        <v-col cols="12" sm="2">
          <div>
            <v-navigation-drawer
                v-model="drawer"
                :mini-variant.sync="mini"
                permanent
            >
              <v-list-item class="px-2">
                <v-list-item-avatar>
                  <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-title>John Leider</v-list-item-title>

                <v-btn
                    icon
                    @click.stop="mini = !mini"
                >
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
              </v-list-item>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="item.link"
                >
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </div>
        </v-col>
        <v-col cols="12" sm="10">
          <router-view/>
        </v-col>
      </v-row>


    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data () {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city' , link:'/'},
        { title: 'Create Post', icon: 'mdi-post', link:'/create-post'},
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      mini: true,
    }
  },
};
</script>
