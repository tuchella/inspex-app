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
            <span style="color: #2196f3">yolo</span>.inspex
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
              @click="drawerTwo = !drawerTwo"
              v-text="item.name"
              :color="item.color"
            >
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text x-large @click="drawerTwo = !drawerTwo"> </v-btn>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn plain to="/"> Explore </v-btn>

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
      <!-- <div class="d-flex flex-column flex-grow-1 flex-shrink-1" style="height:100%; overflow:auto;">
        <div class="flex-grow-1 flex-shrink-1" style="background-color:red">
        <v-container>
        <v-row>
          <v-col cols="4" class="color-primary">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   

Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   

Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.   

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.   

At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.   

Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          </v-col>
          <v-col>
            right
            is all right<br>
            assad
            <br>
            oioi
          </v-col>
        </v-row>
        </v-container>
      
      </div>
      <div style="background-color:blue; height: 100px">
        footer<br>
        foot<br>
        er
      </div>
      </div> -->
     <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
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
     
    };
  },
};
</script>
