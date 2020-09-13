import { shallowMount } from '@vue/test-utils';
import Item from '@/components/Item/Item.vue';
import ItemList from './ItemList.vue';

jest.mock('../api/__mocks__/api.js');

import flushPromises from 'flush-promises';
import { fetchListData } from '../api/__mocks__/api.js';

describe('ItemLis.vue', () => {
  let wrapper;
  let $bar;

  beforeEach(() => {
    $bar = {
      start: jest.fn(),
      finish: jest.fn(),
    };

    wrapper = shallowMount(ItemList, {
      mocks: { $bar },
    });
  });

  test('renders an Item with data for each item', async () => {
    expect.assertions(4);

    const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
    fetchListData.mockResolvedValueOnce(items);

    await flushPromises();

    const Items = wrapper.findAllComponents(Item);
    expect(Items).toHaveLength(items.length);

    Items.wrappers.forEach((wrapper, index) => {
      expect(wrapper.vm.item).toBe(items[index]);
    });
  });

  test('calls $bar start on load', async () => {
    await wrapper.vm.$nextTick();

    expect($bar.start).toHaveBeenCalledTimes(1);
  });
});
