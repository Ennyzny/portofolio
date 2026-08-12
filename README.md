# Eniz Dajić — Portfolio

Lična portfolio stranica radjena sa Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Pokretanje lokalno

```bash
npm install
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000).

## Build za produkciju

```bash
npm run build
npm run start
```

## Struktura

```
app/
  layout.tsx      → fontovi (Space Grotesk, Inter, JetBrains Mono) + metadata
  page.tsx         → sastavlja sve sekcije
  globals.css       → Tailwind + globalni stilovi (belt-stripe motiv, focus stanja)
components/          → Nav, Hero, About, Experience, Projects, Skills, Education, Contact
lib/data.ts          → sav sadržaj sa CV-a na jednom mjestu — ovdje mijenjaš tekst
```

## Dizajn

Vizuelni motiv je traka pojasa (belt stripe) — nod na crni pojas, 2. dan u karateu — koji se
provlači kroz hero sekciju, razdjelnike sekcija i dossier karticu. Paleta: tamno mastilo-plava
pozadina (#0A0C11), zlatni akcent (#DFA94F) i prigušeni teal za tehnički detalj (#57B6A5).
Fontovi: Space Grotesk (naslovi), Inter (tekst), JetBrains Mono (labele, tagovi, brojevi).
