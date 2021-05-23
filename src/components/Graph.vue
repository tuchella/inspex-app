<template>
  <v-container>
    <v-row>
      <AudioPlayer v-bind:url="audioFile" v-bind:color="color" ref="audioPlayer" />
    </v-row>
    <v-row v-on:analysed="plot" class="pt-10">
      <div id="plot-container" style="height: 60vh; width: 100%"></div>
    </v-row>
    <v-row>
      <v-col cols="12" class="grey--text text--darken-3 text-caption">Hint: You can play the sounds by clicking on the nodes. Some of them might be to quiet or short to properly hear.</v-col>
    </v-row>
    <!--
    <v-row>
      <v-col cols="12" offset-sm="4" sm="4">
        <v-select :items="plotTypes" label="group" outlined 
          :color="color"></v-select>
      </v-col>
      <v-col cols="12" sm="4">
        <v-select
          :items="plotTypes"
          v-model="plotType"
          label="plot"
          :color="color"
          outlined
        ></v-select>
      </v-col>
    </v-row>
    -->
  </v-container>
</template>

<script>
import colors from "vuetify/lib/util/colors";
import AudioPlayer from "@/components/AudioPlayer.vue"

const layout = {
  paper_bgcolor: "#121212",
  plot_bgcolor: "#121212",
  margin: { t: 0 },
  scene: {
		xaxis:{title: 'X AXIS TITLE'},
		yaxis:{title: 'Y AXIS TITLE'},
		zaxis:{title: 'Z AXIS TITLE'},
		},
};

const settings = {
  displayModeBar: false,
  responsive: true,
};

export default {
  components: {
    AudioPlayer,
  },
  props: ["slices", "color", "axis"],
  data: () => ({
    plotType: "3d scatter",
    plotTypes: ["line", "2d scatter", "3d scatter", "bar", "pie"],
    audioFile: "",
  }),
  watch: {
    // we need to use function() { ... } syntax here b/c otherwhise watchers don't work
    slices: function () {
      this.plot();
    },
    plotType: function () {
      this.$nextTick(() => {
        this.plot();
      });
    },
  },
  mounted() {
    this.plot();
  },
  methods: {
    plot() {
      window.colors = colors;
      console.log("plotting");
      if (this.plotType == "3d scatter") {
        this.plot3d();
      } else {
        this.plotLine();
      }
    },
    plot3d() {
      layout.scene.xaxis.title = this.axis.x.toUpperCase();
      layout.scene.yaxis.title = this.axis.y.toUpperCase();
      layout.scene.zaxis.title = this.axis.z.toUpperCase();

      this.audioFile = "something.wav" + Math.random();
      

      const container = document.getElementById("plot-container");
      global.Plotly.newPlot(
        container,
        [
          {
            ids: this.slices.map((s) => s.id),
            x: this.slices.map((s) => s.x),
            y: this.slices.map((s) => s.y),
            z: this.slices.map((s) => s.z),
            text: this.slices.map(s => s.name),
            customdata: this.slices.map(s => s.file),
            hovertemplate: "%{text}<extra>%{x}/%{y}/%{z}</extra>",
            mode: "markers",
            marker: {
              size: 12,
              /*line: {
                color: 'white',
                width: 0.5,
              },*/
              color: this.slices.map(s => s.color),
              opacity: 0.8,
            },
            type: "scatter3d",
          },
        ],
        layout,
        settings
      );

      container.on('plotly_hover', function(data){
          console.log(data);
         // hovered = data.points[0];
      });
      container.on('plotly_click', this.plotClick);
    },
    plotClick(data) {
      this.audioFile = data.points[0].customdata;
      this.$refs.audioPlayer.play()
    },
    plotLine() {
      const container = document.getElementById("plot-container");
      global.Plotly.newPlot(
        container,
        [
          {
            x: this.slices.map((s) => s.x),
            y: this.slices.map((s) => s.y),
            line: {
              color: colors[this.color].base,
            },
          },
        ],
        layout,
        settings
      );
    },
  },
};
</script>

<style>
</style>