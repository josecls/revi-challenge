# 🧟 Monsters Fight - Revi Challenge

A mini-game built for Revi’s technical challenge where users can create custom monsters and make them battle based on their attributes.

## 🚀 Stack

- ⚛️ React + TypeScript
- 🎨 TailwindCSS
- 🧩 Shadcn/ui
- 🧠 Custom battle logic in plain TS classes

## 🛠️ How to Run

1. **Clone the repository**

```bash
git clone git@github.com:josecls/revi-challenge.git
cd revi-challenge
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

Then finally access it at http://localhost:5173 or by following the link provided in your terminal.

## ✨ Features

- 🧬 Create monsters with attributes: Attack, Defense, Speed, and HP
- ⚔️ Battle simulator with real-time UI and logs
- 💡 Attribute-based turn system with dynamic damage calculation
- 💻 Responsive layout for desktop and mobile
- 🖱️ Hover-to-preview attributes
- 📜 Scroll-following battle log
- 🧹 Clean and modern UI using Tailwind + Shadcn

## Technical Highlights

- Battlefield logic is encapsulated in a pure TypeScript class for testability and separation of concerns
- Functional component structure with hooks for reactivity
- Animation + auto-scroll for battle logs using `useRef` + `useEffect`
- State managed entirely in component-level React hooks

## 📁 Folder Structure

```txt
/src
 ├── components/        # UI Components (Cards, Sections, Lists)
 ├── contexts/          # React Context for shared state
 ├── core/              # Battle logic and Monster entity
 ├── lib/               # Useful shareable pieces of code
 ├── pages/             # App views
 └── App.tsx            # Main app entry and Routing
```

## 💭 Future Improvements

- Add Pagination/Search to the Monster Listing page — scrolling endlessly isn’t fun, right?
- Include sound effects and animations during battles to enhance excitement
- Introduce themed scenarios that change the background for a more immersive experience
- Persist monster roster using local storage so users don't lose progress
- Implement critical hits and abilities for a richer combat system
- Add unit tests to ensure battle logic works as expected
- Improve the UX on mobile views

## 🧑‍💻 Author

Made with ☕ by [josecls](https://github.com/josecls)
