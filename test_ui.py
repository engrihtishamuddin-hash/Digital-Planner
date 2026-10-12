import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Navigate to the local server
        await page.goto('http://localhost:3000')

        # Inject mock local storage data to bypass the setup prompt
        await page.evaluate("""
            localStorage.setItem('personalScriptUrl', 'http://mock-url');
        """)

        # Reload the page to apply the local storage data
        await page.reload()

        # Wait for a brief moment for the page to render
        await page.wait_for_timeout(2000)

        # Take a screenshot
        await page.screenshot(path='screenshot.png')
        await browser.close()

asyncio.run(run())
