import { getV2RaySubResult } from './service';

describe('Service', () => {
  it('should get sub correct', () => {
    expect(getV2RaySubResult('1.1.1.1')).toEqual(
      `c3M6Ly9ZV1Z6TFRJMU5pMW5ZMjA2TVRJek5EVTJRREV1TVM0eExqRTZNVEV4TVE9PSN0ZXN0CnZtZXNzOi8vZXlKd2N5STZJblJsYzNRaUxDSndiM0owSWpveE1URXhMQ0pwWkNJNklqRXlNelExTmlJc0ltRmtaQ0k2SWpFdU1TNHhMakVpZlE9PQ==`,
    );
  });
});
