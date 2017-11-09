import detox from 'detox';
import packageJSON from '../package.json';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

beforeAll(async () => {
  await detox.init(packageJSON.detox);
});

afterAll(async () => {
  await detox.cleanup();
  console.log('after all');
});