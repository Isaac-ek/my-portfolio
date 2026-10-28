import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const initialForm = { name: '', email: '', message: '', _honey: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    try {
      const res = await fetch('https://formsubmit.co/ajax/ekezie.chiemelie@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm(initialForm);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="container mx-auto max-w-6xl px-4 py-20 sm:px-8 md:px-16 lg:px-24"
      id="contact"
      data-aos="fade-up"
    >
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Get In Touch</p>
        <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
          Let&apos;s build{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            something real.
          </span>
        </h2>

        {/* Divider */}
        <div className="mx-auto mt-6 flex items-center justify-center gap-3">
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-400/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60" />
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-fuchsia-400/50" />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        {/* Left — info */}
        <div className="flex flex-col gap-6">
          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/65 p-8 backdrop-blur">
            <h3 className="text-2xl font-black text-white">
              Got a project in mind?
            </h3>
            <p className="mt-4 text-slate-300 leading-7">
              Whether it&apos;s a website, brand identity, cloud setup, or all three — I&apos;m ready to make it happen.
            </p>

            <div className="mt-8 space-y-3">
              <motion.a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-2xl border border-cyan-400/15 bg-cyan-400/5 px-4 py-3.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.15 }}
              >
                <span className="text-lg">✉️</span> {profile.email}
              </motion.a>
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/20 hover:text-cyan-200"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.15 }}
              >
                <span className="text-lg">🔗</span> LinkedIn
              </motion.a>
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/20 hover:text-cyan-200"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.15 }}
              >
                <span className="text-lg">💻</span> GitHub
              </motion.a>
            </div>
          </div>

          {/* Available services teaser */}
          <div className="rounded-[1.75rem] border border-fuchsia-400/20 bg-fuchsia-400/5 p-6 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wider text-fuchsia-300">I can help with</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Web Dev', 'Brand Design', 'Cloud Setup', 'UI/UX', 'Social Media Assets', 'E-Commerce'].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/8 px-3 py-1 text-xs font-medium text-fuchsia-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="relative rounded-[1.75rem] border border-white/10 bg-slate-950/65 p-8 backdrop-blur overflow-hidden">
          {/* Subtle glow top-right */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/8 blur-3xl" />

          <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
            <input type="text" name="_honey" style={{ display: 'none' }} onChange={handleChange} value={form._honey || ''} />

            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-200">Your Name</label>
              <input
                id="name"
                className="min-h-[52px] w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-base text-white outline-none transition focus:border-cyan-400/60 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)]"
                type="text"
                name="name"
                placeholder="What should I call you?"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-200">Email Address</label>
              <input
                id="email"
                className="min-h-[52px] w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-base text-white outline-none transition focus:border-cyan-400/60 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)]"
                type="email"
                name="email"
                placeholder="Your email address"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-200">Project Details</label>
              <textarea
                id="message"
                className="min-h-[150px] w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-base text-white outline-none transition focus:border-cyan-400/60 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] resize-none"
                name="message"
                placeholder="Tell me what you're building — or what you want to build."
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 py-4 text-base font-black text-slate-950 transition disabled:opacity-50"
              disabled={loading}
              whileHover={{ scale: 1.02, boxShadow: '0 0 36px rgba(6,182,212,0.45)' }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? 'Sending…' : 'Send Message →'}
            </motion.button>

            {status === 'success' && (
              <p className="text-center text-base font-semibold text-emerald-400">
                ✓ Message sent — I&apos;ll get back to you soon!
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-base font-semibold text-red-400">
                Something went wrong. Try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
