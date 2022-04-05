<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>
        <hr>
        <text-tags :arrayTags="arrayTags" />
        <hr>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Test Tags
        </h2>

        <v-row justify="center">   
          <v-text-field label="Type tags separated by space" v-model="tagType" @keydown="createArrayTags"></v-text-field>
          
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import TextTags from "./textTags";
  
  export default {
    components:{
      TextTags 
    },
    name: 'HelloWorld',
    data: () => ({
      // привет, как дела, что нового, от, гидропоники, слышно, mdi-map-marker-star, что нам еще, нужно? 
      arrayTags: ['mdi-star-outline 4,3','Фридланские ворота', '1,2 км от вас'],
      icon: 'mdi-star-outline',
      tagType: ''

    }),
    methods:{
      createArrayTags(){
        const newTags = this.tagType.split(',')
        if(newTags.length){
          if(newTags.length)
            this.arrayTags = newTags
        }
      }
    }
  }
</script>
