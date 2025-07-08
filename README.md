
```bash

📄 License
This project is for educational purposes. Feel free to fork and build upon it!

## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/macak410/Shopping-cart-with-Redux.git
cd Shopping-cart-with-Redux


## Live : (https://shopping-cart-with-redux-xi.vercel.app/)

# 🛒 Shopping Cart with Redux

Ova aplikacija je edukativni projekt izrade moderne web trgovine koristeći **Next.js**, **React**,
 **Redux Toolkit** i **Tailwind CSS**.  
Cilj je demonstrirati upravljanje globalnim stanjem, podršku za tamni način rada, responzivni dizajn
 i glatke animacije.

🔗 GitHub repo:(https://github.com/macak410/Shopping-cart-with-Redux)


- **📁 Project Structure**

  app/
├── layout.js            # Root layout with global providers
├── page.js              # Home page with Navbar and ItemsSection
├── components/          # Reusable UI components
│   ├── Navbar.js
│   ├── ItemCard.js
│   ├── ItemsSection.js
│   ├── CartItemCard.js
│   ├── Checkout.js
│   └── ThemeToggle.js
├── store/               # Redux store and slices
│   ├── store.js
│   └── slices/
│       └── shoppingCartSlice.js
├── assets/              # Static images (e.g. product images)
├── globals.css          # Tailwind base styles and custom CSS
└── ClientProvider.js    # Redux Provider wrapper

---

## 🧰 Technologies & Tools Used

### 🖥️ Frontend Framework
- **Next.js (v14.2.4)**
  - App Router architecture (`app/` directory)
  - `next/image` for image optimization
  - `next/font/google` for loading fonts (Inter)
  - `metadata` API for SEO
  - `use client` directive for client-side components

- **React (v18)**
  - Functional components
  - React hooks: `useState`, `useEffect`, `useSelector`, `useDispatch`

---

### 🎨 Styling & UI
- **Tailwind CSS (v3.4.1)**
  - Utility-first styling
  - `dark:` variants for dark mode support
  - `@layer utilities` for custom utility classes
  - `@apply` used for styling native elements (`select`, `input`)

- **Custom CSS**
  - CSS variables for theme colors (`--foreground-rgb`, `--background-start-rgb`, etc.)
  - Spinner removal for `<input type="number">`
  - Smooth transitions (`transition`, `scroll-smooth`)

- **Heroicons (`@heroicons/react`)**
  - SVG icons for buttons, labels, and navigation

- **Headless UI (`@headlessui/react`)**
  - `Listbox` component for accessible dropdowns

---

### 🧠 State Management
- **Redux Toolkit (`@reduxjs/toolkit`)**
  - `createSlice` for cart logic
  - `configureStore` for store setup

- **React Redux (`react-redux`)**
  - `Provider`, `useSelector`, `useDispatch`

- ✅ Ready for integration with `redux-persist` for local state persistence

---

### 🧩 Architecture & Components
- **Modular Component Design**
  - Components like `Navbar`, `ItemsSection`, `ItemCard`, `CartItemCard`, `Checkout`, `ThemeToggle`,
   `ClientProvider`, etc.

- **Theme Support**
  - `ThemeToggle` component with light/dark mode switching
  - CSS variables + Tailwind `dark:` classes

- **Animations & UX**
  - Tailwind transitions (`transition`, `scale`, `blur`, `opacity`)
  - Custom animations (`animate-bounceRotate`, `hover:animate-wiggle`)
  - Smooth slide-in/out cart panel

---

### 📦 Additional Features
- **Google Fonts (`Inter`)**
  - Loaded via `next/font/google` with `display: swap`

- **SEO Metadata**
  - Defined using `export const metadata` in `layout.js`

- **Responsive Design**
  - Tailwind grid system (`grid-cols`, `container`, `mx-auto`, `px-4`, etc.)

- **🔮 Future Enhancements**
- [ ] Add redux-persist to save cart state in localStorage
- [ ] Integrate framer-motion for smoother animations
- [ ] Add product filtering by price or tag
- [ ] Add authentication and user profiles
- [ ] Connect to a CMS (e.g. Sanity, Contentful) for dynamic product management
- [ ] Add payment integration (Stripe or PayPal)
- [ ] Write unit tests with Jest and React Testing Library