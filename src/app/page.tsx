import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1512] text-white font-sans">
      <section className="relative px-6 pt-6 pb-12">
        <nav className="flex items-center justify-between mb-12 relative z-10">
          <div className="text-xl font-semibold">Temple of Glory</div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Services</a>
              <a href="#" className="hover:text-white transition-colors">Events</a>
            </div>
            <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">
              Visit Us
              <span className="w-6 h-6 bg-[#9D00FF] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </nav>

        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#9D00FF] via-[#7B00CC] to-[#5A0099] p-8 md:p-12 min-h-[500px]">
          <div className="absolute right-0 top-0 w-full h-full">
            <div className="absolute right-0 top-0 w-3/4 h-full">
              <Image
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=1000&fit=crop"
                alt="Worship at Temple of Glory"
                fill
                className="object-cover object-center opacity-80"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#9D00FF] via-[#7B00CC]/80 to-transparent" />
            </div>
          </div>

          <div className="relative z-10 max-w-xl">
            <p className="text-white/90 text-sm mb-2">Welcome to</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Temple of<br />Glory Abuja
            </h1>
          </div>

          <div className="absolute right-8 md:right-12 top-1/3 z-10 max-w-xs text-right">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Where Faith Grows &<br />Community Thrives
            </h2>
            <p className="text-white/70 text-sm">
              Experience spirit-led worship in the<br />serene gardens of Livingbrooks Park.
            </p>
          </div>

          <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 md:right-12 z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div>
                <span className="text-[#D580FF] font-medium">Sunday Worship</span>
                <p className="text-white mt-1">Join Us Weekly</p>
              </div>
              <div>
                <span className="text-[#D580FF] font-medium">Location</span>
                <p className="text-white mt-1">Livingbrooks Park, Asokoro</p>
              </div>
              <div>
                <span className="text-[#D580FF] font-medium">Prophetic Teaching</span>
                <p className="text-white mt-1">Spirit-Led Messages</p>
              </div>
              <div>
                <span className="text-[#D580FF] font-medium">Community</span>
                <p className="text-white mt-1">Fellowship & Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center text-zinc-500 text-sm">
          <p>&copy; 2025 Temple of Glory Abuja. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-12 relative z-10">
          <div className="text-xl font-semibold">Temple of Glory</div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Services</a>
              <a href="#" className="hover:text-white transition-colors">Events</a>
            </div>
            <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">
              Visit Us
              <span className="w-6 h-6 bg-[#9D00FF] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </nav>

        {/* Hero Content with Gradient Background */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#9D00FF] via-[#7B00CC] to-[#5A0099] p-8 md:p-12 min-h-[500px]">
          {/* Background Image */}
          <div className="absolute right-0 top-0 w-full h-full">
            <div className="absolute right-0 top-0 w-3/4 h-full">
              <Image
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=1000&fit=crop"
                alt="Worship at Temple of Glory"
                fill
                className="object-cover object-center opacity-80"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#9D00FF] via-[#7B00CC]/80 to-transparent" />
            </div>
          </div>

          {/* Hero Text */}
          <div className="relative z-10 max-w-xl">
            <p className="text-white/90 text-sm mb-2">Welcome to</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Temple of<br />Glory Abuja
            </h1>
          </div>

          {/* Right side quote */}
          <div className="absolute right-8 md:right-12 top-1/3 z-10 max-w-xs text-right">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Where Faith Grows &<br />Community Thrives
            </h2>
            <p className="text-white/70 text-sm">
              Experience spirit-led worship in the<br />serene gardens of Livingbrooks Park.
            </p>
          </div>

          {/* Service Info */}
          <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 md:right-12 z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div>
                <span className="text-[#D580FF] font-medium">Sunday Worship</span>
                <p className="text-white mt-1">Join Us Weekly</p>
              </div>
              <div>
                <span className="text-[#D580FF] font-medium">Location</span>
                <p className="text-white mt-1">Livingbrooks Park, Asokoro</p>
              </div>
              <div>
                <span className="text-[#D580FF] font-medium">Prophetic Teaching</span>
                <p className="text-white mt-1">Spirit-Led Messages</p>
              </div>
              <div>
                <span className="text-[#D580FF] font-medium">Community</span>
                <p className="text-white mt-1">Fellowship & Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus Section */}
      <section className="px-6 py-8 border-t border-zinc-800">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
          <div className="text-xs text-zinc-500 max-w-[100px]">
            Committed to Spiritual Growth & City Transformation
          </div>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 bg-[#9D00FF] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <span className="font-medium">Dynamic Worship</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 bg-[#9D00FF] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-medium">Prophetic Engagement</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 bg-[#9D00FF] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="font-medium">Spiritual Teaching</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 bg-[#9D00FF] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <span className="font-medium">City Influence</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Temple of Glory Section */}
      <section className="px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-[#9D00FF] text-sm font-medium mb-4 block">About TOG Abuja</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              A Community<br />
              Transforming Lives<br />
              & The City
            </h2>
          </div>
          <div className="md:pt-8">
            <p className="text-xl md:text-2xl text-zinc-300 mb-6">
              Temple of Glory is a Christian community strategically positioned for spiritual growth, cultural upliftment, and city transformation in Abuja.
            </p>
            <p className="text-zinc-500 text-sm mb-6">
              Nestled in the serene Livingbrooks Park,<br />
              we offer more than worship — we offer experience.
            </p>
            <button className="flex items-center gap-2 border border-zinc-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:border-zinc-400 transition-colors">
              Learn More About Us
              <span className="w-6 h-6 bg-[#9D00FF] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Livingbrooks Park Gallery */}
      <section className="px-6 pb-16">
        <div className="mb-8">
          <span className="text-[#9D00FF] text-sm font-medium mb-2 block">Our Unique Setting</span>
          <h3 className="text-2xl font-bold">Worship in the Gardens of Livingbrooks Park</h3>
          <p className="text-zinc-400 mt-2 max-w-2xl">A peaceful, family-friendly environment in Asokoro that blends spiritual activity with tranquil surroundings.</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="aspect-[3/4] relative rounded-xl overflow-hidden bg-zinc-900">
            <Image
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=500&fit=crop"
              alt="Garden worship setting"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-[3/4] relative rounded-xl overflow-hidden bg-zinc-900">
            <Image
              src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=500&fit=crop"
              alt="Church fellowship"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-[3/4] relative rounded-xl overflow-hidden bg-zinc-900">
            <Image
              src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=400&h=500&fit=crop"
              alt="Outdoor worship"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="px-6 py-16 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-[#9D00FF] text-sm font-medium mb-2 block">What&apos;s Happening</span>
              <h2 className="text-3xl md:text-4xl font-bold">Upcoming Events</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 border border-zinc-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:border-zinc-400 transition-colors">
              View All Events
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Event Card 1 */}
            <div className="bg-zinc-800/50 rounded-2xl overflow-hidden">
              <div className="aspect-[16/10] relative">
                <Image
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&h=300&fit=crop"
                  alt="Mid-Year Thanksgiving"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#9D00FF] text-sm mb-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>June 29, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Mid-Year Thanksgiving</h3>
                <p className="text-zinc-400 text-sm">Join us in the Livingbrooks Park marquee for worship, thanksgiving, and fellowship in our beautiful park environment.</p>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-zinc-800/50 rounded-2xl overflow-hidden">
              <div className="aspect-[16/10] relative">
                <Image
                  src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=500&h=300&fit=crop"
                  alt="Sunday Worship"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#9D00FF] text-sm mb-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Every Sunday</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sunday Worship Service</h3>
                <p className="text-zinc-400 text-sm">Experience dynamic worship, prophetic engagement, and spiritual teaching that impacts your daily living and purpose.</p>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-zinc-800/50 rounded-2xl overflow-hidden">
              <div className="aspect-[16/10] relative">
                <Image
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=300&fit=crop"
                  alt="Father's Day Service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#9D00FF] text-sm mb-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Special Services</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Themed Worship Gatherings</h3>
                <p className="text-zinc-400 text-sm">From Father&apos;s Day celebrations to special thanksgiving services — experience worship in our unique garden setting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worship Experience Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#9D00FF] text-sm font-medium mb-2 block">The TOG Experience</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Community Says</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Discover why worshippers love Temple of Glory&apos;s unique blend of spiritual depth and serene environment.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-zinc-800/30 rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#9D00FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 mb-4">&quot;The serene garden setting truly enhances the spiritual experience. There&apos;s something special about worshipping in such a peaceful environment.&quot;</p>
              <p className="text-zinc-500 text-sm">— Church Member</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-zinc-800/30 rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#9D00FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 mb-4">&quot;The quality of praise, fellowship, and pastoral messages is exceptional. It&apos;s more than church — it&apos;s a community that truly cares.&quot;</p>
              <p className="text-zinc-500 text-sm">— Regular Worshipper</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-zinc-800/30 rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#9D00FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 mb-4">&quot;Perfect for family worship. The children love it, and the social interaction goes beyond traditional church experience. Truly family-friendly.&quot;</p>
              <p className="text-zinc-500 text-sm">— Family Attendee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="px-6 py-16 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#9D00FF] text-sm font-medium mb-4 block">Find Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Temple of Glory</h2>
              <p className="text-zinc-300 text-lg mb-6">
                Located within the beautiful Livingbrooks Park & Garden — an upscale recreational venue in Asokoro, Abuja known for its clean, peaceful, and family-friendly atmosphere.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#9D00FF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#9D00FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Livingbrooks Park & Garden</p>
                    <p className="text-zinc-400 text-sm">Asokoro, Abuja 900103, FCT, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#9D00FF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#9D00FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">+234 809 976 5113</p>
                    <p className="text-zinc-400 text-sm">Call us for inquiries</p>
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-2 bg-[#9D00FF] text-white px-6 py-3 rounded-full font-medium hover:bg-[#7B00CC] transition-colors">
                Get Directions
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=600&fit=crop"
                alt="Livingbrooks Park garden setting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-lg font-semibold">Livingbrooks Park & Garden</p>
                <p className="text-white/70 text-sm">Asokoro/Area 11, Abuja</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Connected CTA */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#9D00FF] via-[#7B00CC] to-[#5A0099] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Experience spirit-led worship, prophetic teaching, and genuine fellowship. Connect with us on social media for updates and announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 bg-white text-[#7B00CC] px-6 py-3 rounded-full font-medium hover:bg-zinc-100 transition-colors">
              Plan Your Visit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
              Connect With Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            {/* Church Info */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-semibold mb-4">Temple of Glory</h3>
              <p className="text-zinc-400 text-sm mb-4">
                A Christian community committed to spiritual growth, cultural upliftment, and city transformation in Abuja.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Service Info */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>Sunday Worship Service</li>
                <li>Mid-Week Fellowship</li>
                <li>Special Thanksgiving Events</li>
                <li>Themed Worship Gatherings</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Vision</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Connect</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Give</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Livingbrooks Park<br />Asokoro, Abuja 900103<br />FCT, Nigeria</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+234 809 976 5113</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
            <p>&copy; 2025 Temple of Glory Abuja. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
