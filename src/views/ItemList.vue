<template>
  <div class="item-list">
    <Item v-for="item in displayItems" :key="item.id" />
  </div>
</template>

<script>
import Item from '@/components/Item/Item.vue';

export default {
  components: {
    Item,
  },
  data() {
    return {
      displayItems: window.items,
    };
  },
};
</script>
