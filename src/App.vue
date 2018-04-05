<template lang="pug">
 #app
  img(src='https://jaacu.github.io/platzimusic-vuejs/dist/logo.png')
  h1 PlatziMusic
  select(v-model="selectedCountry")
    option(v-for="country in countries" v-bind:value="country.value") {{ country.name }}
  spinner(v-show="loading")
  ul
    artist(v-for="artist in artists" :artist="artist" :key="artist.mbid")
  

</template>

<script>
import Artist from './components/Artist.vue'
import Spinner from './components/Spinner.vue'
import getArtists from './api'

export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries: [
        {name: 'Argentina' , value: 'argentina'},
        {name: 'Espana' , value: 'spain'},
        {name: 'Colombia' , value: 'colombia'},
        {name: 'Venezuela' , value: 'venezuela'}
      ],
      selectedCountry: 'venezuela',
      loading: true
    }
  },
  components: {
    Artist,
    Spinner
  },
  methods: {
    refreshArtists(country){
      const self = this
      this.loading = true
      this.artists= []
    getArtists(country)
      .then(function (artists) {
        self.loading=false;
        self.artists = artists
      })

    }
  },
  mounted() {
    this.refreshArtists(this.selectedCountry)
  },
  watch: {
    selectedCountry: function() {
      this.refreshArtists(this.selectedCountry)
    }
  }
}
</script>

<style lang="stylus">
#app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px

h1, h2
    font-weight normal

ul
    list-style-type none
    padding 0

li
    display inline-block
    margin 0 10px

a
    color #42b983
</style>
