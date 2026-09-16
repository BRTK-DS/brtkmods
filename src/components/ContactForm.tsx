import { useState } from "react";
import type { FormEvent } from "react";
import { Check, Send, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

type Language = "pl" | "en";
type FormStatus = "idle" | "submitting" | "success" | "error";

const responseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd__L__PbkZXe3t1gCJ2JOUvoY5rdNgFGepNpRlfoFT4WjXCg/formResponse";
const consentValue = "Wyrażam zgodę na kontakt w sprawie mojego zapytania. Wiem, że podanie danych jest dobrowolne i mogę wycofać zgodę.";

const copy = {
  pl: {
    intro: "Wpisz dane bezpośrednio na stronie. Zgłoszenie zostanie zapisane w Google Forms i powiązanym arkuszu Google Sheets.",
    name: "Imię / nazwa", namePlaceholder: "Jak mam się do Ciebie zwracać?", email: "E-mail", emailPlaceholder: "ty@email.com",
    type: "Rodzaj współpracy", choose: "Wybierz opcję", options: [{ label: "Nowy mod od podstaw", value: "Nowy mod od podstaw" }, { label: "Rozwój istniejącego moda", value: "Rozwój istniejącego moda" }, { label: "Audyt lub optymalizacja", value: "Audyt lub optymalizacja" }, { label: "Inna propozycja", value: "Inna propozycja" }],
    message: "Opowiedz o projekcie", messagePlaceholder: "Jaki jest Twój pomysł? Dla jakiej wersji Minecrafta?", consent: "Wyrażam zgodę na kontakt w sprawie mojego zapytania. Wiem, że podanie danych jest dobrowolne i mogę wycofać zgodę.",
    send: "Wyślij zgłoszenie", sending: "Wysyłanie…", successTitle: "Zgłoszenie wysłane", successText: "Dziękuję — wiadomość została przekazana do Google Forms.", again: "Wyślij kolejne zgłoszenie", error: "Nie udało się wysłać zgłoszenia. Spróbuj ponownie.", privacy: "Polityka prywatności", terms: "Regulamin", privacyHint: "Dane trafiają do Google Forms wyłącznie w celu obsługi zapytania. Po zakończeniu kontaktu zostaną usunięte z arkusza.",
  },
  en: {
    intro: "Enter your details directly on the website. Your enquiry will be saved in Google Forms and the connected Google Sheets spreadsheet.",
    name: "Name / handle", namePlaceholder: "How should I address you?", email: "Email", emailPlaceholder: "you@email.com",
    type: "Type of collaboration", choose: "Choose an option", options: [{ label: "New mod from scratch", value: "Nowy mod od podstaw" }, { label: "Develop an existing mod", value: "Rozwój istniejącego moda" }, { label: "Audit or optimization", value: "Audyt lub optymalizacja" }, { label: "Another proposal", value: "Inna propozycja" }],
    message: "Tell me about the project", messagePlaceholder: "What is your idea? Which Minecraft version?", consent: "I agree to be contacted about my enquiry. I understand that providing my data is voluntary and that I can withdraw my consent.",
    send: "Send enquiry", sending: "Sending…", successTitle: "Enquiry sent", successText: "Thank you — your message was forwarded to Google Forms.", again: "Send another enquiry", error: "The enquiry could not be sent. Please try again.", privacy: "Privacy policy", terms: "Terms", privacyHint: "Data is sent to Google Forms only to handle your enquiry. It will be removed from the spreadsheet after contact ends.",
  },
} as const;

const ContactForm = ({ language }: { language: Language }) => {
  const text = copy[language];
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      await fetch(responseUrl, { method: "POST", mode: "no-cors", body: formData });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
        <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-300"><Check size={25} /></span>
        <h3 className="text-2xl font-semibold text-white">{text.successTitle}</h3>
        <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">{text.successText}</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-7 text-sm font-medium text-cyan-300 hover:text-white">{text.again}</button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05] p-4 text-sm leading-6 text-slate-300"><div className="flex items-start gap-3"><ShieldCheck size={18} className="mt-0.5 shrink-0 text-cyan-300" /><span>{text.intro}</span></div></div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2"><label className="field-label">{text.name}<input required name="entry.1727763040" type="text" placeholder={text.namePlaceholder} className="field-input" /></label><label className="field-label">{text.email}<input required name="entry.457838199" type="email" placeholder={text.emailPlaceholder} className="field-input" /></label></div>
        <label className="field-label">{text.type}<select required name="entry.203760421" defaultValue="" className="field-input"><option value="" disabled>{text.choose}</option>{text.options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
        <label className="field-label">{text.message}<textarea required name="entry.1424639160" rows={5} placeholder={text.messagePlaceholder} className="field-input resize-none" /></label>
        <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-slate-500"><input required name="entry.1280009072" value={consentValue} type="checkbox" className="consent-checkbox mt-0.5" /> <span>{text.consent}</span></label>
        {status === "error" && <p role="alert" className="text-sm text-red-300">{text.error}</p>}
        <button disabled={status === "submitting"} type="submit" className="primary-button w-full justify-center disabled:cursor-wait disabled:opacity-60">{status === "submitting" ? text.sending : text.send} <Send size={15} /></button>
        <p className="flex items-start gap-2 text-[10px] leading-4 text-slate-600"><ShieldCheck size={13} className="mt-0.5 shrink-0 text-cyan-300/70" /> <span>{text.privacyHint} <Link to="/polityka-prywatnosci" className="text-cyan-300 hover:text-white">{text.privacy}</Link><span className="mx-1">·</span><Link to="/regulamin" className="text-cyan-300 hover:text-white">{text.terms}</Link></span></p>
      </form>
    </div>
  );
};

export default ContactForm;
