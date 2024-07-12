<script>

  export default {
    data() {
      return {
          
          
        }
    },

    methods() {
      // we shall add our functions here
    },

    computed(){
      //we use this when working with forms
    }
  }
</script>

<template>
  <!-- Carousel -->
  <v-card
    class="mx-auto"
    width="1000"
  >
    <v-carousel>
        <v-carousel-item
            src="../images/amir-hossein-bYqaOabPmTk-unsplash.jpg"
            cover
        ></v-carousel-item>

        <v-carousel-item
          src="../images/amir-hossein-zYfuVYqCdo4-unsplash.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="../images/curology-6CJg-fOTYs4-unsplash.jpg"
          cover
        ></v-carousel-item>
      </v-carousel>
  </v-card>
  <v-spacer></v-spacer>
  <!-- App Description -->
  <v-card align="center">
    <v-card-item>
      <v-card-title>Welcome to the Elegant Interiors</v-card-title>
      <v-card-subtitle>This is your one stop shop for beds,dining tables,book shelves, and so much more </v-card-subtitle>
    </v-card-item>
    <v-card-text>
        Welcome to Elegant Interiors, your one-stop destination for exquisite furniture that transforms spaces into stunning havens of comfort and style. Our curated collection features a diverse range of high-quality pieces, from timeless classics to modern masterpieces, designed to suit every taste and need. Whether you are looking to furnish your home, office, or any other space, Elegant Interiors promises unparalleled craftsmanship and exceptional customer service. Step into our store and discover the perfect furniture to elevate your living experience.
    </v-card-text>
  </v-card>

      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
  <h3 class="text-center">What our customers say</h3>
  <v-divider></v-divider>
  <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="Jeremy Doku"
        text="I loved the engagement from the sales person. very informative and quick delivery!"
        title="Good customer service"
      ></v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          quick delivery!
        </template>
        <template v-slot:subtitle>
          Pep Guardiola
        </template>
        <template v-slot:text>
          I recieved my order on time, will definitely be ordering again
        </template>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>Wide variety</v-card-title>
          <v-card-subtitle>Thiery Henry</v-card-subtitle>
        </v-card-item>
        <v-card-text>
          I love the diversity in the options, I got some furniture I haven't seen in normal shops.
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>