import { shallowMount } from '@vue/test-utils';
import Item from './Item.vue';

describe('Item.vue', () => {
  test('renders item.url', () => {
    const item = {
      url: 10,
    };
    const wrapper = shallowMount(Item, {
      propsData: {
        item,
      },
    });
    expect(wrapper.text()).toContain(item.url);
  });

  test('renders a link to the item.url item.title as text', () => {
    const item = {
      url: 'http://www.googl.com',
      title: 'some title',
    };
    const wrapper = shallowMount(Item, {
      propsData: { item },
    });
    const a = wrapper.find('a');
    expect(a.text()).toBe(item.title);
    expect(a.attributes().href).toBe(item.url);
  });
});
