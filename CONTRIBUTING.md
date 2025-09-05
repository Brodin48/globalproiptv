# Contributing to theiptv

Thank you for your interest in contributing to the theiptv website! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git
- Basic knowledge of React, Next.js, and Tailwind CSS

### Setup Development Environment

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/theiptv.git
   cd theiptv
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Visit http://localhost:3000**

## 🎨 Color System Guidelines

Our website uses a scientifically-optimized color system for maximum conversions:

### **Primary Colors (Never Change)**
- **Trust Blue**: `primary-600` (#2563eb) - For headers and navigation
- **Action Orange**: `action-500` (#f97316) - For CTAs (+34% conversion)
- **Urgent Red**: `urgent-600` (#dc2626) - For limited offers
- **Success Green**: `success-500` (#10b981) - For free trials
- **Premium Gold**: `premium-400` (#fbbf24) - For value highlights

### **Usage Rules**
- ✅ **DO**: Use orange for primary CTAs (Subscribe, Buy Now, Start Trial)
- ✅ **DO**: Use green for risk-free actions (Free Trial, No Commitment)
- ✅ **DO**: Use blue for trust elements (Headers, Navigation, Badges)
- ✅ **DO**: Use red sparingly for urgency (Limited Time, Last Chance)
- ❌ **DON'T**: Change CTA colors without A/B testing
- ❌ **DON'T**: Use purple, pink, or brown for main elements

## 📝 Code Standards

### **React Components**
```tsx
// Use TypeScript for all components
interface ComponentProps {
  title: string;
  isActive?: boolean;
}

export default function Component({ title, isActive = false }: ComponentProps) {
  return (
    <div className="trust-element">
      <h2 className="text-primary-600">{title}</h2>
    </div>
  );
}
```

### **Styling Guidelines**
```css
/* Use Tailwind classes, avoid custom CSS */
<button className="cta-primary"> /* Pre-built conversion-optimized class */
<div className="trust-element hover:trust-element-hover">
<span className="premium-highlight">
```

### **File Structure**
```
components/
├── ui/           # Reusable UI components
├── sections/     # Page sections (Hero, Pricing, etc.)
├── forms/        # Form components
└── layout/       # Layout components

app/
├── (pages)/      # Page routes
├── api/          # API routes
└── globals.css   # Global styles (conversion-optimized)
```

## 🎯 Conversion Optimization Rules

### **CTAs (Call-to-Actions)**
- **Primary CTAs**: Must use `cta-primary` class (orange gradient)
- **Secondary CTAs**: Use `cta-secondary` class (blue outline)
- **Urgent CTAs**: Use `cta-urgent` class (red gradient)
- **Button Text**: Action-oriented ("Start Free Trial", "Get Instant Access")

### **Trust Elements**
- Contact information must be prominently displayed
- Use trust badges and security indicators
- Include testimonials and social proof
- Display guarantees and refund policies

### **Mobile Optimization**
- Minimum 44px touch targets for buttons
- Larger text sizes for readability
- Optimized image loading
- Fast loading times (<3s)

## 🧪 Testing Requirements

### **Before Submitting**
1. **Visual Testing**: Check all color changes across different devices
2. **Performance**: Ensure no performance regression
3. **Accessibility**: Test with screen readers and keyboard navigation
4. **Conversion Impact**: Consider A/B testing for major changes

### **A/B Testing Guidelines**
```bash
# For major color or CTA changes, document:
- Original conversion rate
- Expected improvement
- Test duration (minimum 2 weeks)
- Statistical significance threshold (95%)
```

## 📋 Pull Request Process

### **1. Create Feature Branch**
```bash
git checkout -b feature/improve-cta-conversion
git checkout -b fix/mobile-button-sizing
git checkout -b update/pricing-colors
```

### **2. Commit Guidelines**
```bash
# Use conventional commits
git commit -m "feat: add pulse animation to primary CTAs"
git commit -m "fix: improve mobile touch targets"
git commit -m "style: update pricing card colors for better conversion"
```

### **3. Pull Request Template**
```markdown
## 🎯 Purpose
Brief description of changes and why they're needed.

## 🎨 Color Changes
- [ ] No color changes
- [ ] Minor color adjustments (tested)
- [ ] Major color changes (A/B test planned)

## 📱 Testing
- [ ] Desktop tested
- [ ] Mobile tested
- [ ] Accessibility checked
- [ ] Performance verified

## 📊 Expected Impact
- Conversion rate: Expected +X% improvement
- User experience: Improved/Maintained
- Performance: Improved/Maintained

## 🖼️ Screenshots
Before/After screenshots for visual changes
```

## 🔍 Code Review Criteria

### **Mandatory Checks**
- ✅ Follows color system guidelines
- ✅ Maintains conversion optimization
- ✅ Mobile responsive
- ✅ Accessible (WCAG 2.1 AA)
- ✅ Fast loading
- ✅ SEO friendly

### **Nice to Have**
- 🎯 Improves conversion rates
- 📈 Enhances user experience
- 🚀 Improves performance
- 🎨 Better visual design

## 🚫 Common Mistakes to Avoid

### **Color Mistakes**
- ❌ Using blue for CTAs (reduces urgency by 15%)
- ❌ Using green for primary actions (better for free trials)
- ❌ Too many red elements (creates anxiety)
- ❌ Low contrast colors (accessibility issues)

### **CTA Mistakes**
- ❌ Weak button text ("Click Here", "Submit")
- ❌ Too many CTAs on one page
- ❌ Small touch targets on mobile
- ❌ Missing hover states

### **Performance Mistakes**
- ❌ Large unoptimized images
- ❌ Blocking JavaScript
- ❌ Missing loading states
- ❌ Heavy animations on mobile

## 🎯 Conversion Optimization Resources

### **A/B Testing Tools**
- Google Optimize
- Optimizely
- VWO (Visual Website Optimizer)

### **Color Psychology References**
- "The Psychology of Color in Marketing" - HubSpot
- "Color and Conversion Rate Optimization" - ConversionXL
- Netflix color strategy case studies

### **Industry Benchmarks**
- IPTV conversion rates: 2-8% (industry average)
- Our target: 8-12% (with optimization)
- Orange CTAs: +25-35% vs blue
- Mobile optimization: +15-25% improvement

## 📞 Questions?

- **Email**: contact@theiptv.us
- **Create an Issue**: For bugs or feature requests
- **Discussion**: Use GitHub Discussions for questions

---

**Thank you for contributing to theiptv! Every improvement helps us provide better streaming experiences for our users.** 🎬
