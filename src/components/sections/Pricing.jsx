import React, { useState, useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import emailjs from "@emailjs/browser";

const plans = [

  {
    name: "30-Day Velocity Sprint",
    description: "Multi-feature shipping engine",
    price: "$13k",
    period: "- $17k",
    features: [
      "2-4 features shipped",
      "Weekly releases",
      "Larger pod",
      "Advanced AI architecture",
      "Dedicated Project Manager",
    ],
    cta: "Book a Call ",
    featured: false
  },
  {
    name: "AI Feature Sprint",
    description: "Launch a production ready feature in 14 Days",
    price: "$6k",
    period: "- $7k",
    features: [
      "1 production AI feature",
      "2-3 senior engineers",
      "Delivered in 14 days",
      "50/50 payment split",
      "14-day delivery guarantee",
      "Full source code ownership "
    ],
    cta: "Get Started",
    featured: true,
    badge: "Most Popular"
  },
  {
    name: "Dedicated AI Pod",
    description: "Your Long-term AI partner",
    price: "Custom",
    period: "",
    features: [
      "Ongoing development",
      "Weekly shipping cycles",
      "Fully managed team",
      "Replace hiring entirely",
      "Custom security compliance",
    ],
    cta: "Talk to Us",
    featured: false
  }
];

export default function Pricing() {

  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    website: "",
    role: "",
    budget: "",
    startDate: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_ze85vi9",
        "template_y6t7jo9",
        {
          fullName: formData.fullName,
          email: formData.email,
          company: formData.company,
          website: formData.website,
          role: formData.role,
          budget: formData.budget,
          startDate: formData.startDate,
          message: formData.message,
          to_email: "aditya@brainerhub.com",
          time: new Date().toLocaleString()
        },
        "d4EdVtDh0pwET-Qi_"
      );

      setShowModal(false);
      setShowSuccessModal(true);

      setFormData({
        fullName: "",
        email: "",
        company: "",
        website: "",
        role: "",
        budget: "",
        startDate: "",
        message: ""
      });
    } catch (error) {
      console.error("Email send failed:", error);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <section className="relative my-24 md:my-36" id='pricing'>
      <div className="section-container">
        <div className="text-center mb-12 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
            <span className="text-xs font-bold text-brand-400 tracking-widest uppercase">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Simple, <span className="text-brand-gradient">fixed sprint</span> pricing
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            High-impact delivery, without full-time hiring costs.

          </p>
          <span className="mt-2.5 inline-block text-brand-400 text-xs max-w-2xl mx-auto py-1 px-3 bg-brand-400/20 border border-brand-400/40 rounded-lg">Hiring 2-3 senior engineers costs $15k-$21k/month and takes months to deliver</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 ">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card group ${plan.featured ? 'pricing-card-featured z-10' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-gradient text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-1 md:mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-extrabold text-white">{plan.price}</span>
                {plan.period && <span className="text-gray-400 font-medium">{plan.period}</span>}
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className={`w-4 h-4 text-[#ff6b6b]`} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`text-base py-3 px-5 group/btn w-full sm:w-auto flex text-sm gap-2 items-center justify-center  rounded-xl font-bold transition-all duration-300 ${plan.featured
                ? 'btn-primary'
                : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                }`} onClick={() => {
                  if (plan.price === "Custom") {
                    setShowModal(true);
                  } else {
                    window.open("https://cal.com/aadi-raj-sinh-tmtqkm/30min", "_blank");
                  }
                }}>
                {plan.cta} <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[51] px-4">
          <div className="bg-[#111114] max-h-[90vh] overflow-auto border border-white/20 shadow-[0_0_30px_rgba(194,69,80,0.50)] rounded-3xl p-6 md:p-10 w-full max-w-5xl relative">

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 text-white/80 text-md"
            >
              ✕
            </button>
            <div className="flex flex-col gap-2 mb-7">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Talk to Us
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed mb-0 flex-1 group-hover:text-gray-400 transition-colors duration-300">
                Tell us about your AI project requirements, and our team will contact you.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  className="input-style"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Work Email *"
                  className="input-style"
                  required
                />
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="input-style"
                />
                <input
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="Website / Product URL"
                  className="input-style"
                />
                <div className="md:col-span-2 grid md:grid-cols-3 gap-3 md:gap-4"> 
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="input-style"
                >
                  <option value="" disabled>Your Role</option>
                  <option value="Founder">Founder</option>
                  <option value="CTO">CTO</option>
                  <option value="Product Manager">Product Manager</option>
                </select>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="input-style"
                >
                  <option value="" disabled>Budget Range</option>
                  <option value="$5k - $10k">$5k - $10k</option>
                  <option value="$10k - $20k">$10k - $20k</option>
                  <option value="$20k+">$20k+</option>
                </select>
                <select
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="input-style"
                >
                  <option value="" disabled>Desired Start Date</option>
                  <option value="Immediately">Immediately</option>
                  <option value="Within 2 Weeks">Within 2 Weeks</option>
                  <option value="Within 1 Month">Within 1 Month</option>
                </select>
                </div>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="What are you looking to build? (AI use case, features, roadmap, challenges)"
                className="input-style w-full mt-4 resize-none"
              />

              <button
                type="submit"
                className="w-full mt-5 text-base py-3 px-5 group/btn flex gap-2 items-center justify-center  rounded-xl font-bold transition-all duration-300 btn-primary"
              >
                Apply for Dedicated AI Pod
              </button>
            </form>
          </div>
        </div>
      )}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[52] px-4">
          <div className="bg-[#111114] border border-white/20 shadow-[0_0_30px_rgba(194,69,80,0.50)] rounded-3xl px-6 md:px-10 py-10 w-full max-w-2xl relative">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-6 right-6 text-white/80 text-md"
            >
              ×
            </button>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-5">
                Thanks for <span className="text-brand-gradient">reaching out!</span>
              </h2>

              <p className="text-gray-400 text-base max-w-3xl mx-auto">
                We've received your details and will contact you within 24 hours to
                discuss your requirements.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
