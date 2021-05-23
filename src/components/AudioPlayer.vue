<template>
  <v-container>
    <v-row>
      
    <v-spacer />
    <v-col cols=4>
      <v-slider
          style="max-width:200px"
          v-model="volume"
          :prepend-icon="volume > 0 ? 'mdi-volume-high' : 'mdi-volume-off'"
          :color="color"
        ></v-slider>
      <audio ref="audio-player" muted>
        <source src="/audio/able_maid-1601.mp3"  type="audio/mpeg">
      </audio>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['url', 'color'],
  data: () => ({
    volume: 100
  }),
  methods: {
    play: function() {
      this.$refs['audio-player'].play()
    }
  },
  watch: {
    volume: function() {
      this.$refs['audio-player'].volume = this.volume * 0.01
    },
    url: function() {
      const player = this.$refs['audio-player'];
      player.getElementsByTagName("source")[0].src = this.url;
      player.load();
      player.play();
    }
  }
}
</script>

<style>

</style>