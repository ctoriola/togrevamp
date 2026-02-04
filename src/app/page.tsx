import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1512] text-white font-sans">
      {/* Hero Section */}
      <section className="relative px-6 pt-6 pb-12">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-12 relative z-10">
          <div className="text-xl font-semibold">Grace Community Church</div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Ministries</a>
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
                alt="Church worship"
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
              A Place of<br />Hope & Faith
            </h1>
          </div>

          {/* Right side quote */}
          <div className="absolute right-8 md:right-12 top-1/3 z-10 max-w-xs text-right">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Come as you are.<br />Leave transformed.
            </h2>
            <p className="text-white/70 text-sm">
              Join us every Sunday for worship,<br />fellowship, and spiritual growth.
            </p>
          </div>

          {/* Service Times */}
          <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 md:right-12 z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div>
                <span className="text-[#D580FF] font-medium">Sunday</span>
                <p className="text-white mt-1">9:00 AM & 11:00 AM</p>
              </div>
              <div>
                <span className="text-[#D580FF] font-medium">Wednesday</span>
                <p className="text-white mt-1">7:00 PM Bible Study</p>
              </div>
              <div>
                <span className="text-[#D580FF] font-medium">Youth Group</span>
                <p className="text-white mt-1">Fridays at 6:30 PM</p>
              </div>
              <div>
                <span className="text-[#D580FF] font-medium">Prayer Meeting</span>
                <p className="text-white mt-1">Saturdays at 8:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="px-6 py-8 border-t border-zinc-800">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
          <div className="text-xs text-zinc-500 max-w-[100px]">
            Ministries for Every Stage of Life
          </div>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 bg-[#9D00FF] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <span className="font-medium">Children</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 bg-[#9D00FF] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-medium">Youth</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 bg-[#9D00FF] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="font-medium">Marriage</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 bg-[#9D00FF] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <span className="font-medium">Missions</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Church Section */}
      <section className="px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-[#9D00FF] text-sm font-medium mb-4 block">About Our Church</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Building a<br />
              Community of<br />
              Faith & Love
            </h2>
          </div>
          <div className="md:pt-8">
            <p className="text-xl md:text-2xl text-zinc-300 mb-6">
              We are a welcoming community rooted in scripture, committed to sharing God&apos;s love through worship, service, and fellowship.
            </p>
            <p className="text-zinc-500 text-sm mb-6">
              Everyone has a place here.<br />
              Discover yours today.
            </p>
            <button className="flex items-center gap-2 border border-zinc-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:border-zinc-400 transition-colors">
              Learn More
              <span className="w-6 h-6 bg-[#9D00FF] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Church Life Gallery */}
      <section className="px-6 pb-16">
        <div className="grid grid-cols-3 gap-4">
          <div className="aspect-[3/4] relative rounded-xl overflow-hidden bg-zinc-900">
            <Image
              src="https://images.unsplash.com/photo-1519491050282-cf00c82424bd?w=400&h=500&fit=crop"
              alt="Worship service"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-[3/4] relative rounded-xl overflow-hidden bg-zinc-900">
            <Image
              src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=500&fit=crop"
              alt="Bible study"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-[3/4] relative rounded-xl overflow-hidden bg-zinc-900">
            <Image
              src="https://images.unsplash.com/photo-1609234656388-0ff363383899?w=400&h=500&fit=crop"
              alt="Community outreach"
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
                  alt="Easter Service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#9D00FF] text-sm mb-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>April 20, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Easter Sunday Celebration</h3>
                <p className="text-zinc-400 text-sm">Join us for a special sunrise service followed by breakfast and our main Easter celebration.</p>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-zinc-800/50 rounded-2xl overflow-hidden">
              <div className="aspect-[16/10] relative">
                <Image
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=500&h=300&fit=crop"
                  alt="Women's Retreat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#9D00FF] text-sm mb-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>May 3-5, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Women&apos;s Spring Retreat</h3>
                <p className="text-zinc-400 text-sm">A weekend of rest, renewal, and connection at Mountain View Conference Center.</p>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-zinc-800/50 rounded-2xl overflow-hidden">
              <div className="aspect-[16/10] relative">
                <Image
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=300&fit=crop"
                  alt="Family Picnic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#9D00FF] text-sm mb-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>May 25, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Annual Church Picnic</h3>
                <p className="text-zinc-400 text-sm">Food, games, and fellowship for the whole family at Riverside Park.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermons Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#9D00FF] text-sm font-medium mb-2 block">Watch & Listen</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Sermons</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Missed a Sunday? Catch up on recent messages from our pastoral team.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured Sermon */}
            <div className="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&h=450&fit=crop"
                alt="Featured sermon"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#9D00FF] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[#D580FF] text-sm">Feb 2, 2025</span>
                <h3 className="text-xl font-semibold mt-1">Walking in Faith: Trusting God&apos;s Plan</h3>
                <p className="text-zinc-300 text-sm mt-1">Pastor David Mitchell</p>
              </div>
            </div>

            {/* Sermon List */}
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-zinc-800/30 rounded-xl hover:bg-zinc-800/50 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#9D00FF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#9D00FF]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div>
                  <span className="text-zinc-500 text-xs">Jan 26, 2025</span>
                  <h4 className="font-medium">The Power of Prayer in Daily Life</h4>
                  <p className="text-zinc-400 text-sm">Pastor Sarah Thompson</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-zinc-800/30 rounded-xl hover:bg-zinc-800/50 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#9D00FF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#9D00FF]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div>
                  <span className="text-zinc-500 text-xs">Jan 19, 2025</span>
                  <h4 className="font-medium">Finding Peace in Uncertain Times</h4>
                  <p className="text-zinc-400 text-sm">Pastor David Mitchell</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-zinc-800/30 rounded-xl hover:bg-zinc-800/50 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#9D00FF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#9D00FF]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div>
                  <span className="text-zinc-500 text-xs">Jan 12, 2025</span>
                  <h4 className="font-medium">New Beginnings: A Fresh Start with God</h4>
                  <p className="text-zinc-400 text-sm">Pastor Sarah Thompson</p>
                </div>
              </div>

              <button className="w-full py-3 border border-zinc-700 rounded-xl text-sm font-medium hover:border-zinc-500 transition-colors">
                View All Sermons
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Get Connected CTA */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#9D00FF] via-[#7B00CC] to-[#5A0099] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Connected?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Whether you&apos;re new to faith or looking for a church home, we&apos;d love to meet you. Join us this Sunday!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 bg-white text-[#7B00CC] px-6 py-3 rounded-full font-medium hover:bg-zinc-100 transition-colors">
              Plan Your Visit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
              Contact Us
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
              <h3 className="text-xl font-semibold mb-4">Grace Community Church</h3>
              <p className="text-zinc-400 text-sm mb-4">
                A place where faith grows, community thrives, and everyone belongs.
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
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Service Times */}
            <div>
              <h4 className="font-semibold mb-4">Service Times</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>Sunday: 9:00 AM & 11:00 AM</li>
                <li>Wednesday: 7:00 PM</li>
                <li>Youth: Fridays 6:30 PM</li>
                <li>Prayer: Saturdays 8:00 AM</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ministries</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sermons</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Give Online</a></li>
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
                  <span>123 Faith Street<br />Springfield, IL 62701</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@gracechurch.org</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
            <p>&copy; 2025 Grace Community Church. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
