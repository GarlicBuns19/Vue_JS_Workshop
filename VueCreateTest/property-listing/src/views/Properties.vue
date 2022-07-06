<template>
    <div class='products-container'>
            <div>{{ $route.params.id }}</div>
        <div v-for="property of properties" :key="property" class:card>
        <img :src="property.image" alt="" width="200" height="100">

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
        properties: []
        }
    },
    mounted(){
        fetch('http://localhost:3000/posts/properties')
        .then(res => res.json())
        .then(data => this.properties = data)
    }
}
</script>