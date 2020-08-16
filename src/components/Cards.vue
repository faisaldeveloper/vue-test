<template>
  <b-container>
    <div v-if="meals.length">
      <b-row>
        <div v-bind:key="data.index" v-for="data in meals">
          <b-col l="4">
            <b-card
              v-bind:title="data.strCategory"
              v-bind:img-src="data.strCategoryThumb"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
              <b-card-text>{{ `${data.strCategoryDescription.slice(0,100)}...` }}</b-card-text>
              <b-button href="#" variant="primary"
				@click="[$bvModal.show('bv-modal-example'), counter++]"
              >View food</b-button>
            </b-card>
          </b-col>

		   

        </div>
      </b-row>
    </div>
    <div v-else>
      <h5>No meals available yet 😢</h5>
    </div>

 <FoodModal :value="fooddata" />

<p> {{ counter }}</p>
  </b-container>
</template>

<script>
import axios from "axios";
import FoodModal from "./FoodModal.vue";

export default {
	name: "Cards",
	fooddata: String,
  	components: {
    	FoodModal,
  	},
  data() {
    return {
    	counter: 0,
      meals: []
    };
  },
  mounted() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => {
        this.meals = response.data.categories;
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {
  	fooddata(){
  		return 'hurraaa'
  	}
  }
};
</script>