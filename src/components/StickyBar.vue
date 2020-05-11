<template>
    <div class="stickybar">${{total}} left</div>
</template>

<script>
export default {
  name: 'StickyBar',
  props: {
    msg: String,
  },
  computed: {
    total() {
      return this.formatPrice(this.$store.getters.cartTotal);
    },
  },
  methods: {
    formatPrice(value) {
      const val = (value).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.stickybar {
    color: $secondary-font-color;
    background-color: $highlight-green;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    top: 0px;
    position: sticky;
    padding: 20px;
    margin: 10px 0px;
}
</style>
