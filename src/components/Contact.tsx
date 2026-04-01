"use client";

import { motion } from "framer-motion";
import { HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2";
import ContactForm from "./ContactForm";

const contactMethods = [
  {
    icon: HiEnvelope,
    label: "Email",
    value: "rantika@example.com",
    href: "mailto:rantika@example.com",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: "+62 XXX-XXXX-XXXX",
    href: "tel:+62",
  },
  {
    icon: HiMapPin,
    label: "Location",
    value: "Indonesia",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section bg-gray-50 dark:bg-dark-secondary/50"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let&apos;s connect and create something
            amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {method.href ? (
                  <a
                    href={method.href}
                    className="glass p-6 rounded-lg text-center hover:border-primary transition-all group block"
                  >
                    <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {method.label}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors">
                      {method.value}
                    </p>
                  </a>
                ) : (
                  <div className="glass p-6 rounded-lg text-center">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                      {method.label}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {method.value}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
