<template>
  <v-card class="my-2 elevation-2" v-if="display">
    <v-card-title class="py-0">
      <v-switch
        dense
        inset
        :color="color"
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
        <v-btn
          text
          @click="toggleSelection"
          v-if="group.items.length < 10"
          class="justify-start pl-0 pr-4"
          :ripple="false"
          ><v-icon class="pr-4" :color="group.selected.length > 0 ? color : ''">
            {{ icon }} </v-icon
          >Select all</v-btn
        >
        <v-chip-group
          v-model="group.selected"
          column
          multiple
          v-if="group.items.length < 10"
          :color="color"
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
        <v-autocomplete
          v-else
          v-model="group.selected"
          :items="group.items"
          auto-select-first
          :color="color"
          chips
          filled
          deletable-chips
          multiple
          small-chips
        >
          <template v-slot:selection="data">
            <v-chip
              v-bind="data.attrs"
              :input-value="data.selected"
              close
              @click:close="remove(data.item)"
            >
              <span style="width: 100%; overflow: hidden; padding-rigth: 10px">
                {{ data.item }}
              </span>
            </v-chip>
          </template>
        </v-autocomplete>
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
  props: ["group", "display", "color"],
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
    remove(item) {
      const index = this.group.selected.indexOf(item);
      if (index >= 0) this.group.selected.splice(index, 1);
    },
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