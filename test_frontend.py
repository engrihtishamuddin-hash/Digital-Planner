import subprocess
import time
import os
import sys

def main():
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        print("Playwright not installed.")
        sys.exit(1)

    print("Starting server...")
    server = subprocess.Popen(["python3", "-m", "http.server", "3000"])
    time.sleep(2)  # Wait for server to start

    try:
        with sync_playwright() as p:
            print("Launching browser...")
            browser = p.chromium.launch()
            page = browser.new_page()

            print("Navigating to page...")
            page.goto("http://localhost:3000/index.html")

            print("Injecting mock local storage...")
            page.evaluate("localStorage.setItem('personalScriptUrl', 'http://mock-url');")

            # Reload to apply local storage mock and bypass prompt
            page.reload()

            print("Waiting for network idle...")
            page.wait_for_load_state("networkidle")

            # Click a few navigation items to render different sections and formatters
            print("Clicking navigation items...")
            page.click("text=💰 Income")
            page.wait_for_timeout(500)

            page.click("text=🎯 Budget")
            page.wait_for_timeout(500)

            page.click("text=📉 Expense Tracker")
            page.wait_for_timeout(500)

            print("Taking screenshot...")
            page.screenshot(path="screenshot.png")
            print("Screenshot saved to screenshot.png")

            browser.close()
    finally:
        server.terminate()
        server.wait()

if __name__ == "__main__":
    main()
