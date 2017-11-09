describe('Counter', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should work', async () => {
    const view = new CounterView();

    await view.assertCounter(0);

    await view.tapIncrement();
    await view.tapIncrement();
    await view.assertCounter(2);

    await view.tapDecrement();
    await view.assertCounter(1);
  });
});

class CounterView {
  async assertCounter(value) {
    const counter = element(by.id('counter'));
    await expect(counter).toBeVisible();
    await expect(counter).toHaveText(value.toString());
  }

  tapIncrement() {
    return element(by.id('increment')).tap();
  }

  tapDecrement() {
    return element(by.id('decrement')).tap();
  }
}
