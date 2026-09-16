import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-[#060b13] px-5 py-8 text-slate-200 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-[850px]">
        <Link to="/" className="mb-12 inline-flex items-center gap-2 text-sm text-cyan-300 transition-colors hover:text-white"><ArrowLeft size={16} /> BRTKMods.com</Link>
        <article className="rounded-2xl border border-white/[0.1] bg-[#0c1423] p-6 sm:p-10">
          <div className="mb-8 flex items-center gap-3 text-cyan-300"><ShieldCheck size={22} /><span className="font-mono text-xs uppercase tracking-[0.18em]">Informacja prawna</span></div>
          <h1 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">Polityka prywatności</h1>
          <p className="mt-3 text-sm text-slate-500">Ostatnia aktualizacja: 21 lutego 2025 r.</p>
          <div className="legal-copy mt-10 space-y-8">
            <section><h2>1. Administrator danych</h2><p>Administratorem danych osobowych zbieranych za pośrednictwem BRTKMods.com jest osoba fizyczna działająca w internecie pod pseudonimem BRTK. Kontakt w sprawach danych osobowych: <a href="mailto:brtkcontact@gmail.com">brtkcontact@gmail.com</a>.</p><p>Administrator nie prowadzi działalności gospodarczej w ramach tej strony i udostępnia wyłącznie adres e-mail jako kontakt. W razie potrzeby podania dodatkowych danych kontaktowych administrator przekaże je bezpośrednio osobie, której dane dotyczą.</p></section>
            <section><h2>2. Jakie dane zbieramy</h2><p>W formularzu zlecenia mogą być podane: imię lub nazwa, adres e-mail, rodzaj współpracy, treść wiadomości oraz informacja o wyrażeniu zgody na kontakt. Nie prosimy o dane wrażliwe ani dane, które nie są potrzebne do odpowiedzi na zapytanie.</p></section>
            <section><h2>3. Cel i podstawa przetwarzania</h2><p>Dane są przetwarzane w celu odczytania i obsługi zapytania dotyczącego wykonania, rozwoju lub audytu moda Minecraft, a także podjęcia działań przed ewentualnym zawarciem umowy. Podstawą jest art. 6 ust. 1 lit. b lub f RODO, zależnie od charakteru zapytania, oraz zgoda na kontakt wyrażona w formularzu, gdy jest wymagana.</p></section>
            <section><h2>4. Google Forms i Google Sheets</h2><p>Formularz wyświetlany na stronie zbiera dane bezpośrednio w interfejsie BRTKMods.com, a następnie wysyła je do endpointu Google Forms. Odpowiedzi są zapisywane w arkuszu Google Sheets należącym do administratora. Google może przetwarzać dane jako dostawca usługi zgodnie ze swoją <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">polityką prywatności</a> oraz warunkami Google Forms.</p><p>Usługa Google może powodować przetwarzanie danych poza Europejskim Obszarem Gospodarczym na zasadach opisanych przez Google, w tym z zastosowaniem odpowiednich mechanizmów transferu wymaganych przez RODO.</p></section>
            <section><h2>5. Okres przechowywania</h2><p>Zgłoszenia są przechowywane w Google Sheets wyłącznie do czasu zakończenia kontaktu i obsługi zapytania. Po tym czasie administrator usuwa odpowiedź, chyba że dalsze przechowywanie jest konieczne do ustalenia, dochodzenia lub obrony roszczeń albo wynika z obowiązku prawnego.</p></section>
            <section><h2>6. Prawa osoby, której dane dotyczą</h2><p>Przysługuje Ci prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu oraz wycofania zgody w dowolnym momencie. Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania przed jej wycofaniem.</p><p>W sprawach dotyczących danych napisz na <a href="mailto:brtkcontact@gmail.com">brtkcontact@gmail.com</a>. Masz także prawo złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych.</p></section>
            <section><h2>7. Cookies i technologie zewnętrzne</h2><p>Strona nie prowadzi własnej analityki i nie używa marketingowych plików cookies. Dane z formularza są wysyłane do Google Forms bez przekierowania użytkownika. Osadzenia YouTube oraz połączenie z Google Forms mogą korzystać z własnych technologii Google, zgodnie z zasadami opisanymi przez Google.</p></section>
            <section><h2>8. Zmiany polityki</h2><p>Polityka może zostać zaktualizowana, gdy zmieni się sposób działania strony, formularza lub zakres przetwarzania danych. Aktualna wersja jest publikowana na tej stronie.</p></section>
          </div>
        </article>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
