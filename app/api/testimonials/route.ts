import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const testimonialsDir = path.join(process.cwd(), 'public', 'images', 'testimonials')
    
    // Check if directory exists
    if (!fs.existsSync(testimonialsDir)) {
      return NextResponse.json({ testimonials: [] })
    }

    // Read all files in testimonials directory
    const files = fs.readdirSync(testimonialsDir)
    
    // Filter for image files and exclude .DS_Store and other non-image files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif']
    const testimonialImages = files
      .filter(file => 
        imageExtensions.some(ext => 
          file.toLowerCase().endsWith(ext)
        ) && !file.startsWith('.')
      )
      .map(file => ({
        filename: file,
        path: `/images/testimonials/${file}`,
        id: file.split('.')[0] // Use filename without extension as ID
      }))
      .sort((a, b) => a.filename.localeCompare(b.filename)) // Sort alphabetically

    return NextResponse.json({ testimonials: testimonialImages })
  } catch (error) {
    console.error('Error reading testimonials directory:', error)
    return NextResponse.json({ testimonials: [] })
  }
}
