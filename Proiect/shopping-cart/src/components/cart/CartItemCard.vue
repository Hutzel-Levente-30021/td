<template>
    <div class="cart-item-card" v-if="product.quantity>0">
        <div class="header">
            <h3>{{ product.title }}</h3>
            <h4>În coș: {{ product.quantity }}</h4>
            <h4>Total: {{ item_cost.toFixed(2) }}</h4>
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
    background-color: white;
    box-shadow: 0 0 5px gray;
    border-radius: 5px;
    padding: 10px;
    text-align: left;

    .header{
        display: flex;
        justify-content: space-around;
    }
}
</style>