import { expect, request } from '@playwright/test';

export default {
  async taskListIsEmpty() {
    // Quick and dirty way to reset the server state
    const context = await request.newContext({
      baseURL: 'http://localhost:5000/',
    });
    const response = await context.delete('api/all-tasks');
    expect(response.ok()).toBeTruthy();
  }
};
