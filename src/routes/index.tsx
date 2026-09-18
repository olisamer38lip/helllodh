import { createFileRoute } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X, PenTool, Monitor, Palette, Megaphone, Globe, Zap, Star, ArrowUpRight, Mail, MapPin, Phone, Instagram, Twitter, Linkedin } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Studio Bold — Creative Agency' },
      { name: 'description', content: 'Design, branding, and digital experiences that break through the noise. We are Studio Bold — a creative agency for brands that refuse to blend in.' },
    ],
  }),
  component: Home,
})

/* ── Animation helpers ── */

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

/* ── Sections ── */

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-foreground bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-2xl font-black tracking-tight font-display">STUDIO BOLD</a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {['Services', 'Work', 'About', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold uppercase tracking-widest hover:underline"
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="bg-primary text-primary-foreground px-5 py-2 font-bold uppercase tracking-wider text-sm shadow-[var(--shadow-hard-sm)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
            Start a Project
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-1">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t-2 border-foreground bg-background"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {['Services', 'Work', 'About', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="py-3 text-lg font-bold uppercase tracking-wider border-t border-foreground/10"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center border-b-2 border-foreground pt-20 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, currentColor, currentColor 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, currentColor, currentColor 1px, transparent 1px, transparent 40px)'
      }} />

      {/* Decorative accent blocks */}
      <motion.div
        className="absolute top-32 right-[10%] w-32 h-32 bg-accent border-2 border-foreground hidden lg:block"
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-24 left-[8%] w-20 h-20 bg-secondary border-2 border-foreground hidden lg:block"
        animate={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block border-2 border-foreground px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] mb-8">
            Creative Agency — Est. 2024
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter font-display mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          We Make
          <br />
          <span className="bg-primary text-primary-foreground px-4 inline-block">Brands</span>
          <br />
          Unignorable
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-lg md:text-xl leading-relaxed mb-12 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Design, branding, and digital experiences for companies that refuse to blend in. 
          Bold visual identity. Bold digital products. Bold results.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-lg font-bold uppercase tracking-wider border-2 border-foreground shadow-[var(--shadow-hard-md)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none active:translate-x-[5px] active:translate-y-[5px] active:shadow-none"
          >
            Start a Project
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a
            href="#work"
            className="flex items-center gap-2 bg-background text-foreground px-8 py-4 text-lg font-bold uppercase tracking-wider border-2 border-foreground shadow-[var(--shadow-hard-md)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 border-2 border-foreground bg-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          {[
            { value: '200+', label: 'Projects Delivered' },
            { value: '50+', label: 'Happy Clients' },
            { value: '12', label: 'Team Members' },
            { value: '8', label: 'Industry Awards' },
          ].map((stat) => (
            <div key={stat.label} className="p-6 text-center md:border-r-2 border-foreground/20 last:border-0">
              <div className="text-3xl md:text-4xl font-black font-display">{stat.value}</div>
              <div className="text-xs font-semibold uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    { icon: Palette, title: 'Brand Identity', desc: 'Logo, visual system, guidelines, and the story behind every mark. We build brands people remember.', span: 'md:col-span-2 md:row-span-2' },
    { icon: Monitor, title: 'Web Design & Dev', desc: 'High-performance sites, landing pages, and web apps that convert visitors into customers.', span: 'md:col-span-1' },
    { icon: PenTool, title: 'Content Strategy', desc: 'Messaging, copy, and editorial direction that turns your expertise into authority.', span: 'md:col-span-1' },
    { icon: Megaphone, title: 'Campaigns & Ads', desc: 'Creative concepts for social, email, and display that actually get attention.', span: 'md:col-span-1' },
    { icon: Globe, title: 'Digital Marketing', desc: 'SEO, growth, and performance marketing to put your brand in front of the right audience.', span: 'md:col-span-1' },
    { icon: Zap, title: 'Motion & Video', desc: 'Animated explainers, social clips, and brand films that bring your story to life.', span: 'md:col-span-2' },
  ]

  return (
    <section id="services" className="py-24 md:py-32 border-b-2 border-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <span className="inline-block border-2 border-foreground px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] mb-4">What We Do</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight font-display mb-16">
            Full-Service Creative,<br />Zero Compromise
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.08}>
              <div className={`${s.span} group border-2 border-foreground p-8 md:p-10 transition-all hover:bg-secondary hover:translate-x-[2px] hover:translate-y-[2px]`}>
                <s.icon className="mb-6" size={32} strokeWidth={2} />
                <h3 className="text-2xl font-bold mb-3 font-display">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={14} />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  const projects = [
    { title: 'Neon Coffee Roasters', category: 'Brand Identity', color: 'bg-[#1a1a1a]' },
    { title: 'Luxe Interiors', category: 'Web Design', color: 'bg-[#c4a882]' },
    { title: 'FitForge App', category: 'Mobile + Marketing', color: 'bg-[#e63946]' },
    { title: 'Horizon Ventures', category: 'Full Brand', color: 'bg-[#264653]' },
    { title: 'Bloom Botanicals', category: 'E-commerce', color: 'bg-[#2a9d8f]' },
    { title: 'Arcade Studios', category: 'Campaign + Video', color: 'bg-[#6a0dad]' },
  ]

  return (
    <section id="work" className="py-24 md:py-32 border-b-2 border-foreground bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <FadeUp>
            <span className="inline-block border-2 border-foreground px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] mb-4">Selected Work</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight font-display">
              Projects We're<br />Proud Of
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <a href="#contact" className="group flex items-center gap-2 font-bold uppercase tracking-wider border-b-2 border-foreground pb-1 hover:gap-4 transition-all">
              See All Projects <ArrowRight size={16} />
            </a>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {projects.map((p, i) => (
            <FadeUp key={p.title} delay={i * 0.1}>
              <div className="group border-2 border-foreground overflow-hidden bg-background transition-all hover:shadow-[var(--shadow-hard-md)]">
                <div className={`${p.color} h-56 flex items-center justify-center`}>
                  <span className="text-white/80 text-6xl font-black font-display select-none">
                    {p.title.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{p.category}</span>
                  <h3 className="text-xl font-bold mt-1 font-display">{p.title}</h3>
                  <div className="mt-4 flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Case Study <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  const values = [
    { title: 'Bold Over Safe', desc: 'We\'d rather ship something that starts a conversation than something that gets forgotten.' },
    { title: 'Speed Is Strategy', desc: 'Great ideas are worth nothing if they arrive late. We move fast without cutting corners.' },
    { title: 'Craft Matters', desc: 'Every pixel, every word, every transition — we obsess so your audience doesn\'t have to think.' },
    { title: 'Transparent Process', desc: 'You\'ll see every decision, every timeline, every dollar. No black boxes.' },
  ]

  return (
    <section id="about" className="py-24 md:py-32 border-b-2 border-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <FadeUp>
              <span className="inline-block border-2 border-foreground px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] mb-4">About Us</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight font-display mb-8 leading-[1.05]">
                A Team That Thinks<br />
                <span className="bg-primary text-primary-foreground px-3">Different</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-lg leading-relaxed mb-6">
                Studio Bold was founded on a simple belief: the best creative work happens when 
                strategy and artistry refuse to compromise with each other. We are strategists who 
                can design, designers who can code, and storytellers who care about results.
              </p>
              <p className="text-lg leading-relaxed">
                Based in the heart of the city, our 12-person team has delivered over 200 projects 
                for startups, enterprises, and everything in between. We don't chase trends — we set them.
              </p>
            </FadeUp>
          </div>

          <div className="grid gap-0">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.1}>
                <div className="border-2 border-foreground p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 min-w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-black text-sm border-2 border-foreground">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-display mb-2">{v.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    { quote: 'Studio Bold didn\'t just redesign our brand — they gave us a new way to talk to our customers. Revenue up 40% in six months.', author: 'Maya Chen', role: 'CEO, Neon Coffee Roasters' },
    { quote: 'The team is fast, sharp, and genuinely cares about the work. Our new site has the highest conversion rate of any we\'ve ever had.', author: 'James Okonkwo', role: 'CMO, Horizon Ventures' },
    { quote: 'They understood our vision from day one. The campaign they created went viral and tripled our social following in a month.', author: 'Sarah Kim', role: 'Founder, FitForge' },
    { quote: 'Working with Studio Bold feels like having a creative partner, not a vendor. They challenge us in the best way possible.', author: 'David Torres', role: 'Director, Luxe Interiors' },
  ]

  return (
    <section id="testimonials" className="py-24 md:py-32 border-b-2 border-foreground bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <span className="inline-block border-2 border-foreground px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] mb-4">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight font-display mb-16">
            What Our Clients Say
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {testimonials.map((t, i) => (
            <FadeUp key={t.author} delay={i * 0.1}>
              <div className="border-2 border-foreground p-8 md:p-10 bg-background">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-lg leading-relaxed mb-6 font-medium">"{t.quote}"</blockquote>
                <div>
                  <div className="font-bold">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-b-2 border-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <FadeUp>
              <span className="inline-block border-2 border-foreground px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] mb-4">Contact</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight font-display mb-8 leading-[1.05]">
                Let's Build<br />Something Bold
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg leading-relaxed mb-12">
                Ready to stand out? Tell us about your project and we'll get back to you within 24 hours. 
                No pitch decks, no hard sell — just a conversation.
              </p>
            </FadeUp>

            <div className="space-y-6">
              <FadeUp delay={0.2}>
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground p-3 border-2 border-foreground">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</div>
                    <a href="mailto:hello@studiobold.co" className="text-lg font-bold hover:underline">hello@studiobold.co</a>
                  </div>
                </div>
              </FadeUp>
              <FadeUp delay={0.25}>
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground p-3 border-2 border-foreground">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Phone</div>
                    <a href="tel:+1234567890" className="text-lg font-bold hover:underline">+1 (234) 567-890</a>
                  </div>
                </div>
              </FadeUp>
              <FadeUp delay={0.3}>
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground p-3 border-2 border-foreground">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Location</div>
                    <span className="text-lg font-bold">New York, NY</span>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          <FadeUp delay={0.15}>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thank you! We\'ll be in touch within 24 hours.')
              }}
              className="border-2 border-foreground p-8 md:p-10 bg-background"
            >
              <h3 className="text-2xl font-bold mb-8 font-display">Send Us a Message</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2">Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className="w-full border-2 border-foreground bg-background px-4 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="you@company.com"
                      className="w-full border-2 border-foreground bg-background px-4 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2">Service</label>
                  <select className="w-full border-2 border-foreground bg-background px-4 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
                    <option>Brand Identity</option>
                    <option>Web Design & Development</option>
                    <option>Content Strategy</option>
                    <option>Campaigns & Ads</option>
                    <option>Digital Marketing</option>
                    <option>Motion & Video</option>
                    <option>Full Package</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full border-2 border-foreground bg-background px-4 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-8 py-4 text-lg font-bold uppercase tracking-wider border-2 border-foreground shadow-[var(--shadow-hard-md)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none active:translate-x-[5px] active:translate-y-[5px] active:shadow-none"
                >
                  Send Message
                </button>
              </div>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const words = ['BRANDING', 'DESIGN', 'STRATEGY', 'DEVELOPMENT', 'MOTION', 'CAMPAGNS', 'GROWTH']

  return (
    <div className="border-y-2 border-foreground bg-primary text-primary-foreground py-4 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="text-2xl md:text-3xl font-black tracking-tight font-display mx-8">
            {words.join('  •  ')}  •  
          </span>
        ))}
      </motion.div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-b-2 border-foreground bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="text-3xl font-black tracking-tight font-display mb-4">STUDIO BOLD</div>
            <p className="max-w-sm leading-relaxed mb-6">
              Creative agency for brands that refuse to blend in. 
              Design, strategy, and digital experiences from New York to the world.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="border-2 border-primary-foreground p-2 transition-all hover:bg-primary-foreground hover:text-primary"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6">Navigation</h4>
            <div className="flex flex-col gap-3">
              {['Services', 'Work', 'About', 'Testimonials', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="font-medium hover:underline">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6">Services</h4>
            <div className="flex flex-col gap-3">
              {['Brand Identity', 'Web Design', 'Content Strategy', 'Campaigns', 'Digital Marketing', 'Motion & Video'].map((item) => (
                <span key={item} className="font-medium text-primary-foreground/70">{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <span>2024 Studio Bold. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ── Main page ── */

function Home() {
  return (
    <div className="min-h-dvh">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
