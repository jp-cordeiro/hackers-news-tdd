import { shallowMount } from '@vue/test-utils';
import ProgressBar from './ProgressBar.vue';

describe('ProgressBar.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(ProgressBar);
  });

  test('is hidden on initial render', () => {
    expect(wrapper.classes()).toContain('hidden');
  });

  test('initializes with 0% width', () => {
    expect(wrapper.element.style.width).toBe('0%');
  });

  test('displays the bar when start is called', async () => {
    expect(wrapper.classes()).toContain('hidden');

    wrapper.vm.start();
    await wrapper.vm.$nextTick();

    expect(wrapper.classes()).not.toContain('hidden');
  });

  test('sets the bar to 100% width when finish is called', async () => {
    wrapper.vm.start();
    await wrapper.vm.$nextTick();

    wrapper.vm.finish();
    await wrapper.vm.$nextTick();

    expect(wrapper.element.style.width).toBe('100%');
  });

  test('hides the bar when finish is called', async () => {
    wrapper.vm.start();
    await wrapper.vm.$nextTick();

    wrapper.vm.finish();
    await wrapper.vm.$nextTick();

    expect(wrapper.classes()).toContain('hidden');
  });
});
