'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import '../style/aboutus.css'; 

const childVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function AboutUs() {
  return (
    <motion.div className="max-w-6xl mx-auto space-y-16">
      {/* Intro Section */}
      <motion.section variants={childVariant}>
        <p className="text-sm uppercase tracking-widest text-gray-400 barlow-condensed-regular">Get to know us</p>
        <h1 className="text-5xl font-bold barlow-condensed-bold mb-4">About Mini Digital Media</h1>
        <p className="text-gray-300 leading-relaxed text-lg">
          We are a new-age digital agency crafting performance-driven campaigns, brand stories, and
          meaningful creative strategies. Our goal is to bridge the gap between brands and their digital audience with
          clarity, creativity, and speed.
        </p>
      </motion.section>
      
      <motion.section variants={childVariant} className="bg-[#232323] rounded-2xl p-10 shadow-xl">
        <h2 className="text-4xl font-bold barlow-condensed-bold mb-6">What We Do</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
          <li>Performance Marketing &amp; Lead Generation</li>
          <li>App Promotion &amp; Install Campaigns</li>
          <li>Influencer &amp; Creator Collaborations</li>
          <li>Short-form Video Content Production</li>
          <li>Social Media &amp; Content Strategy</li>
        </ul>
      </motion.section>

      <motion.section variants={childVariant} className="bg-[#232323] rounded-2xl p-10 shadow-xl">
        <h2 className="text-4xl font-bold barlow-condensed-bold mb-4">How We Work</h2>
        <p className="text-gray-300 text-lg">
          We collaborate closely with each client to understand their goals and craft tailor-made digital solutions.
          Our approach combines bold creative ideas with sharp analytical execution.
        </p>
      </motion.section>

      <motion.section variants={childVariant} className="bg-[#232323] rounded-2xl p-10 shadow-xl">
        <h2 className="text-4xl font-bold barlow-condensed-bold mb-4">Industries We Serve</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-gray-300 text-lg">
          <p>Fashion &amp; Lifestyle</p>
          <p>Fintech</p>
          <p>Gaming &amp; Apps</p>
          <p>Media &amp; Entertainment</p>
          <p>Startups &amp; D2C Brands</p>
          <p>Travel &amp; Hospitality</p>
        </div>
      </motion.section>

      <motion.section variants={childVariant} className="bg-[#232323] rounded-2xl p-10 shadow-xl">
        <h2 className="text-4xl font-bold barlow-condensed-bold mb-4">Why Brands Trust Us</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
          <li>Quick execution with quality output</li>
          <li>Creative and strategic balance</li>
          <li>Experience across multiple industries</li>
          <li>Data-driven performance focus</li>
        </ul>
      </motion.section>

      {/* CTA Section */}
      <motion.section variants={childVariant} className="text-center space-y-6">
        <h2 className="text-3xl font-bold barlow-condensed-bold">Let’s Work Together</h2>
        <div className="flex justify-center gap-6 mt-4">
          <Link
            href="/contact"
            className="bg-white text-black px-8 py-3 rounded-md text-lg font-semibold barlow-condensed-semibold transition transform hover:scale-105 hover:shadow-lg"
          >
            Contact Us
          </Link>
          <Link
            href="/"
            className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-md text-lg font-semibold barlow-condensed-semibold transition transform hover:scale-105 hover:shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
}














