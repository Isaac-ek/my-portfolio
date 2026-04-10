import React, { useState } from 'react';
import { profile } from '../data/profile';

const initialForm = { name: '', email: '', message: '' };

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
    // Example: Use Formspree (replace with your own endpoint)
    try {
      const res = await fetch('https://formspree.io/f/manbpgbp', {
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
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/65 p-8 text-left backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
          <h2 className="mt-4 text-4xl font-black text-white">Let&apos;s build something solid.</h2>
          <p className="mt-5 max-w-md text-lg leading-8 text-slate-300">
            If you need a portfolio, business website, landing page, or frontend support for an existing product, I&apos;d love to hear about it.
          </p>
          <div className="mt-8 space-y-4">
            <a href={`mailto:${profile.email}`} className="block text-slate-100 transition hover:text-cyan-200">
              {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="block text-slate-100 transition hover:text-cyan-200">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="block text-slate-100 transition hover:text-cyan-200">
              GitHub
            </a>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="mb-2 block font-semibold text-slate-200">Name</label>
              <input
                id="name"
                className="min-h-[56px] w-full rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-lg text-white outline-none transition focus:border-cyan-300"
                type="text"
                name="name"
                placeholder="What should I call you?"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block font-semibold text-slate-200">Email</label>
              <input
                id="email"
                className="min-h-[56px] w-full rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-lg text-white outline-none transition focus:border-cyan-300"
                type="email"
                name="email"
                placeholder="Your email address"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block font-semibold text-slate-200">Project Details</label>
              <textarea
                id="message"
                className="min-h-[160px] w-full rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-lg text-white outline-none transition focus:border-cyan-300"
                name="message"
                placeholder="Tell me what you're trying to build."
                rows={7}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-cyan-400 py-4 text-lg font-bold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <div className="text-center text-lg text-green-400">Message sent successfully.</div>
            )}
            {status === 'error' && (
              <div className="text-center text-lg text-red-400">Something went wrong. Please try again.</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
