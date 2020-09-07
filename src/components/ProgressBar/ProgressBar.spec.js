import { shallowMount } from '@vue/test-utils';
import ProgressBar from './ProgressBar.vue';

describe('ProgressBar.vue', () => {
  let wrapper;
  let nextTick;
  beforeEach(() => {
    wrapper = shallowMount(ProgressBar);
    nextTick = async () => wrapper.vm.$nextTick();
    jest.useFakeTimers();
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
    await nextTick();

    expect(wrapper.classes()).not.toContain('hidden');
  });

  test('sets the bar to 100% width when finish is called', async () => {
    wrapper.vm.start();
    await nextTick();

    wrapper.vm.finish();
    await nextTick();

    expect(wrapper.element.style.width).toBe('100%');
  });

  test('hides the bar when finish is called', async () => {
    wrapper.vm.start();
    await nextTick();

    wrapper.vm.finish();
    await nextTick();

    expect(wrapper.classes()).toContain('hidden');
  });

  test('resets to 0% width when start is called', async () => {
    wrapper.vm.finish();
    await nextTick();

    wrapper.vm.start();
    await nextTick();

    expect(wrapper.element.style.width).toBe('0%');
  });

  test('increases width by 1% every 100ms after start call', async () => {
    wrapper.vm.start();
    jest.runTimersToTime(100);
    await nextTick();
    expect(wrapper.element.style.width).toBe('1%');

    jest.runTimersToTime(900);
    await nextTick();
    expect(wrapper.element.style.width).toBe('10%');

    jest.runTimersToTime(4000);
    await nextTick();
    expect(wrapper.element.style.width).toBe('50%');
  });

  test('clears timer when finish is called', async () => {
    jest.spyOn(window, 'clearInterval');
    setInterval.mockReturnValue(123);

    wrapper.vm.start();
    await nextTick();

    wrapper.vm.finish();
    await nextTick();

    expect(window.clearInterval).toHaveBeenCalledWith(123);
  });
});
