<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <div>
          <v-expansion-panels>
            <v-expansion-panel
              style="background-color: #181818"
              class="elevation-1"
            >
              <v-expansion-panel-header class="text-subtitle-1 text-uppercase"> Filter </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-text-field
                  append-icon="mdi-magnify"
                  v-model="search"
                ></v-text-field>

                <FilterItem
                  v-for="(filter, index) in filters"
                  v-bind:key="index"
                  v-bind:display="filter.name.indexOf(search) >= 0"
                  v-bind:filter="filter"
                />
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel
              style="background-color: #181818"
              class="elevation-1"
            >
              <v-expansion-panel-header class="text-subtitle-1 text-uppercase"> Groups </v-expansion-panel-header>
              <v-expansion-panel-content>
                <GroupItem
                  v-for="(group, index) in groups"
                  v-bind:key="index"
                  v-bind:display="true"
                  v-bind:group="group"
                />
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel
              style="background-color: #181818"
              class="elevation-1"
            >
              <v-expansion-panel-header class="text-subtitle-1 text-uppercase"> Axis </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-select
                  :items="filters"
                  v-model="axis.x"
                  label="x-axis"
                  item-text="name"
                  item-value="name"
                  outlined
                ></v-select>
                <v-select
                  :items="filters"
                  v-model="axis.y"
                  label="y-axis"
                  item-text="name"
                  item-value="name"
                  outlined
                ></v-select>
                <v-select
                  :items="filters"
                  v-model="axis.z"
                  label="z-axis"
                  item-text="name"
                  item-value="name"
                  outlined
                ></v-select>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-col>
      <v-col cols="12" md="8">
        <v-container>
          <v-row>
            <div id="tester" style="height: 60vh; width:100%"></div>
          </v-row>
          <v-row>
            <v-col cols="12" offset-sm="4" sm="4">
              <v-select :items="plotTypes" label="group" outlined></v-select>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select :items="plotTypes" label="plot" outlined></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-footer fixed inset>
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-btn color="primary" large block outlined @click="runAnalysis"
              >Run</v-btn
            >
          </v-col>
          <v-col cols="2">
            <v-progress-circular
              v-if="loading"
              class="py-6"
              indeterminate
              color="primary"
            ></v-progress-circular>
          </v-col>
          <v-col class="text-right py-6">
            <span class="overline"> 5049 results in 54.43 s </span>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-container>
</template>



<script>
import FilterItem from "@/components/FilterItem";
import GroupItem from "@/components/GroupItem";
import colors from "vuetify/lib/util/colors";
import Vue from 'vue';

export default {
  components: {
    FilterItem,
    GroupItem,
  },
  data: () => ({
    search: "",
    loading: true,
    axis: {
      x: null,
      y: null,
      z: null
    },
    plotTypes: ["line", "2d scatter", "3d scatter", "bar", "pie"],
     filters: [
       /*  {
          name: "pitch.median",
          min: -50,
          max: 50,
          value: [-50,40],
          enabled: false,
        },
        {
          name: "pitch.stddev",
          min: -30,
          max: 190,
          value: [-30.5,150.3],
          enabled: true,
        },
        {
          name: "rolloff.stddev",
          min: -30,
          max: 190,
          value: [-30.5,150.3],
          enabled: true,
        },
        {
          name: "rolloff.stddev",
          min: -30,
          max: 190,
          value: [-30.5,150.3],
          enabled: true,
        },
        {
          name: "rolloff.stddev",
          min: -30,
          max: 190,
          value: [-30.5,150.3],
          enabled: true,
        },
        {
          name: "rolloff.stddev",
          min: -30,
          max: 190,
          value: [-30.5,150.3],
          enabled: true,
        },
        {
          name: "rolloff.stddev",
          min: -30,
          max: 190,
          value: [-30.5,150.3],
          enabled: true,
        },
        {
          name: "rolloff.stddev",
          min: -30,
          max: 190,
          value: [-30.5,150.3],
          enabled: true,
        },
        {
          name: "rolloff.stddev",
          min: -30,
          max: 190,
          value: [-30.5,150.3],
          enabled: true,
        },
        {
          name: "rolloff.stddev",
          min: -30,
          max: 190,
          value: [-30.5,150.3],
          enabled: true,
        },
        {
          name: "rolloff.stddev",
          min: -30,
          max: 190,
          value: [-30.5,150.3],
          enabled: true,
        }, */
      ],
      groups: [
        {
          name: "author",
          items: ["john", "jack", "jane", "joe"],
          selected: [],
          enabled: false,
        },
        {
          name: "day",
          items: [ "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday" ],
          selected: [],
          enabled: false,
        },
      ],
  }),
  mounted() {
    this.plot();
    console.log(this.groups);
  },
  created() {
    Vue.axios.get("http://api.inspex.com/filters").then((response) => {
      const f = response.data.stat.map(s => ({
          name: `${s.stat.type}.${s.stat.composition}`,
          min: Math.round(s.start),
          max: Math.round(s.end),
          value: [Math.round(s.start),Math.round(s.end)],
          enabled: false
        }
      ));
      const g = response.data.meta.map(s => ({
          name: s.key,
          items: s.values.slice(0,30),
          overflow: s.values.length > 30 ? s.values.length - 30 : 0,
          selected: [],
          enabled: false,
        }
      ));
      //.forEach(e => this.filters.push(e));
      this.$nextTick(() => {
        this.filters = f;
        this.groups = g;
        this.loading = false;
      });
      console.log(f);
    })
    
  },


  methods: {
    runAnalysis() {
      const request = {}
      request.stats = this.filters.filter(f => f.enabled).map(f => ({
        stat: this.toStat(f.name),
        start: f.value[0],
        end: f.value[1]
      }));
      request.meta = this.groups.filter(g => g.enabled).map(g => ({
        key: g.name,
        values: g.selected
      }));
      request.x = this.toStat(this.axis.x);
      request.y = this.toStat(this.axis.y);
      request.z = this.toStat(this.axis.z);
      request.limit = 512;

      this.loading = true;
      Vue.axios.post("http://api.inspex.com/analysis", request).then((response) => {
        this.loading = false;
        console.log(response);
      });
    },
    toStat(name) {
      if (!name) {
        return {}
      }
      const names = name.split('.');
      return {
        type: names[0],
        composition: names[1]
      }
    },
    plot() {
      let TESTER = document.getElementById("tester");
      global.Plotly.newPlot(
        TESTER,
        [
          {
            x: [1, 2, 3, 4, 5],
            y: [1, 2, 4, 8, 16],
          },
        ],
        {
          paper_bgcolor: "#121212",
          plot_bgcolor: "#121212",
          margin: { t: 0 },
        },
        {
          displayModeBar: false,
          responsive: true,
        }
      );
      console.log(colors);
    },
  },
};
</script>

<style>
</style>