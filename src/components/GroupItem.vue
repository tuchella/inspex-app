<template>
  <v-card class="my-2 elevation-2" v-if="display">
    <v-card-title class="py-0">
      <v-switch
        dense
        inset
        :label="group.name"
        v-model="group.enabled"
        @change="toggleEnable"
      ></v-switch>
      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-title>
    <v-expand-transition>
      <v-card-text v-show="show">
        <v-btn text @click="toggleSelection" class="justify-start pl-0 pr-4" :ripple="false"
          ><v-icon
            class="pr-4"
            :color="group.selected.length > 0 ? 'primary' : ''"
          >
            {{ icon }} </v-icon
          >Select all</v-btn
        >
        <v-chip-group
          v-model="group.selected"
          column
          multiple
          active-class="primary text--primary"
          @change="logValue"
        >
          <v-chip
            v-for="item in group.items"
            v-bind:key="item"
            v-bind:value="item"
            filter
            outlined
          >
            {{ item }}
          </v-chip>
        </v-chip-group>
        {{ group.overflow > 0 ? `...and ${group.overflow} more` : "" }}
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "GroupItem",
  data: () => ({
    show: false,
  }),
  props: ["group", "display"],
  computed: {
    allSelected() {
      return this.group.selected.length === this.group.items.length;
    },
    someSelected() {
      return this.group.selected.length > 0 && !this.allSelected;
    },
    icon() {
      if (this.allSelected) return "mdi-close-box";
      if (this.someSelected) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
    },
  },

  methods: {
    toggleEnable() {
      if (this.group.enabled) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    toggleSelection() {
      this.$nextTick(() => {
        if (this.allSelected) {
          this.group.selected = [];
        } else {
          this.group.selected = this.group.items.slice();
        }
        this.logValue();
      });
    },
    logValue() {
      console.log(this.group.selected);
    },
  },
};
</script>

<style>
</style>