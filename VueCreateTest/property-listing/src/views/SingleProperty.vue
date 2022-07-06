<template>
  <div class="single-Property">
    <h2>Property {{ id }} id code</h2>
    <!-- <img :src="" alt=""> -->
    <h1>This is an Single Property page</h1>
    <div class="card" style="width: 18rem">
      <img :src="property.image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{property.address.street}}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      property: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/properties/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.property = data));
  },
};
</script>