<template>
    <div class="search">
    <h1>Search a Movie</h1>
    <input type='text' v-model='query' @keyup='getResult(query)' placeholder=" Enter movie name...">
    <hr>
    
    
    <!-- <p>{{result.title}}</p>
    <img v-bind:src="'http://image.tmdb.org/t/p/w500/' +    result.poster_path" width='100px'> -->
    <div class="columns is-multiline">
    <div class="column is-4" v-for='result in results' :key='result.id'>
  <div class="card">
    <div class="card-image">
      <figure v-if="result.poster_path" class="image is-4by3">
        <img :src="'http://image.tmdb.org/t/p/w500/'+result.poster_path" alt="movie poster image">
      </figure>
      <figure v-else class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="movie poster image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure v-if="result.poster_path" class="image is-48x48">
            <img :src="'http://image.tmdb.org/t/p/w500/'+result.poster_path" alt="Placeholder image">
          </figure>

          <figure v-else class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>

        </div>
        <div class="media-content">
          <p class="title is-4">{{result.title}}</p>
          <!-- <p class="subtitle is-6">@johnsmith</p> -->
        </div>
      </div>

      <div class="content"> {{result.overview}}
        <br><hr>
        <p><b>Popularity:</b> {{result.popularity}} | <b>Vote Count:</b> {{result.vote_count}}</p> 
        <p><b>Release date:</b> {{result.release_date}}</p>
               
        <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
      </div>
    </div>
  </div>
  </div>
</div>
   


  

  </div>
</template>

<script>
  import axios from "axios";
  //import MovieDetails from "./components/misc/MovieDetails.vue";

  export default {
    name: "Movies",
    data: function() {
      return {
        query: '',
      };
    },
    methods: {
      getResult(query) {
       const key = process.env.VUE_APP_MOVIES_KEY;
       //console.log(query)
       axios.get('https://api.themoviedb.org/3/search/movie?api_key='+key+'&query=' + query)
       .then(response => { 
          this.results = response.data.results 
          console.log(this.results);
        })
        .catch(error => {
            // handle error
            console.log(error);
        });
      }
    }
  };
</script>

<style scoped>
</style>
