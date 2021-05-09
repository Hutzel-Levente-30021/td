<template>
    <div class="cart-item-card" v-if="product.quantity>0">
        <div class="header">
            <img :src="product.cover" />
            <div>
                <h3>{{ product.title }}</h3>
                <h4>În coș: {{ product.quantity }}</h4>
                <h4>Total: {{ item_cost.toFixed(2) }} lei</h4>
            </div>
        </div>

        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    props: ['product'],
    computed: {
        description(){
            return this.product.description
        },
        item_cost(){
            return this.product.price * this.product.quantity
        }
    }
}
</script>

<style lang="scss">
.cart-item-card{
    width: 90%;
    margin: 5px;
    background-color: darkgreen;
    box-shadow: 0 0 5px gray;
    border-radius: 5px;
    padding: 10px;
    text-align: left;

    img{
        width: 15%;
    }

    .header{
        display: flex;
        justify-content: space-around;
        color: white;
    }

    p{
        color: white;
    }
}
</style>