<template>
    <div class="items">
        <div v-for="item in items" v-bind:key="item.id">
            <Item :item="item" />
        </div>
    </div>
</template>

<script>
import Item from '@/components/Item.vue';
import ItemsService from '@/domain/items/ItemsService';

export default {
  name: 'Items',
  components: {
    Item,
  },
  props: {
    msg: String,
  },
  created() {
    const itemsService = new ItemsService();
    itemsService.lista().then((res) => {
      this.items = res;
    }, err => console.log(err));
  },
  data: () => ({
    items: [],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media only screen and (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
    }
    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
    gap: 10px 10px;
 }
</style>
