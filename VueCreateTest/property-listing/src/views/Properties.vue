<template>
  <div class="container">
    <div class="row">
      <!-- <div class='products-container'> -->
      <div v-for="property of properties" :key="property.id" class="card m-3 p-3" style="width:18rem">
        <img :src="property.image" alt="" class="card-img-top"/>
        <!-- <div class="col-md-3"> -->
          <!-- <div class="card" > -->
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">{{ property.address.street }}</p>
              <router-link :to="{ name: 'singleProperty', params: { id: property.id } }">
                <a href="#" class="btn btn-primary">Property Id?</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
    <!-- </div> -->
  <!-- </div> -->
</template>
<script>
export default {
  data() {
    return {
      properties: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/properties")
      .then((res) => res.json())
      .then((data) => (this.properties = data));
  },
};
</script>
<style scoped>
    .card{
        background-color: rgb(44, 43, 43);
        color: white;
        border-radius: 30px;
    }
    .card-img-top{
        height: 200px;
        border-radius: 30px ;
    }
</style>