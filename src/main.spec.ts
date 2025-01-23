import {test, expect, Page} from '@playwright/test';

test.describe('Initial setup', () => {
    test('Check the page is loading', async ({browser}) => {
        const page = await browser.newPage();

        await page.goto('https://caniuse.propelleraero.com/');

        await expect(page.getByText('Can I use Propeller?')).toBeVisible();
        await expect(page.locator('#root')).toBeVisible();

        const title = await page.title();
        expect(title).toBe('Can I use Propeller?');
    });

});