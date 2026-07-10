export class DataGenerator {
  /**
   * Sinh địa chỉ email ngẫu nhiên, duy nhất và có khả năng truy vết (traceable)
   * @param testName Tên của test case / kịch bản test
   * @returns Địa chỉ email định dạng: auto_[testName]_[timestamp]@test.com
   */
  static getRandomEmail(testName: string): string {
    const timestamp = Date.now();
    return `auto_${testName}_${timestamp}@test.com`;
  }
}
