<template>
   <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <!-- <b-container> -->

          <b-navbar-brand href="#">Vue Misc</b-navbar-brand>
            <!-- <b-navbar-brand href="#orders">Orders</b-navbar-brand> -->
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">
            <router-link class="navbar-brand" to="/">Mealzers</router-link>
              </b-nav-item>
              <b-nav-item href="#">
            <router-link class="navbar-brand" to="/order">Orders</router-link> 
              </b-nav-item>
              <b-nav-item href="#">
            <router-link class="navbar-brand" to="/todo">Todo</router-link> 
              </b-nav-item>
              <!-- <b-nav-item href="#"> 
            <router-link class="navbar-brand" to="/maps">Maps</router-link>  
              </b-nav-item> -->
              <b-nav-item href="#">
            <router-link class="navbar-brand" to="/movies">Movies</router-link>
              </b-nav-item>
              <b-nav-item href="#">
            <router-link class="navbar-brand" to="/bulma">Bulma CSS</router-link>
              </b-nav-item>
            </b-navbar-nav>
            </b-collapse>
            
            <b-collapse id="nav-collapse" is-nav>
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-nav-form>
                  <b-form-input 
                    size="sm" 
                    class="mr-sm-2" 
                    placeholder="Search for a meal"
                    v-model="meal"
                    ></b-form-input>
                  <b-button 
                    size="sm" 
                    class="my-2 my-sm-0" 
                    type="submit" 
                    @click.prevent="getMeal"
                    >Search</b-button>
                </b-nav-form>
                <b-nav-item-dropdown right>
                  <!-- Using 'button-content' slot -->
                  <template slot="button-content"><em>User</em></template>
                  <b-dropdown-item href="#">Profile</b-dropdown-item>
                  <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
          <!-- </b-container> -->
      </b-navbar>

    </div>  
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  },
  data() {
    return {
      meal: ''
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>