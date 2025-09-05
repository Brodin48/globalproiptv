// Example of how to add FAQ to your home page (app/page.tsx)
// Add this import at the top:
import FAQ from '@/components/FAQ'

// Then add the FAQ component before the Footer, for example:
/*
        <main className="max-w-8xl mx-auto px-0 sm:px-8 lg:px-12 xl:px-16">
          <Testimonials />
        </main>
        <FAQ />  // Add this line
        <Footer />
*/

// You can also customize the FAQ with specific items:
const customFAQItems = [
  {
    question: "What is IPTV?",
    answer: "IPTV (Internet Protocol Television) is a digital television service delivered via internet protocol networks, offering live TV, on-demand content, and interactive features through your internet connection."
  },
  {
    question: "How many channels do you offer?",
    answer: "We offer over 25,000+ live channels from around the world, covering entertainment, sports, news, movies, documentaries, kids content, and much more in multiple languages."
  }
  // Add more items as needed
]

// Then use it like this:
// <FAQ items={customFAQItems} title="Your Custom Title" />
