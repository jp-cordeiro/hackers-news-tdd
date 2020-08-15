import { shallowMount } from '@vue/test-utils';
import Item from '@/components/Item/Item.vue';
import ItemList from './ItemList.vue';

describe('ItemLis.vue', () => {
  test('renders an Item for each item in windom.items', () => {
    window.items = [{}, {}, {}];
    const wrapper = shallowMount(ItemList);
    const items = wrapper.findAllComponents(Item);
    expect(wrapper.findAllComponents(Item)).toHaveLength(window.items.length);
    items.wrappers.forEach((wrapper, index) => {
      expect(wrapper.props().item).toBe(window.items[index]);
    });
  });
});
