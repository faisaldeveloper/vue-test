<template>
<div class="container">
        <div class="columns">
            <div class="column is-12">
                <div class="tabs help-tabs">
                    <ul>
                        <li :class="[ tab === 'home' ? 'is-active' : '']"><a @click="tab='home'">Home</a>
                        </li>
                        <li :class="[ tab === 'products' ? 'is-active' : '']"><a @click="tab='products'">Products</a></li>
                        <li :class="[ tab === 'about-us' ? 'is-active' : '']"><a @click="tab='about-us'">About Us</a></li>
                        <li :class="[ tab === 'contact-us' ? 'is-active' : '']"><a @click="tab='contact-us'">Contact Us</a></li>
                    </ul>
                </div>

                <div class="box help-content">
                    <code v-if="tab ==='home'">
                        <p>This is {{ mytab.home }} tab.</p>
                    </code>
                    <code v-if="tab ==='products'">
                        <p>This is {{ mytab.products }} tab.</p>
                    </code>
                    <code v-if="tab ==='about-us'">
                        <p>This is {{ mytab.aboutus }} tab.</p>
                    </code>
                    <code v-if="tab ==='contact-us'">
                    	<p>This is {{ mytab.contactus }} tab.</p>
                	</code>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import tab from "./tab.vue";

export default {
  name: "tabs", 
  data() {
     return {
        mytab: {
            home: 'home page',
            products: 'products page',
            aboutus: 'about us',
            contactus: 'contact us',
        },
        tab: 'home',
     }
   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.tab-details{
	margin-left: 10px;
}
</style>