#!/usr/bin/env node

console.log('🚀 Deploying WordPress Integration')
console.log('=================================')
console.log('')

const { execSync } = require('child_process')

try {
  console.log('1. Staging changes...')
  execSync('git add .', { stdio: 'inherit' })
  
  console.log('2. Committing WordPress integration...')
  execSync(`git commit -m "🔄 Enable WordPress integration for blog.iptvsatlink.com

- Blog now fetches from WordPress API at blog.iptvsatlink.com
- Intelligent fallback to static content when WordPress unavailable  
- Smart data source indicators show live vs static content
- Individual post pages support both WordPress and static
- Seamless transition when WordPress becomes available

Current status: Will show static content until subdomain is configured"`, { stdio: 'inherit' })
  
  console.log('3. Pushing to production...')
  execSync('git push origin main', { stdio: 'inherit' })
  
  console.log('')
  console.log('✅ DEPLOYMENT COMPLETE!')
  console.log('')
  console.log('🌐 Your blog will be live at:')
  console.log('- https://iptvsatlink.com/blog')
  console.log('- https://www.iptvsatlink.com/blog')
  console.log('')
  console.log('📊 Current behavior:')
  console.log('- Shows static content (with blue indicator)')
  console.log('- Will automatically switch to WordPress when available')
  console.log('- Green indicator will appear when WordPress is live')
  console.log('')
  console.log('⏳ Vercel deployment usually takes 1-3 minutes')
  console.log('')
  console.log('🔍 Monitor WordPress status: npm run check-wordpress')
  
} catch (error) {
  console.error('❌ Deployment failed:', error.message)
  process.exit(1)
}