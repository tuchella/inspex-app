<template>
  <v-card class="my-2 elevation-2" v-if="display">
    <v-card-title class="py-0">
      <v-switch dense inset :label="filter.name" v-model="filter.enabled" @change="toggleEnable" :color=color></v-switch>
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-title>
    <v-expand-transition>
    <v-card-text v-show="show">
      <v-range-slider hide-details="true" :min="0" :max="1000" v-model="val" @change="logValue"
        :thumb-label=true :disabled="!filter.enabled" :color="color"  >
        <template v-slot:thumb-label="props">
          {{ format(scale(props.value)) }}
        </template>
      </v-range-slider>

      <div>
        <span class="text-caption">{{ filter.min }}</span>

        <span class="float-right text-caption">{{ filter.max }}</span>
      </div>
    </v-card-text>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    name: "FilterItem",
    data: function() {
      return {
        show: false,
        val: [0, 1000]
      }
    },
    props: ["filter", "display", "color"],
    methods: {
        toggleEnable() {
            if (this.filter.enabled) {
                this.show = true;
            } else {
                this.show = false;
            }
        },
        logValue() {
            this.filter.value = this.val.map(this.scale)
            console.log(this.filter.value)
        },
        scale(v) {
          let scaled = (v * 0.001);
          if (this.filter.name.startsWith("pitch") || this.filter.name.startsWith("centroid")) {
            scaled = Math.pow((v * 0.001), 3.4)
          }
          return this.filter.min + (scaled * (this.filter.max - this.filter.min))
        },
        format(num) {
          let s = ""
          if (this.filter.max - this.filter.min > 1000) {
            s += num.toFixed(0);
          } else {
            s += +(Math.round(num + "e+2")  + "e-2");
          }
          return s + " " + this.filter.unit;
        }
    },
    computed: {
      
    }
  }
</script>

<style>
  .v-application .v-slider__thumb-label {
    background-color: transparent !important;
    text-shadow: 1px 1px 5px black;
    white-space: nowrap;
  }
</style>