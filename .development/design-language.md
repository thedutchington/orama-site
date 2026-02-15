# Orama V2.0.0 "Advisory" // Design Language

This document defines the visual architecture and "feel" for Orama V2.0.0 and subsequent applications.

## 01 // Core Philosophy
**Academic Precision meets Cinematic Fidelity.**
The "Advisory" release shifts away from "vibrant" or "moving" colors in favor of a stable, professional, and high-fidelity aesthetic. It is designed to feel like a premium macOS utility—authoritative, clean, and intentional.

---

## 02 // Color Palette
The system is anchored in a strict **OLED Dark Mode** environment.

- **Background**: `#0a0a0a` (Pure OLED Black)
- **Primary Accent**: `Technical Indigo` (#4f46e5)
- **Secondary Accent**: `Indigo Light` (#818cf8)
- **Surface**: `Glass Vibrant` (White/5 with backdrop-blur-3xl)
- **Content**: `Content Gray` (#a1a1aa)

> [!IMPORTANT]
> **No generic vibrance.** All colors must relate to the Technical Indigo spectrum. Avoid pure reds, violets, or greens unless specifically for status indicators.

---

## 03 // Typography
A dual-font system balancing readability with technical flavor.

- **Primary (Sans)**: Inter / Outfit
  - Used for headings and body content.
- **Secondary (Mono)**: Fira Code / JetBrains Mono
  - Used for metadata, timestamps, and "Technical Labels."
  - Style: Uppercase, tracking `[0.2em]` to `[0.4em]`, font-size `[10px]`.

---

## 04 // Atmospheric Layers
Every layout should feel 3D through subtle lighting:
1. **Mesh Gradients**: Faint Indigo glows in screen corners.
2. **Noise Overlay**: A subtle grain at `3%` opacity to add texture.
3. **Drifting Orbs**: High-blur indigo orbs drifting in the background at low frequency.
