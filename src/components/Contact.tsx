import React, { useState } from 'react';

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
    <section className="container mx-auto py-20 px-4 max-w-xl bg-transparent" id="contact" data-aos="fade-up">
      <h2 className="text-5xl font-bold mb-10 text-center text-blue-100 font-jetbrains group-hover:underline group-hover:decoration-wavy group-hover:decoration-blue-400 group">Contact</h2>
      <div className="flex flex-col items-center mb-8">
        <span className="text-lg text-blue-200 mb-2 break-words whitespace-normal">Let's connect</span>
        <p className="text-blue-300 text-center mb-4 max-w-md break-words whitespace-normal">
          Do you have a project for me or a Job? Feel free to contact me by filling the form below.
        </p>
      </div>
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-blue-200 mb-1 font-semibold">Name</label>
          <input
            id="name"
            className="w-full p-6 min-h-[56px] rounded border border-blue-900 bg-[#17203a] text-blue-100 text-xl"
            type="text"
            name="name"
            placeholder="What's your name?"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-blue-200 mb-1 font-semibold">Email</label>
          <input
            id="email"
            className="w-full p-6 min-h-[56px] rounded border border-blue-900 bg-[#17203a] text-blue-100 text-xl"
            type="email"
            name="email"
            placeholder="What's your email?"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-blue-200 mb-1 font-semibold">Message</label>
          <textarea
            id="message"
            className="w-full p-6 min-h-[120px] rounded border border-blue-900 bg-[#17203a] text-blue-100 text-xl"
            name="message"
            placeholder="Help me help you!"
            rows={8}
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
        {status === 'success' && (
          <div className="text-green-500 text-center text-lg">Message sent! ✅</div>
        )}
        {status === 'error' && (
          <div className="text-red-500 text-center text-lg">Something went wrong. Please try again.</div>
        )}
      </form>
      <div
        className="flex items-center justify-center bg-blue-900 rounded-xl shadow-lg p-6 min-w-[180px] min-h-[180px] max-w-xs w-full h-full break-words whitespace-normal text-center"
      >
        <span className="font-bold text-2xl sm:text-3xl text-blue-100 break-words whitespace-normal">
          {skill.name}
        </span>
      </div>
    </section>
  );
};

export default Contact;
