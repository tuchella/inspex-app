<template>
  <v-container>
    <v-row>
      <v-col cols="12" offset-md="2" md="8">
        <p>
          InSpEx is a system developed as part of BA Thesis (unfortunately 
          written in german) in Sound Arts at  Bern University of the Arts 
          (HKB) in 2021 by Lars Fabian Tuchel. It aims to provide a collection 
          of tools to allow the interactive exploration of sound collections 
          based on the sound's specta.
        </p>
        <p>
          In addition to the web interface you are currently visiting the project 
          provides multiple patches written in Max/MSP and a REST interface to 
          run batch analysis of sound collections and access to the results of 
          this analysis.  
        </p>
        <p>
          This page provides access to the sound collections refrenced in the
          two use cases described in the thesis: 
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" offset-sm="0" sm="6" offset-md="1" md="5">
        <v-card>
          <v-img
            src="/inspex-lz.jpg"
            height="200px"
          ></v-img>
          <v-card-title> Lorenz Systems </v-card-title>

          <v-card-subtitle>
            <p>
            A collection of sounds consisting of sonification of Lorenz attractors. 
            Due to the chaotic "nature of the non-linear systems, they differ from 
            conventional oscillators (such as sine, square or sawtooth oscillators) 
            in that their spectrum cannot be derived intuitively from the paramters
            used in the equations.
            </p>
            <p>
              3000 systems were randomly genrated, analyzed with InSpEx and used in
              the fixed media piece <a href="https://hkb-soundarts.ch/a-suivre-38-galerie/the-mortifying-ordeal-of-approximating-order" target="_blank">The Mortifying Ordeal of Approximating Order</a>.
            </p>
          </v-card-subtitle>
        </v-card>
      </v-col>
      <!--<v-col cols="12" sm="4">
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>
          <v-card-title> Overflow </v-card-title>

          <v-card-subtitle>
            Nam liber tempor cum soluta nobis eleifend option congue nihil
            imperdiet doming id quod mazim placerat facer possim assum. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </v-card-subtitle>
        </v-card>
      </v-col>-->
      <v-col cols="12" sm="6" md="5">
        <v-card>
          <v-img
            src="/inspex-uri.jpg"
            height="200px"
          ></v-img>
          <v-card-title> Alpentöne </v-card-title>

          <v-card-subtitle>
            <p>
            Field recordings collected last year in the swiss canton Uri.
            The inital idea was to record sounds in diffrent locations and
            compare them. How does this specific place sound on a sunday vs.
            on a monday. How on a quiet corner of the city vs. the a steet
            on the main village square. How in the morning vs. in the night.    
            </p>
            <p>
              The answers are probably obious, but might be good to have some
              cold, hard numbers. In the end this dind't work out. But here
              are the sounds anyways. 
            </p>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" offset-md="2" md="8">
        <h2 class="overline text-center">Acknowledgements</h2>
        <p>
          The project makes heavy use of the fantastic <a href="https://www.flucoma.org/" target="_blank">FluCoMa</a> 
          library (even the name is not so subtly inspired by it). 
        </p>
        <p>
          The site is built with <a href="https://vuejs.org/" target="_blank">vue.js</a> and <a href="https://vuetifyjs.com/" target="_blank">vuetify</a>.
        </p>
        <p>
          kallisti
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    
  })
};
</script>

<style>
</style>