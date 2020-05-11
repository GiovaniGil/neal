<template>
<div class="item">
    <img src="https://neal.fun/spend/minified/bigmac.jpg" class="">
    <div class="item__label">{{item.name}}</div>
    <div class="item__price">${{item.price}}</div>
    <div class="item__controls">
        <button :disabled="!item.quantity"
            :class="[item.quantity  ?
            'item__button item__button--sell' : 'item__button item__button--disabled']"
            @click="removeItem(item)">Sell</button>
        <input pattern="\d*" type="number" id="Big Mac" class="item__input" v-model="item.quantity">
        <button class="item__button item__button--buy"
            @click="addItem(item)"
            @change="addItem(item)">Buy</button>
    </div>
</div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: Object,
  },
  data: () => ({
  }),
  methods: {
    addItem(item) {
      this.item.quantity = Number(this.item.quantity) + 1;
      this.$store.dispatch('addItem', item);
    },
    removeItem(item) {
      this.item.quantity = Number(this.item.quantity) - 1;
      this.$store.dispatch('removeItem', item);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item {
    background-color: $content-background-color;
    max-width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 20px 15px;

    &__controls {
        font-size: 20px;
        font-weight: bold;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 25px;
        gap: 10px 10px;
    }

    &__label {
        font-size: 22px;
        font-weight: bold;
    }

    &__price {
        font-size: 20px;
        color: $highlight-green;
    }

    &__image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: 110px;
        object-fit: contain;
        padding: 15px 10px 10px;
    }
    &__input {
        font-size: 16px;
        color: $primary-font-color;
        -webkit-appearance: none;
        padding: 9px 12px;
        border-radius: 3px;
        border-width: 1px;
        border-style: solid;
        border-color: $input-border-color;
        border-image: initial;
        max-width: 100px;
        text-align: center;
        -webkit-appearance: none;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
    &__button {
        font-size: 16px;
        cursor: pointer;
        text-align: center;
        color: $secondary-font-color;
        font-weight: bold;
        user-select: none;
        touch-action: manipulation;
        padding: 9px 12px;
        border-radius: 3px;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
        &--sell {
            background-color: $button-danger;
        }
        &--buy {
            background-color: $button-success;
        }
        &--disabled {
            color: $primary-font-color;
            cursor: auto;
            background-color: $button-disabled !important;
        }
    }
}
</style>
