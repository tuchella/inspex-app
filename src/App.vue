<template>
  <v-app>
    <v-app-bar app color="gray" dark flat cl>
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <!--       <v-select
        :items="items"
        filled
        color="blue"
        dense
        hide-details="true"
      ></v-select> -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn x-large text dark v-bind="attrs" v-on="on">
            <span :style="'color:' + color">{{ selected.name }}</span
            >.inspex
          </v-btn>
        </template>
        <v-list class="pa-0">
          <v-list-item class="pa-0" v-for="(item, index) in items" :key="index">
            <v-btn
              text
              class="justify-start"
              block
              plain
              large
              @click="
                drawerTwo = !drawerTwo;
                selected = item;
              "
              v-text="item.name"
              :color="item.color"
              :to="item.name"
            >
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text x-large @click="drawerTwo = !drawerTwo"> </v-btn>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="item in items"
          v-bind:key="item.name"
          text
          class="justify-start"
          plain
          @click="selected = item;"
          v-text="item.name"
          :to="item.name"
        >
        </v-btn>

        <v-btn plain to="/about"> About </v-btn>

        <v-btn icon href="https://github.com/tuchella" target="_blank">
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute top temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="items"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import colors from "vuetify/lib/util/colors";

export default {
  name: "App",
  data: () => ({
    drawer: false,
    drawerTwo: false,
    items: [
      {
        name: "lorenz",
        color: "blue",
      },
      {
        name: "overflow",
        color: "red",
      },
      {
        name: "uri",
        color: "yellow",
      },
    ],
    selected: {
      name: "lorenz",
      color: "blue",
    },
  }),
  computed: {
    color: function () {
      return colors[this.selected.color].base;
    },
  },
};
</script>
