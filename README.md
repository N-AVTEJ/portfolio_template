# Mina — 3D Creator Portfolio

<p align="center">
  <img src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261031_040619_2f6f349e-a4a7-40db-8e9b-03b6acd8b99a.png&w=1024&q=92" alt="Mina 3D Creator Living Portrait" width="280" style="border-radius: 50%;" />
</p>

<p align="center">
  <strong>A high-craft 3D Creator portfolio featuring an interactive Living Portrait powered by WebGL and a damped wave physics engine.</strong>
</p>

<p align="center">
  <!-- Language Badges -->
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/WebGL-990000?style=for-the-badge&logo=webgl&logoColor=white" alt="WebGL" />
</p>

<p align="center">
  <!-- Framework & Tooling Badges -->
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
</p>

---

## 🌟 Overview

**Mina — 3D Creator** is a showcase portfolio designed with an ultra-dark aesthetic (`#0C0C0C`), the **Kanit** typography family (weights 300–900), and custom WebGL shaders. 

At the center is **The Living Portrait**: an interactive 3D-animated head of Mina constructed from 59 individually captured, pixel-aligned facial states rendered onto a soft, stretchy sheet simulated in real-time.

---

## ✨ Features

### 1. 🎭 The Living Portrait Engine
- **Single-Texture Rendering**: Only one picture is drawn per frame, preventing double eyes, chin artifacts, or hairline seams. Transitions are smoothly cross-faded over 70ms.
- **Continuous Eye Tracking**: Follows cursor across 16 circular gaze directions (`e`, `ene`, `ne`, `nne`, `n`, etc.) with natural blink cycles every 2.2 to 5.6 seconds.
- **Real-Time Mesh Physics**: A 72×72 elastic node grid (5,184 nodes) solved at a fixed `1/240s` step with a damped wave equation.
- **Untangle Enforcement**: Prevents triangles from inverting or tearing during extreme deformations.
- **Facial Zones & Expressions**:
  - **Hover**: Lips kiss, nose goes cross-eyed, left/right eye winks.
  - **Tap**: Brow shows anger, eyes recoil (ouch), nose triggers sneeze sequence, lips stick tongue out, cheeks puff.
  - **Hair Touch**: Cycles through custom hair colors (pink, blue, blonde, and natural).
  - **Grab & Pull**: Skin stretches elastically and ripples on release. Consecutive pulls trigger dizzy, angry, and crying moods.
  - **Fast Cursor Shake**: Causes hair to whip in wind; persistent shaking causes dizziness/sickness.
  - **Contact Button Reaction**: Hovering over "Contact Me" triggers animated heart eyes; moving away transitions into a gentle grin.
  - **Idle Acts**: After inactivity, Mina autonomously cycles through yawning, blowing away a fly, bubblegum popping, snoozing, and ghost hand cheek tugs.

### 2. 🎞️ Dual-Row Horizontal Marquee
- 21 motion GIFs from modern 3D design showcases.
- Dynamic scroll-linked transformation (`translateX` calculation) where Row 1 moves right and Row 2 moves left with passive event listeners for 60fps responsiveness.

### 3. ✍️ Scroll-Driven Character Typography
- "About Me" section features a character-by-character scroll opacity reveal from `0.2` to `1.0`.
- 4 floating decorative 3D assets anchored in viewport corners with directional slide-in animations.

### 4. 📐 High-Contrast Services Section
- Distinctive `#FFFFFF` card background with smooth rounded top corners (`rounded-t-[40px] md:rounded-t-[60px]`).
- 5 tailored service offerings (3D Modeling, Rendering, Motion Design, Branding, Web Design) featuring monumental numbering (`01`–`05`).

### 5. 🗂️ Sticky-Stacking Project Cards
- Interactive 3D portfolio items (*Nextlevel Studio*, *Aura Brand Identity*, *Solaris Digital*).
- Cards dynamically scale down (`targetScale = 1 - (total - 1 - index) * 0.03`) as the user scrolls past, creating a smooth physical card stack.
- Asymmetrical 2-column image layout (40% dual-stacked previews, 60% tall hero render).

### 6. 📬 Interactive Contact Experience
- Accessible modal dialog for project inquiries with service selection, budget tier estimation, and validated fields.

---

## 🛠️ Tech Stack & Languages

| Technology | Badge | Purpose |
| :--- | :--- | :--- |
| **TypeScript** | ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white) | Strict typing, robust interfaces, and clean component contracts |
| **React 19** | ![React](https://img.shields.io/badge/-React_19-20232A?logo=react&logoColor=61DAFB) | Modular UI architecture, hooks, and lifecycle management |
| **WebGL / GLSL** | ![WebGL](https://img.shields.io/badge/-WebGL-990000?logo=webgl&logoColor=white) | Damped wave mesh simulation, fragment cross-fading, lighting |
| **Tailwind CSS v4** | ![Tailwind](https://img.shields.io/badge/-Tailwind_v4-06B6D4?logo=tailwindcss&logoColor=white) | Fluid typography (`clamp()`), flex/grid layouts, responsive breakpoints |
| **Framer Motion** | ![Motion](https://img.shields.io/badge/-Framer_Motion-0055FF?logo=framer&logoColor=white) | Scroll progress tracking (`useScroll`), transforms, and view triggers |
| **Vite 8** | ![Vite](https://img.shields.io/badge/-Vite_8-646CFF?logo=vite&logoColor=white) | Ultra-fast bundling and development build tool |
| **Lucide React** | ![Lucide](https://img.shields.io/badge/-Lucide_Icons-F56565?logo=feather&logoColor=white) | Clean, lightweight SVG iconography |
| **Node.js Test Runner** | ![Node](https://img.shields.io/badge/-Node.js_Test-339933?logo=node.js&logoColor=white) | Fast, deterministic unit tests (`node:test`, `node:assert/strict`) |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v20.x` or higher
- **npm**: `v9.x` or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/mina-3d-portfolio.git
   cd mina-3d-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing & Verification

Run deterministic unit tests for mathematical formulas, card scaling, and gaze calculations:

```bash
npx --yes tsx --test src/utils/portfolioMath.test.ts
```

Validate TypeScript types across the codebase:

```bash
npm run lint
```

Produce an optimized production build:

```bash
npm run build
```

---

## 📁 Project Structure

```
├── index.html                   # HTML entry point, Google Fonts Kanit, WebGL engine script
├── metadata.json                # Project identity and environment specifications
├── package.json                 # Dependencies and build scripts
├── src/
│   ├── App.tsx                  # Main application orchestrator and modal state
│   ├── index.css                # Tailwind CSS v4 directives and living portrait styles
│   ├── main.tsx                 # React DOM client bootstrap
│   ├── components/
│   │   ├── AboutSection.tsx     # 3D corner assets & scroll-driven character text
│   │   ├── AnimatedText.tsx     # Character-by-character scroll opacity reveal
│   │   ├── ContactButton.tsx    # Styled gradient pill button with inset glow
│   │   ├── ContactModal.tsx     # Interactive project inquiry modal
│   │   ├── FadeIn.tsx           # Framer motion whileInView wrapper
│   │   ├── FooterSection.tsx    # CTA banner, platform links, and copyright
│   │   ├── HeroPortrait.tsx     # Living portrait container and canvas mounting
│   │   ├── HeroSection.tsx      # Full-height hero, navigation, and massive heading
│   │   ├── LiveProjectButton.tsx# Ghost outline button for project links
│   │   ├── Magnet.tsx           # Magnetic cursor hover tracker
│   │   ├── MarqueeSection.tsx   # Dual-row horizontal scroll gallery
│   │   ├── ProjectsSection.tsx  # Sticky stacking cards with scale transformations
│   │   └── ServicesSection.tsx  # High-contrast white services breakdown
│   └── utils/
│       ├── portfolioMath.ts     # Pure functions for gaze, zones, scales, and offsets
│       └── portfolioMath.test.ts# Deterministic unit tests with Node test runner
├── tsconfig.json                # TypeScript compiler configuration
└── vite.config.ts               # Vite configuration with Tailwind CSS plugin
```

---

## 🎨 Design System

- **Background Color**: `#0C0C0C` (Deep Onyx)
- **Accent Primary**: Gradient `linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)`
- **Text Color**: `#D7E2EA` (Soft Platinum)
- **Heading Gradient**: `linear-gradient(180deg, #646973 0%, #BBCCD7 100%)`
- **Typography**: Google Font **Kanit** (weights 300 to 900)

---

## 📄 License

This project is licensed under the Apache-2.0 License.
