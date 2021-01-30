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
      <v-range-slider hide-details="true" :max="filter.max" :min="filter.min" v-model="filter.value" @change="logValue"
        :thumb-label=true :disabled="!filter.enabled" :color="color"></v-range-slider>

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
    data: () => ({
      show: false
    }),
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
            console.log(this.filter.value)
        }
    }
  }
</script>

<style>
</style>