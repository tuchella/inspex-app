<template>
  <v-container>
    <v-row v-on:analysed="plot">
      <div id="plot-container" style="height: 60vh; width: 100%"></div>
    </v-row>
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
  </v-container>
</template>

<script>
import colors from "vuetify/lib/util/colors";

const layout = {
  paper_bgcolor: "#121212",
  plot_bgcolor: "#121212",
  margin: { t: 0 },
};

const settings = {
  displayModeBar: false,
  responsive: true,
};

export default {
  props: ["slices", "color"],
  data: () => ({
    plotType: "line",
    plotTypes: ["line", "2d scatter", "3d scatter", "bar", "pie"],
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
      const container = document.getElementById("plot-container");
      global.Plotly.newPlot(
        container,
        [
          {
            x: this.slices.map((s) => s.x),
            y: this.slices.map((s) => s.y),
            z: this.slices.map((s) => s.z),
            text: this.slices.map(s => s.name),
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
      container.on('plotly_click', function(data){
          console.log(data);
      });
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