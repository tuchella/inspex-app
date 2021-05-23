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
              <v-expansion-panel-header class="text-subtitle-1 text-uppercase">
                Filter
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-text-field
                  append-icon="mdi-magnify"
                  v-model="search"
                ></v-text-field>

                <FilterItem
                  v-for="(filter, index) in filters"
                  v-bind:color="color"
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
              <v-expansion-panel-header class="text-subtitle-1 text-uppercase">
                Groups
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <GroupItem
                  v-for="(group, index) in groups"
                  v-bind:key="index"
                  v-bind:display="true"
                  v-bind:group="group"
                  v-bind:color=color
                />
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel
              style="background-color: #181818"
              class="elevation-1"
            >
              <v-expansion-panel-header class="text-subtitle-1 text-uppercase">
                Axis
              </v-expansion-panel-header>
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
          <Graph v-if="hasSlices" v-bind:slices="slices" v-bind:color="color" v-bind:axis="axis" />
          <Readme v-else />
      </v-col>
    </v-row>
    <v-footer fixed inset>
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-btn :color="color" large block outlined @click="runAnalysis">
              Run
            </v-btn>
          </v-col>
          <v-col cols="1">
            <v-progress-circular
              v-if="loading"
              class="py-5"
              indeterminate
              :color=color
            ></v-progress-circular>
          </v-col>
          <v-col class="text-right py-4" v-if="time > 0">
            <span class="overline"> {{ slices.length }} results in {{time / 1000 }} s </span>
          </v-col>
          <v-col class="text-right py-4" v-else>
            <span class="overline"> Click RUN to start analysis </span>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-container>
</template>



<script>
import FilterItem from "@/components/FilterItem";
import Graph from '@/components/Graph';
import GroupItem from "@/components/GroupItem";
import Readme from '../components/Readme.vue';

import * as client from "@/utils/inspex-client";
import colors from "vuetify/lib/util/colors";
const colorVariants = [
    'lighten5',
    'lighten4',
    'lighten3',
    'lighten2',
    'lighten1',
    'base',
    'darken1',
    'darken2',
    'darken3',
    'darken4',
]

export default {
  components: {
    FilterItem,
    GroupItem,
    Graph,
    Readme,
  },
  props: ["color", "fileUrlMapper"],
  data: () => ({
    time: 0,
    search: "",
    loading: true,
    axis: {
      x: null,
      y: null,
      z: null,
    },
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
        items: [
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday",
          "sunday",
        ],
        selected: [],
        enabled: false,
      },
    ],
    slices: []
  }),
  mounted() {
    console.log(this.groups);
  },
  //watch: {
    // call again the method if the route changes
    //'$route': 'plot'
  //},
  created() {
    
    console.log(process.env);
    client.getFilters(this.apiUrl).then((response) => {
      const f = response.data.stat.map((s) => ({
        name: `${s.stat.type}.${s.stat.composition}`,
        min: Math.round(s.start),
        max: Math.round(s.end),
        value: [Math.round(s.start), Math.round(s.end)],
        enabled: false,
        unit: this.getUnit(s.stat),
      }));
      const g = response.data.meta.map((s) => ({
        name: s.key,
        items: s.values,
        overflow: s.values.length > 30 ? s.values.length - 30 : 0,
        selected: [],
        enabled: false,
      }));
      //.forEach(e => this.filters.push(e));
      this.$nextTick(() => {
        this.filters = f;
        this.groups = g;
        this.loading = false;
        this.axis.x = f[0].name;
        this.axis.y = f[f.length/2].name;
        this.axis.z = f[f.length - 1].name;
      });
    });
  },

  methods: {
    runAnalysis() {
      const request = {};
      request.stats = this.filters
        .filter((f) => f.enabled)
        .map((f) => ({
          stat: this.toStat(f.name),
          start: f.value[0],
          end: f.value[1],
        }));
      request.meta = this.groups
        .filter((g) => g.enabled)
        .map((g) => ({
          key: g.name,
          values: g.selected,
        }));
      request.x = this.toStat(this.axis.x);
      request.y = this.toStat(this.axis.y);
      request.z = this.toStat(this.axis.z);
      request.limit = 128;

      this.loading = true;
      const start = Date.now();
        client.runAnalysis(this.apiUrl, request).then((response) => {
          this.loading = false;
          this.time = Date.now() - start;
          this.slices = response.data;
          this.slices.forEach((s) => {
            s.file = this.fileUrlMapper(s);
          })
          
          const colorPack = colors[this.color]; 
          this.slices.forEach((s,i) => {
            const variant = Math.floor((i / this.slices.length) * colorVariants.length);
            s.color = colorPack[colorVariants[variant]];
          })
        });
    },
    getUnit(stat) {
      if (stat.type == 'duration') {
        return 'ms'
      } else if (stat.type == 'pitch' || stat.type == 'centroid' || stat.type == 'rolloff' || stat.type == 'spread') {
        return 'Hz'
      } else if (stat.type == 'peak' || stat.type == 'loudness') {
        return 'dB'
      } else {
        return ''
      }
    },
    toStat(name) {
      if (!name) {
        return {};
      }
      const names = name.split(".");
      return {
        type: names[0],
        composition: names[1],
      };
    },
    
  },
  computed: {
    hasSlices() {
      return this.slices.length > 0
    },
    apiUrl() {
      return process.env.VUE_APP_API_URL.replace("{{subdomain}}", this.$route.name)
    }
  }
};
</script>

<style>
</style>