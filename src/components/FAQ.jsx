import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { faqs } from "../data/siteData.js";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-pad">
      <div className="container-shell">
        <SectionHeader title="Pertanyaan yang Sering Muncul" description="Jawaban dibuat hati-hati: fokus awal WhatsApp, beberapa integrasi bisa disiapkan sebagai roadmap atau custom workflow." />
        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article className={`faq-item ${isOpen ? "open" : ""}`} key={faq.question}>
                <button type="button" className="faq-question" aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                  <span>{faq.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0" />
                </button>
                {isOpen ? <p className="faq-answer">{faq.answer}</p> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
