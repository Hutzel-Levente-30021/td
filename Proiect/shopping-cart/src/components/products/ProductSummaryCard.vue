<template>
    <div class="card">
        <img :src=product.cover />
        <h3>{{ product.title }}</h3>

        <h5 class="price">Preț: {{ product.price.toFixed(2) }} lei</h5>
        <p class="description">{{ product.description }}</p>
        <p class="text-muted">Gen: {{ product.genre }}</p>
        <button class="view-product-button" @click="$emit('view-product', product)">Detalii</button>
    </div>
</template>

<script>
    export default {
        props: ['product'],
        computed: {
            description(){
                return this.product.description.substring(0, 150);
            }
        }
    }
</script>

<style lang="scss">
    .card{
        width: 80%;
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
        background-color: darkgreen;
        box-shadow: 0 0 5px gray;

        img{
            width: 65%;
        }

        h5.price{
            color: lightgray;
        }

        p.description{
            font-size: .85rem;
            color: white;
        }

        p.text-muted{
            color: lightgray;
        }
    }

    button.view-product-button{
        padding: 10px;
        background-color: rgb(79, 160, 187);
        border: none;
        color: white;
        font-weight: bold;
        font-size: 1.15rem;
        border-radius: 5px;
        cursor: pointer;
    }

    @media (min-width: 500px) {
        .card{
            width: 350px;
            margin: 10px;
        }
    }
</style>