import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ExampleCounter from '../../src/components/ExampleCounter.vue';
import axios from 'axios';
import flushPromises from 'flush-promises';

// Mocking axios
vi.mock('axios');

describe('ExampleCounter.vue', () => {
  beforeEach(() => {
    // Reset mock before each test
    vi.clearAllMocks();
  });

  it('renders the initial counter value', async () => {
    // Arrange
    axios.get.mockResolvedValueOnce({ data: { counter: 5 } });
    const wrapper = mount(ExampleCounter);

    // Act
    await flushPromises();

    // Assert
    expect(wrapper.find('h1').text()).toBe('Counter: 5');
  });

  it('increments the counter when the button is clicked', async () => {
    // Arrange
    axios.get.mockResolvedValueOnce({ data: { counter: 5 } });
    axios.post.mockResolvedValueOnce({ data: { counter: 6 } });
    const wrapper = mount(ExampleCounter);
    await flushPromises(); // Wait for initial API call

    // Act
    await wrapper.find('button').trigger('click');
    await flushPromises(); // Wait for increment API call

    // Assert
    expect(wrapper.find('h1').text()).toBe('Counter: 6');
  });
});