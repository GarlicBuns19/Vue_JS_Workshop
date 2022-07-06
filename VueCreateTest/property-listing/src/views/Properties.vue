<template>
    <div class='products-container'>
        <div v-for="property of properties" :key="property.id" class:card>
        <router-link :to="{name: 'singleProperty', params:{id: property.id}}">
                <img :src="property.image" alt="" width="200" height="100">
        </router-link>
            <div>{{property.address.street}}</div>
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
        fetch('http://localhost:3000/properties')
        .then(res => res.json())
        .then(data => this.properties = data)
    }
}
</script>