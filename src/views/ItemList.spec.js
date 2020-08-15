import { shallowMount } from '@vue/test-utils';
import Item from '@/components/Item/Item.vue';
import ItemList from './ItemList.vue';

describe('ItemLis.vue', () => {
  test('renders an Item for each item in windom.items', () => {
    window.items = [{}, {}, {}];
    const wrapper = shallowMount(ItemList);
    expect(wrapper.findAllComponents(Item)).toHaveLength(window.items.length);
  });
});
