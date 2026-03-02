'use client';

import React, { useState } from 'react';
import { Menu, X, Lock, LogOut } from 'lucide-react';

const EllenValladaresWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPassword === 'spread2026') {
      setIsAdmin(true);
      setShowPasswordPrompt(false);
      setAdminPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Books', id: 'books' },
    { label: 'Oracle Decks', id: 'decks' },
    { label: 'Spread Your Wings', id: 'mentoring' },
    { label: 'Meditation Room', id: 'meditation' },
    { label: 'Oracle Card Picker', id: 'cardpicker' },
    { label: 'Blog', id: 'blog' },
    { label: 'About Ellen', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  const HomePage = () => (
    <div className="space-y-16">
      <section className="text-center py-20 px-4 bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 rounded-lg">
        <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6 leading-tight">
          Spread Your Wings
        </h1>
        <p className="text-xl text-gray-600 mb-4 italic">Let your magical life take flight</p>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
          Books • Oracle Decks • Coaching • Meditation
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          I'm passionate about helping you connect with the magic, beauty, and joy within yourself and the Universe through writing, teaching, and one-on-one mentoring.
        </p>
        <button 
          onClick={() => setCurrentPage('mentoring')}
          className="bg-gradient-to-r from-amber-600 to-rose-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition text-lg font-medium"
        >
          Explore Mentoring
        </button>
      </section>

      <section className="py-12">
        <h2 className="text-4xl font-light text-gray-800 mb-12 text-center">My Offerings</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div 
            onClick={() => setCurrentPage('books')}
            className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer text-center group"
          >
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-light text-gray-800 mb-2 group-hover:text-amber-700">Books</h3>
            <p className="text-gray-600">Stories and wisdom for all ages</p>
          </div>
          <div 
            onClick={() => setCurrentPage('decks')}
            className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer text-center group"
          >
            <div className="text-6xl mb-4">🃏</div>
            <h3 className="text-2xl font-light text-gray-800 mb-2 group-hover:text-amber-700">Oracle Decks</h3>
            <p className="text-gray-600">Guidance and inspiration</p>
          </div>
          <div 
            onClick={() => setCurrentPage('mentoring')}
            className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer text-center group"
          >
            <div className="text-6xl mb-4">💫</div>
            <h3 className="text-2xl font-light text-gray-800 mb-2 group-hover:text-amber-700">Mentoring</h3>
            <p className="text-gray-600">One-on-one coaching & support</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-rose-50 to-amber-50 p-12 rounded-lg">
        <h2 className="text-3xl font-light text-gray-800 mb-6">Welcome</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          My hope is to provide you with inspirational tools that allow you to tap into your own deepest wisdom so that you can courageously and confidently share your unique, beautiful gifts and talents with the world.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Your work, your creativity, your words matter. You make a difference by stepping into the light and uplifting others.
        </p>
        <button 
          onClick={() => setCurrentPage('about')}
          className="mt-6 text-amber-700 hover:text-amber-900 font-medium"
        >
          Learn more about Ellen →
        </button>
      </section>
    </div>
  );

  const BooksPage = () => (
    <div className="space-y-12">
      <h1 className="text-4xl font-light text-gray-800">Books</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <div className="text-6xl mb-4">🦩</div>
          <h3 className="text-xl font-medium text-gray-800 mb-2">Filbert the Lonely Flamingo</h3>
          <p className="text-sm text-amber-700 mb-3">Children's</p>
          <p className="text-gray-600 text-sm mb-4">A heartwarming children's book co-authored with her brother Steve Wolfson</p>
          <p className="text-lg font-semibold text-gray-800 mb-4">$12.99</p>
          <button className="w-full bg-gradient-to-r from-amber-600 to-rose-600 text-white py-2 rounded hover:shadow-md transition">
            View Details
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <div className="text-6xl mb-4">👻</div>
          <h3 className="text-xl font-medium text-gray-800 mb-2">Crossing the Line</h3>
          <p className="text-sm text-amber-700 mb-3">Young Adult</p>
          <p className="text-gray-600 text-sm mb-4">Award-winning young adult novel. Gold Award from COVR Visionary Awards</p>
          <p className="text-lg font-semibold text-gray-800 mb-4">$16.99</p>
          <button className="w-full bg-gradient-to-r from-amber-600 to-rose-600 text-white py-2 rounded hover:shadow-md transition">
            View Details
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <div className="text-6xl mb-4">🏔️</div>
          <h3 className="text-xl font-medium text-gray-800 mb-2">Jonathan's Journey to Mount Miapu</h3>
          <p className="text-sm text-amber-700 mb-3">Middle Grade</p>
          <p className="text-gray-600 text-sm mb-4">A transformative middle grade adventure</p>
          <p className="text-lg font-semibold text-gray-800 mb-4">$14.99</p>
          <button className="w-full bg-gradient-to-r from-amber-600 to-rose-600 text-white py-2 rounded hover:shadow-md transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  const OracleDecksPage = () => (
    <div className="space-y-12">
      <h1 className="text-4xl font-light text-gray-800">Oracle Decks</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
          <div className="text-8xl mb-6 text-center">🌺</div>
          <h2 className="text-2xl font-light text-gray-800 mb-4">Hummingbird Wisdom Oracle</h2>
          <p className="text-gray-600 leading-relaxed mb-6">Award-winning oracle deck filled with inspiration, guidance, and practical tools. Award-winning in the 2022 COVR Visionary Awards for Product of the Year, Industry Choice, and People's Choice.</p>
          <p className="text-lg font-semibold text-gray-800 mb-6">$24.99</p>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-amber-600 to-rose-600 text-white py-3 rounded hover:shadow-md transition font-medium">
              Order on Amazon
            </button>
            <button className="w-full border-2 border-amber-600 text-amber-700 py-3 rounded hover:bg-amber-50 transition font-medium">
              Learn More
            </button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
          <div className="text-8xl mb-6 text-center">😇</div>
          <h2 className="text-2xl font-light text-gray-800 mb-4">Angels of Healing and Hope Oracle</h2>
          <p className="text-gray-600 leading-relaxed mb-6">Supportive, healing guidance from the angels to assist with spiritual and personal growth. Deepen your connection with the angelic realm.</p>
          <p className="text-lg font-semibold text-gray-800 mb-6">$24.99</p>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-amber-600 to-rose-600 text-white py-3 rounded hover:shadow-md transition font-medium">
              Order on Amazon
            </button>
            <button className="w-full border-2 border-amber-600 text-amber-700 py-3 rounded hover:bg-amber-50 transition font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-rose-50 p-12 rounded-lg mt-12">
        <h3 className="text-2xl font-light text-gray-800 mb-4">Try the Oracle Card Picker</h3>
        <p className="text-gray-700 mb-6">Pick a random card for guidance and inspiration</p>
        <button 
          onClick={() => setCurrentPage('cardpicker')}
          className="bg-gradient-to-r from-amber-600 to-rose-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition"
        >
          Draw a Card
        </button>
      </div>
    </div>
  );

  const MentoringPage = () => (
    <div className="space-y-12">
      <h1 className="text-4xl font-light text-gray-800 mb-8">Spread Your Wings Mentoring</h1>
      
      <div className="bg-gradient-to-br from-amber-50 to-rose-50 p-12 rounded-lg">
        <h2 className="text-3xl font-light text-gray-800 mb-6">One-on-One Mentoring with Ellen Valladares</h2>
        <p className="text-xl text-gray-700 mb-6 italic">Now is your time to SOAR!</p>
        
        <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
          <p>
            If you're being nudged by the Universe to share your talents, gifts, and wisdom with the world, I want to help empower you to take those next bold steps. You were meant to live out loud, to inspire others, and to create meaningful impact in your own special way.
          </p>
          <p>
            Over the last 30 years, I've continually overcome fears and doubts so that I could serve that inner voice that was gently guiding me to write, teach, and share what I've learned. Along the way, the mentors, coaches, and teachers who showed up and supported me made all the difference. That's what I hope to offer you – a blend of intuitive and practical guidance that will assist you in pushing past limiting beliefs, aligning with your highest path and purpose, and bringing your much-needed work into the world.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-light text-gray-800 mb-6">Our shared time and vision will help you:</h3>
          <div className="space-y-4 text-gray-700">
            <div className="flex gap-4">
              <span className="text-3xl font-light text-amber-700">S</span>
              <div>
                <h4 className="font-semibold text-gray-800">Share your wisdom</h4>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl font-light text-amber-700">O</span>
              <div>
                <h4 className="font-semibold text-gray-800">Own your impact</h4>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl font-light text-amber-700">A</span>
              <div>
                <h4 className="font-semibold text-gray-800">Align with your path and purpose</h4>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl font-light text-amber-700">R</span>
              <div>
                <h4 className="font-semibold text-gray-800">Ready, Set, Go! Move forward fearlessly!</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-12 rounded-lg shadow-sm">
        <h3 className="text-2xl font-light text-gray-800 mb-8">Spread Your Wings Mentoring is for you if you are:</h3>
        <ul className="space-y-4 text-gray-700">
          <li className="flex gap-3">
            <span className="text-amber-700 font-bold mt-1">•</span>
            <span>A conscious, soul-centered creative (writer/artist/teacher/coach) starting a new business or project or wanting to re-energize and refresh your current offerings</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-700 font-bold mt-1">•</span>
            <span>Seeking guidance, support, and accountability for projects like writing a book or creating an Oracle deck</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-700 font-bold mt-1">•</span>
            <span>Feeling like it's "too late" or you're "too old" to start something new (spoiler alert: it's not and you're not!)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-700 font-bold mt-1">•</span>
            <span>Wanting to elevate your confidence, courage, and clarity overall</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-700 font-bold mt-1">•</span>
            <span>Interested in deepening your spiritual connection, meditation practice, and/or intuition</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-700 font-bold mt-1">•</span>
            <span>Feeling stuck, confused about your next steps</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-700 font-bold mt-1">•</span>
            <span>Ready to tap into your own intuitive wisdom and find the freedom to soar</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-rose-50 to-amber-50 p-12 rounded-lg">
        <h3 className="text-2xl font-light text-gray-800 mb-8">What to Expect:</h3>
        <p className="text-gray-700 mb-6">Every session is unique and will unfold intuitively and organically, but typically, we will:</p>
        <ul className="space-y-3 text-gray-700 mb-8">
          <li className="flex gap-3">
            <span className="text-amber-700">✨</span>
            <span>Do a brief meditation</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-700">✨</span>
            <span>Discuss what's on your mind - thoughts, challenges, questions</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-700">✨</span>
            <span>Engage in personal growth exercises</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-700">✨</span>
            <span>Pull cards from one of my oracle decks</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-700">✨</span>
            <span>Come up with next steps to keep momentum going</span>
          </li>
        </ul>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-light text-gray-800">Pricing & Packages</h3>
        
        <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-amber-200">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Free Introductory Session</h4>
          <p className="text-gray-600 mb-4">30 minutes to explore working together</p>
          <button className="bg-gradient-to-r from-amber-600 to-rose-600 text-white px-6 py-2 rounded hover:shadow-md transition">
            Schedule Free Session
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Single Session</h4>
            <p className="text-gray-600 text-sm mb-4">60 minutes</p>
            <p className="text-3xl font-light text-amber-700 mb-6">$97</p>
            <button className="w-full bg-gradient-to-r from-amber-600 to-rose-600 text-white py-2 rounded hover:shadow-md transition text-sm">
              Book Now
            </button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-amber-400">
            <div className="bg-amber-400 text-white px-3 py-1 rounded-full text-xs font-semibold w-fit mb-4">POPULAR</div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Sweet Life Package</h4>
            <p className="text-gray-600 text-sm mb-4">5 sessions</p>
            <p className="text-3xl font-light text-amber-700 mb-2">$444</p>
            <p className="text-xs text-gray-500 mb-6">$89 per session</p>
            <button className="w-full bg-gradient-to-r from-amber-600 to-rose-600 text-white py-2 rounded hover:shadow-md transition text-sm">
              Book Now
            </button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Divine Nectar Package</h4>
            <p className="text-gray-600 text-sm mb-4">7 sessions</p>
            <p className="text-3xl font-light text-amber-700 mb-2">$555</p>
            <p className="text-xs text-gray-500 mb-6">$79 per session</p>
            <button className="w-full bg-gradient-to-r from-amber-600 to-rose-600 text-white py-2 rounded hover:shadow-md transition text-sm">
              Book Now
            </button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Epic Journey Package</h4>
          <p className="text-gray-600 text-sm mb-4">18 sessions over 9-12 months</p>
          <p className="text-3xl font-light text-amber-700 mb-2">$1,555</p>
          <p className="text-xs text-gray-500 mb-6">$86 per session</p>
          <button className="w-full bg-gradient-to-r from-amber-600 to-rose-600 text-white py-2 rounded hover:shadow-md transition text-sm">
            Book Now
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-rose-50 p-8 rounded-lg text-center">
        <p className="text-gray-700 mb-4">Ready to take the next step?</p>
        <button 
          onClick={() => setCurrentPage('contact')}
          className="bg-gradient-to-r from-amber-600 to-rose-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition"
        >
          Contact Ellen to Get Started
        </button>
      </div>
    </div>
  );

  const MeditationPage = () => (
    <div className="space-y-12">
      <h1 className="text-4xl font-light text-gray-800">Meditation Room</h1>
      <p className="text-lg text-gray-600">Find peace, healing, and connection with these guided meditations</p>
      
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <div className="text-8xl mb-6 text-center">✨</div>
        <h3 className="text-2xl font-light text-gray-800 mb-4 text-center">Healing and Manifestation with the Archangels</h3>
        <p className="text-gray-600 mb-6 text-center">A guided meditation CD for healing and manifestation</p>
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-amber-600 to-rose-600 text-white py-3 px-8 rounded hover:shadow-md transition">
            Listen Now
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-rose-50 p-12 rounded-lg text-center">
        <h3 className="text-2xl font-light text-gray-800 mb-4">Your Audio Meditations</h3>
        <p className="text-gray-700 mb-6">Your recorded meditations will appear here with their images and audio players</p>
      </div>
    </div>
  );

  const CardPickerPage = () => {
    const [drawnCard, setDrawnCard] = useState(null);

    const drawCard = () => {
      const sampleCards = [
        { name: 'Iridescence', deck: 'Hummingbird', message: 'Embrace the many colors of your soul. You contain infinite beauty and possibility.' },
        { name: 'Gentle Touch', deck: 'Hummingbird', message: 'Handle yourself with kindness and compassion. Softness is strength.' },
        { name: 'Heart Song', deck: 'Hummingbird', message: 'Let your heart guide you. Your authentic voice matters.' }
      ];
      setDrawnCard(sampleCards[Math.floor(Math.random() * sampleCards.length)]);
    };

    return (
      <div className="space-y-12">
        <h1 className="text-4xl font-light text-gray-800">Oracle Card Picker</h1>
        
        <div className="bg-gradient-to-br from-amber-50 to-rose-50 p-16 rounded-lg text-center">
          <p className="text-gray-700 mb-8 text-lg">Take a moment to pause, center yourself, and draw guidance</p>
          
          <button 
            onClick={drawCard}
            className="bg-gradient-to-r from-amber-600 to-rose-600 text-white px-12 py-4 rounded-full hover:shadow-lg transition text-lg font-medium mb-12"
          >
            Draw a Card
          </button>

          {drawnCard && (
            <div className="bg-white p-12 rounded-lg shadow-md max-w-2xl mx-auto">
              <div className="text-8xl mb-6">🃏</div>
              <h3 className="text-3xl font-light text-gray-800 mb-2">{drawnCard.name}</h3>
              <p className="text-amber-700 font-medium mb-6">{drawnCard.deck} Oracle Deck</p>
              <p className="text-xl text-gray-700 italic leading-relaxed mb-8">"{drawnCard.message}"</p>
              <button 
                onClick={drawCard}
                className="bg-gradient-to-r from-amber-600 to-rose-600 text-white px-8 py-2 rounded-full hover:shadow-md transition"
              >
                Draw Another Card
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const BlogPage = () => (
    <div className="space-y-12">
      <h1 className="text-4xl font-light text-gray-800">Ellen's Blog</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-amber-400">
        <h3 className="text-2xl font-light text-gray-800 mb-2">Welcome to My New Space</h3>
        <p className="text-sm text-amber-700 font-medium mb-4">March 2026</p>
        <p className="text-gray-600 leading-relaxed mb-4">I'm so excited to welcome you to my newly redesigned website...</p>
        <button className="text-amber-700 hover:text-amber-900 font-medium">
          Read More →
        </button>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="space-y-12">
      <h1 className="text-4xl font-light text-gray-800">About Ellen</h1>
      
      <div className="bg-gradient-to-br from-amber-50 to-rose-50 p-12 rounded-lg">
        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
          <strong>Ellen Wolfson Valladares</strong> is an award-winning author, mentor, workshop/retreat leader, and college application/essay consultant.
        </p>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            A native Floridian, she grew up in St. Petersburg and currently lives in South Florida. Valladares believes deeply in the magic of the Universe and loves to help others deepen their spiritual connection, align with joy, and feel empowered to share their gifts with the world.
          </p>

          <p>
            Over the last 30 years, she has taught numerous classes about angels, intuition, meditation, and manifestation. Most recently, she has created two Oracle decks with artist Yasmeen Westwood – <strong>Hummingbird Wisdom</strong> and the <strong>Angels of Healing and Hope Oracle</strong>, both published by Red Feather Mind, Body, Spirit, a division of Schiffer Publishing.
          </p>

          <p>
            <strong>Hummingbird Wisdom</strong> received numerous awards in the 2022 Coalition of Visionary Resources (COVR) Visionary Awards, including Product of the Year, Industry Choice, and People's Choice.
          </p>

          <p>
            Her young adult novel entitled <strong>Crossing the Line</strong> received several awards including a Gold Award for Teen Books from the 2019 Coalition of Visionary Resources (COVR) Visionary Awards.
          </p>

          <p>
            Her other works include a middle grade novel entitled <strong>Jonathan's Journey to Mount Miapu</strong>, a meditation CD entitled "Healing and Manifestation with the Archangels," and a children's book, <strong>Filbert the Lonely Flamingo</strong>, which she co-authored with her brother, Steve Wolfson.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <div className="text-5xl mb-4">🏆</div>
          <h3 className="font-semibold text-gray-800 mb-2">Award-Winning</h3>
          <p className="text-gray-600 text-sm">Multiple COVR awards for her books and decks</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <div className="text-5xl mb-4">📚</div>
          <h3 className="font-semibold text-gray-800 mb-2">Published Author</h3>
          <p className="text-gray-600 text-sm">Children's, middle grade, and young adult books</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <div className="text-5xl mb-4">🌟</div>
          <h3 className="font-semibold text-gray-800 mb-2">Spiritual Teacher</h3>
          <p className="text-gray-600 text-sm">30 years of teaching and mentoring</p>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="space-y-12">
      <h1 className="text-4xl font-light text-gray-800">Get In Touch</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-gray-600">hello@ellenvalladares.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <p className="text-gray-600">(561) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-rose-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Ellen</h3>
            <div className="space-y-3">
              <a href="#" className="block text-amber-700 hover:text-amber-900 font-medium">
                → Facebook
              </a>
              <a href="#" className="block text-amber-700 hover:text-amber-900 font-medium">
                → Instagram
              </a>
              <a href="#" className="block text-amber-700 hover:text-amber-900 font-medium">
                → Goodreads
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Send a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-600 to-rose-600 text-white py-3 rounded-lg hover:shadow-md transition font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const pageMap = {
    home: <HomePage />,
    books: <BooksPage />,
    decks: <OracleDecksPage />,
    mentoring: <MentoringPage />,
    meditation: <MeditationPage />,
    cardpicker: <CardPickerPage />,
    blog: <BlogPage />,
    about: <AboutPage />,
    contact: <ContactPage />
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-2xl font-light text-gray-800 hover:text-amber-700 transition"
          >
            Ellen Valladares
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm transition ${
                  currentPage === item.id
                    ? 'text-amber-700 font-medium'
                    : 'text-gray-600 hover:text-amber-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <button
            onClick={() => setShowPasswordPrompt(true)}
            className="hidden md:block text-xs text-gray-500 hover:text-gray-700"
            title="Admin login"
          >
            <Lock size={16} />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden bg-gray-50 px-4 py-4 border-t border-gray-200">
            <div className="space-y-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded transition ${
                    currentPage === item.id
                      ? 'bg-amber-100 text-amber-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      {showPasswordPrompt && !isAdmin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-sm w-full mx-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Admin Login</h3>
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <input
                type="password"
                placeholder="Enter admin password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                autoFocus
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordPrompt(false);
                    setAdminPassword('');
                  }}
                  className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isAdmin && (
        <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
          <span className="text-sm font-medium">✓ Admin Mode Active</span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm hover:bg-blue-700 px-3 py-1 rounded transition"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-4 py-16">
        {pageMap[currentPage] || <HomePage />}
      </main>

      <footer className="bg-gray-900 text-gray-300 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-white font-light text-lg mb-4">Ellen Valladares</h3>
              <p className="text-sm leading-relaxed">Author • Coach • Spiritual Teacher</p>
            </div>
            <div>
              <h4 className="text-white font-medium text-sm mb-4">Quick Links</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Books</a></li>
                <li><a href="#" className="hover:text-white transition">Oracle Decks</a></li>
                <li><a href="#" className="hover:text-white transition">Mentoring</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium text-sm mb-4">Connect</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-xs text-gray-500 text-center">
              © 2026 Ellen Wolfson Valladares. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EllenValladaresWebsite;
