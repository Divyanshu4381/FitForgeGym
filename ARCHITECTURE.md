# System Architecture & Design - FitForge Gym

## 1. System Architecture (3-Tier Model adapted for Static Site)

Although this is a client-side only application, we structure it logically to separate concerns:

### Tier 1: Presentation Layer (UI/UX)
- **Role**: Render the interface and handle user interaction.
- **Tech**: HTML5, CSS3 (Bootstrap).
- **Components**:
    - `Navbar`: Responsive navigation.
    - `HeroSection`: High-impact visual entry.
    - `FeatureCards`: Service highlights.
    - `PricingGrid`: Comparative view of plans.
    - `GalleryGrid`: Masonry or standard grid for photos.
    - `Footer`: Quick links and contact info.

### Tier 2: Business Logic Layer (Client-Side Logic)
- **Role**: Handle dynamic behaviors and events.
- **Tech**: Vanilla JavaScript (ES6+).
- **Functions**:
    - **Navigation Toggle**: Mobile menu handling.
    - **Active Link Highlighting**: Visual feedback on scroll/navigation.
    - **Floating CTA**: WhatsApp button behavior.
    - **Form Handling**: Intercepting form submission for Email/WhatsApp redirection.

### Tier 3: Data Access Layer (Content)
- **Role**: Source of information.
- **Implementation**:
    - Due to static nature, data is **Hardcoded** in HTML or stored in local **JSON** objects (e.g., `trainers.json`, `plans.json`) and rendered via JS if dynamic rendering is chosen (optional for this scale, but good for OOPS practice).

---

## 2. OOPS Design (JavaScript)

To satisfy the OOPS requirement, we will potentially use JavaScript Classes to render repetitive components if the user desires "Smart" components, or keep it simple with semantic HTML.

**Proposed Classes (if JS rendering is used):**

```javascript
class UIComponent {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }
    render() { throw new Error('Render method must be implemented'); }
}

class TrainerCard extends UIComponent {
    constructor(containerId, data) {
        super(containerId);
        this.name = data.name;
        this.role = data.role;
        this.image = data.image;
    }
    render() {
        // Return HTML string for card
    }
}
```

*Note: For a simple static site, hardcoded HTML is faster/better for SEO, but we can use JS for the Gallery or Testimonials to demonstrate OOPS.*

---

## 3. Design System & Theme

### Color Palette
- **Primary**: `Fitness Orange` (#FF5722 or #F97316) - Action buttons, highlights.
- **Secondary**: `Dark Slate` (#1F2937) - Text, Footers.
- **Background**: `White` (#FFFFFF) & `Light Gray` (#F3F4F6) - Sections alternating.
- **Accent**: `Black` (#000000) - Strong Headings.

### Typography
- **Headings**: `Oswald` or `Montserrat` (Bold, Modern).
- **Body**: `Open Sans` or `Roboto` (Readable, Clean).

### File Structure
```
/gym
  ├── /assets
  │     ├── /images       # Compressed webp images
  │     └── /icons        # SVG icons
  ├── /css
  │     └── style.css     # Custom overrides (if using Tailwind CDN)
  ├── /js
  │     └── main.js       # Logic
  ├── index.html          # Single Page vs Multi Page (User asked for 6 pages)
  ├── about.html
  ├── plans.html
  ├── trainers.html
  ├── gallery.html
  └── contact.html
```
