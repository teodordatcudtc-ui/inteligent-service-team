# INTELIGENT SERVICE TEAM – Site Web

Site multi-pagină Next.js pentru business-ul INTELIGENT SERVICE TEAM – service camioane și autoutilitare în Timișoara.

---

## Arhitectură

### Stack
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

**Alegerea App Router:** Suport nativ pentru metadata SEO, layout-uri reutilizabile, Server Components, streaming și o experiență modernă de dezvoltare.

### Structură pagini
| Ruta | Pagină | Descriere |
|------|--------|-----------|
| `/` | Acasă | Hero, servicii, ofertă lunii, CTA |
| `/servicii-camioane` | Servicii Camioane | Listă servicii camioane |
| `/servicii-autoutilitare` | Servicii Autoutilitare | Listă servicii furgonete/remorci |
| `/promotii` | Promoții | Oferte speciale |
| `/despre-noi` | Despre Noi | Prezentare echipă și valori |
| `/contact` | Contact | Telefon, adresă, Google Maps |

### Design
- Paletă: navy (#0d2847), slate-blue (#4a6a8a), alb
- Tipografie: Outfit (body), Bebas Neue (display)
- Layout asimetric, fără grile repetitive
- Ilustrații line-art SVG custom
- Animații cu Framer Motion (respectă `prefers-reduced-motion`)

### Accesibilitate
- Skip link la conținut principal
- Atribute `aria-*` pe navigare și elemente interactive
- Focus vizibil pe elemente
- Contrast text suficient
- `lang="ro"` pe document

---

## Comenzi (copy-paste)

### Instalare dependențe
```bash
cd f:\Proiecte\siteuri\inteligent-service-team
npm install
```

### Mod dezvoltare
```bash
npm run dev
```
*Deschide http://localhost:3000*

### Build producție
```bash
npm run build
```

### Pornire producție
```bash
npm start
```

### Lint
```bash
npm run lint
```

---

## Checklist post-generare

- [ ] Rulare `npm install`
- [ ] Rulare `npm run dev` și verificare localhost:3000
- [ ] Verificare toate paginile: Acasă, Servicii Camioane, Servicii Autoutilitare, Promoții, Despre Noi, Contact
- [ ] Testare responsive pe mobil (Chrome DevTools sau device real)
- [ ] Verificare Google Maps pe pagina Contact
- [ ] Verificare link-uri telefon (tap pe 0721 251 341)
- [ ] Completare descriere scurtă business în layout.tsx (metadata)
- [ ] Adăugare link-uri social media în Footer (dacă există)
- [ ] Rulare `npm run build` pentru verificare build fără erori
- [ ] Configurare domeniu și deployment (Vercel, Netlify etc.)
- [ ] Actualizare `metadataBase` în `app/layout.tsx` cu URL-ul real

---

## Fișiere principale

```
inteligent-service-team/
├── app/
│   ├── layout.tsx          # Layout principal + SEO
│   ├── page.tsx            # Pagina Acasă
│   ├── globals.css
│   ├── servicii-camioane/
│   ├── servicii-autoutilitare/
│   ├── promotii/
│   ├── despre-noi/
│   └── contact/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── SkipLink.tsx
│   └── illustrations/
├── tailwind.config.ts
├── next.config.js
└── package.json
```
