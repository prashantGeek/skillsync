'use client';

import Card, { CardContent } from '../ui/Card';
import Button from '../ui/Button';

const stats = [
  {
    number: '15,000+',
    label: 'Companies Trust Us',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    number: '25,000+',
    label: 'Expert-Led Courses',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    number: '50M+',
    label: 'Students Worldwide',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    number: '98%',
    label: 'Success Rate',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const values = [
  {
    title: 'Innovation',
    description: 'We continuously evolve our platform with cutting-edge technology to deliver the best learning experience.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: 'Excellence',
    description: 'We partner with industry experts to ensure our content meets the highest standards of quality and relevance.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: 'Accessibility',
    description: 'Learning should be available to everyone, everywhere. We make quality education accessible globally.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Impact',
    description: 'We measure success by the real-world impact our learners create in their organizations and communities.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-Founder',
    bio: 'Former Head of Learning at Google. 15+ years in EdTech innovation.',
    image: '/api/placeholder/150/150',
    linkedin: '#'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO & Co-Founder',
    bio: 'Ex-Netflix Engineering Lead. Expert in scalable learning platforms.',
    image: '/api/placeholder/150/150',
    linkedin: '#'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Head of Content',
    bio: 'PhD in Educational Psychology. Former Stanford Learning Scientist.',
    image: '/api/placeholder/150/150',
    linkedin: '#'
  },
  {
    name: 'David Kim',
    role: 'VP of Product',
    bio: '10+ years at Microsoft and Amazon. Product strategy expert.',
    image: '/api/placeholder/150/150',
    linkedin: '#'
  }
];

export default function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero About */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6">
            About <span className="text-purple-600">SkillSync</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            We&apos;re on a mission to democratize professional learning and help organizations 
            build the workforce of the future through expert-led, skills-based education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('our-mission')}
              className="px-8 py-3 text-lg bg-purple-600 hover:bg-purple-700 text-white hover:text-white font-bold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 hover:shadow-lg hover:shadow-purple-500/20"
            >
              Join Our Mission
            </Button>
            <Button 
              onClick={() => scrollToSection('our-story')}
              className="px-8 py-3 text-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-white font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 hover:shadow-lg hover:shadow-purple-500/20"
            >
              Our Story
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-gray-50 border-purple-200 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10">
                <CardContent>
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Story */}
        <div id="our-story" className="mb-20 scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-black">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020, SkillSync emerged from a simple observation: the rapid pace 
                  of technological change was leaving many professionals behind. Traditional 
                  corporate training wasn&apos;t keeping up with the skills demands of the modern workplace.
                </p>
                <p>
                  Our founders, coming from backgrounds at Google, Netflix, and Stanford, 
                  recognized the need for a learning platform that could bridge this gap. 
                  They envisioned a world where anyone, anywhere, could access world-class 
                  professional education tailored to their specific needs.
                </p>
                <p>
                  Today, SkillSync serves over 15,000 companies worldwide, from startups 
                  to Fortune 500 enterprises, helping them build resilient, skilled teams 
                  that drive innovation and growth.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-200">
                <div className="aspect-square bg-purple-100 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 12v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <p className="text-purple-600 font-semibold text-lg">Innovation Since 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment to transforming professional learning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-white border-purple-200 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 h-full">
                <CardContent>
                  <div className="w-16 h-16 bg-purple-100 border border-purple-300 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">                  Meet the experienced leaders driving SkillSync&apos;s mission to transform professional learning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center bg-white border-purple-200 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10">
                <CardContent>
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-500">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <a 
                    href={member.linkedin} 
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div id="our-mission" className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12 text-center text-white scroll-mt-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-8">
            To democratize access to world-class professional education and empower 
            individuals and organizations to thrive in an ever-evolving digital economy.
          </p>
          <Button 
            onClick={() => scrollToSection('our-story')}
            className="px-8 py-3 text-lg bg-white text-purple-600 hover:bg-gray-100 hover:text-purple-700 font-bold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 hover:shadow-lg"
          >
            Learn Our Story
          </Button>
        </div>
      </div>
    </section>
  );
}
