import { shallowMount } from '@vue/test-utils';
import Item from '@/components/Item/Item.vue';
import ItemList from './ItemList.vue';

describe('ItemLis.vue', () => {
  let wrapper;
  let $bar;

  beforeEach(() => {
    $bar = {
      start: jest.fn(),
      finish: () => {},
    };

    wrapper = shallowMount(ItemList, {
      mocks: { $bar },
    });
  });
  test('renders an Item for each item in windom.items', async () => {
    window.items = [{}, {}, {}];
    wrapper = shallowMount(ItemList, {
      mocks: { $bar },
    });
    const items = wrapper.findAllComponents(Item);
    expect(wrapper.findAllComponents(Item)).toHaveLength(window.items.length);
    items.wrappers.forEach((wrapper, index) => {
      expect(wrapper.props().item).toBe(window.items[index]);
    });
  });

  test('calls $bar start on load', async () => {
    await wrapper.vm.$nextTick();

    expect($bar.start).toHaveBeenCalledTimes(1);
  });
});
