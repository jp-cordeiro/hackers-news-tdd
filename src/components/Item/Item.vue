<template>
  <li>
    <a :href="item.url">{{item.title}}</a>
    {{item.url}}
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: ['item'],
};
</script>
