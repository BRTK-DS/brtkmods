import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <main className="min-h-screen bg-[#060b13] px-5 py-8 text-slate-200 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-[850px]">
        <Link to="/" className="mb-12 inline-flex items-center gap-2 text-sm text-cyan-300 transition-colors hover:text-white"><ArrowLeft size={16} /> BRTKMods.com</Link>
        <article className="rounded-2xl border border-white/[0.1] bg-[#0c1423] p-6 sm:p-10">
          <div className="mb-8 flex items-center gap-3 text-cyan-300"><FileText size={22} /><span className="font-mono text-xs uppercase tracking-[0.18em]">Informacja prawna</span></div>
          <h1 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">Regulamin serwisu</h1>
          <p className="mt-3 text-sm text-slate-500">Ostatnia aktualizacja: 21 lutego 2025 r.</p>

          <div className="legal-copy mt-10 space-y-8">
            <section><h2>1. Postanowienia ogólne</h2><p>Regulamin określa zasady korzystania z serwisu BRTKMods.com. Administratorem danych osobowych zbieranych za pośrednictwem BRTKMods.com jest osoba fizyczna działająca w internecie pod pseudonimem BRTK. Serwis prezentuje portfolio modów Minecraft oraz umożliwia przesłanie zapytania dotyczącego współpracy.</p></section>
            <section><h2>2. Kontakt i zapytania</h2><p>Zapytanie można przesłać przez formularz Google Forms dostępny z poziomu serwisu. Podanie danych jest dobrowolne, ale niezbędne do otrzymania odpowiedzi. Zgłoszenie nie oznacza zawarcia umowy ani przyjęcia zlecenia.</p><p>Kontakt w sprawach serwisu: <a href="mailto:brtkcontact@gmail.com">brtkcontact@gmail.com</a>.</p></section>
            <section><h2>3. Zasady korzystania</h2><p>Użytkownik zobowiązuje się korzystać z serwisu zgodnie z prawem, dobrymi obyczajami i niniejszym regulaminem. Zabronione jest przesyłanie treści bezprawnych, naruszających prawa osób trzecich, zawierających złośliwe oprogramowanie lub próbujących zakłócić działanie serwisu.</p></section>
            <section><h2>4. Treści, mody i prawa autorskie</h2><p>Materiały prezentowane w serwisie, w tym teksty, grafiki, kod i opisy projektów, są chronione prawem autorskim, chyba że wskazano inaczej. Ich kopiowanie, rozpowszechnianie lub wykorzystywanie komercyjne wymaga zgody uprawnionego.</p><p>Linki do pobierania prowadzą do zewnętrznych repozytoriów lub stron. Warunki korzystania z pobranych projektów mogą wynikać z licencji danego repozytorium.</p></section>
            <section><h2>5. Zewnętrzne usługi</h2><p>Serwis korzysta z linków i osadzeń YouTube, GitHub oraz Google Forms. Usługi te działają na podstawie własnych regulaminów i polityk prywatności. Administrator nie odpowiada za dostępność, treść ani zmiany wprowadzane przez zewnętrznych dostawców.</p></section>
            <section><h2>6. Odpowiedzialność</h2><p>Portfolio ma charakter informacyjny. Opisy projektów nie stanowią gwarancji określonych rezultatów ani oferty w rozumieniu przepisów Kodeksu cywilnego. Szczegóły ewentualnej współpracy, wynagrodzenia, terminów, zakresu i licencji wymagają osobnych ustaleń.</p></section>
            <section><h2>7. Reklamacje i kontakt</h2><p>Uwagi dotyczące działania serwisu można zgłaszać na adres <a href="mailto:brtkcontact@gmail.com">brtkcontact@gmail.com</a>. Zgłoszenie powinno zawierać opis problemu oraz dane umożliwiające odpowiedź.</p></section>
            <section><h2>8. Zmiany regulaminu i prawo właściwe</h2><p>Regulamin może być aktualizowany z ważnych przyczyn, w szczególności przy zmianie funkcji serwisu lub przepisów prawa. Do korzystania z serwisu stosuje się prawo polskie, z uwzględnieniem bezwzględnie obowiązujących praw konsumenta, jeżeli mają zastosowanie.</p></section>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Terms;
