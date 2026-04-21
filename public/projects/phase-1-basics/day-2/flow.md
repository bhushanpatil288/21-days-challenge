# 📌 Project Name: Theme Toggle
## 🧠 PROJECT FLOW PLANNING
### 🎯 Goal: Create a seamless theme toggle implementation using CSS Variables and Vanilla JavaScript.

🧩 Features:
- Light/Dark Mode Switching
- LocalStorage Persistence (Remembers choice after refresh)
- System Preference Detection (Matches OS theme by default)
- Modern Design with Smooth Transitions
- Responsive Layout

🔄 Flow (Step by Step):
1. Create a basic HTML structure with a navigation bar, hero section, and feature cards.
2. Define a design system in CSS using custom properties (Variables) for colors, backgrounds, and shadows.
3. Create a secondary theme scope using `[data-theme='dark']` to override light mode variables.
4. Use JavaScript to target the toggle button, icon, and text elements.
5. Implement logic to determine the starting theme:
   - Check `localStorage` for a previously saved preference.
   - If empty, check the user's system color scheme using `matchMedia`.
6. Define an `applyTheme` function that:
   - Sets the `data-theme` attribute on the `<html>` element.
   - Updates the button icon and text accordingly.
   - Saves the current theme to `localStorage`.
7. Add a click event listener to the toggle button that switches between 'light' and 'dark' states.
8. Ensure all style changes are smooth by applying CSS `transition` properties to relevant elements.

🖥 UI Plan:
- **Navbar**: Sticky header with a logo and a clear theme-switch button.
- **Hero Section**: Large centered heading with a gradient effect to show off color contrast.
- **Feature Grid**: A set of cards that demonstrate how backgrounds and text colors shift.
- **Footer**: Simple copyright notice aligned with the theme.

⚙️ Logic Plan:
- `document.documentElement.setAttribute('data-theme', theme)` to trigger CSS changes.
- `localStorage.setItem('theme', theme)` for data persistence.
- `window.matchMedia('(prefers-color-scheme: dark)').matches` to detect OS dark mode.
- `DOMContentLoaded` event listener to ensure elements are ready before running logic.

🚧 Edge Cases:
- **First-time Visit**: Ensure the logic defaults correctly when `localStorage` is empty.
- **Immediate Toggle**: Handling multiple clicks rapidly without breaking the transition state.
- **Contrast**: Ensuring text remains readable in both themes (verified with WCAG standards).
