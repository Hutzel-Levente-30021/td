<template>
    <div class="cart-item-card">
        <h3>Total: {{ cart_total.toFixed(2) }} lei</h3>

        <button class="view-product-button">Plătește cu card</button>
    </div>
</template>

<script>
export default {
    computed: {
        cart_total() {
            return this.$store.getters.cartTotal
        }
    }
}
</script>

<style lang="scss">
    h3{
        color: white;
    }
</style>