<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">How to use this site</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p>
          Select at least one of the filter properties in the FILTER section on the left, by activating the toggle besides the name and specifying a range with the slider. 
          Then click "RUN" to start the analysis. 
          After a few seconds you will see a 3D scatter plot whit up to 128 sounds that match your selection.
          The GROUP section allows you to filter the result by the file which contains the sound and is pretty useless.
          You can change the parameters to be used for the three axis in the AXIS section on the left.
        </p>
        <p>
          You can click on the nodes in the scatter plot to play the orignal audio. Depending on your browser you might hear some horrible clicks.
        </p>
        <p>Good luck</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>