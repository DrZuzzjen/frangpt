const { chromium } = require('playwright')

async function takeScreenshot(url = 'http://localhost:3000', outputPath = 'screenshots/preview.png') {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  
  // Set viewport for consistent screenshots
  await page.setViewportSize({ width: 1920, height: 1080 })
  
  await page.goto(url)
  await page.waitForLoadState('networkidle')
  
  // Take screenshot
  await page.screenshot({ 
    path: outputPath,
    fullPage: false 
  })
  
  console.log(`Screenshot saved to ${outputPath}`)
  
  await browser.close()
}

// Run if called directly
if (require.main === module) {
  const url = process.argv[2] || 'http://localhost:3000'
  const output = process.argv[3] || 'screenshots/preview.png'
  takeScreenshot(url, output).catch(console.error)
}

module.exports = { takeScreenshot }