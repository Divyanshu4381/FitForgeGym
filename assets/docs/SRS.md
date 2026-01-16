# System Requirements Specification (SRS) - FitForge Gym

## 1. Introduction
The **FitForge Gym** website is a static, mobile-first web application designed to establish an online presence for a local fitness center. The primary goal is to convert visitors into members through a professional, clean, and user-friendly interface.

## 2. Purpose
To provide potential members with essential information about the gym (plans, trainers, facilities) and facilitate easy contact via WhatsApp and phone, strictly adhering to a low-budget, high-impact design philosophy.

## 3. Scope
The project includes the development of a 6-page static website (Home, About, Plans, Trainers, Gallery, Contact) using HTML, CSS (Tailwind/Bootstrap), and JavaScript. It excludes backend features like user login, admin panels, or payment gateways.

## 4. Overall Description
- **User Characteristics:** Local residents, fitness beginners, and enthusiasts looking for affordable gyms.
- **Product Perspective:** Successor to offline marketing; operates independently as a digital brochure.

## 5. System Environment
- **Client:** Any modern web browser (Chrome, Firefox, Safari, Edge) on Mobile or Desktop.
- **Server:** Any static hosting provider (Netlify, Vercel, GitHub Pages).

## 6. Functional Requirements
### 6.1 Home Page
- Display Hero section with "Join Now" CTA.
- Show Feature Highlights and Testimonials.
### 6.2 Membership Plans
- Display Monthly, Quarterly, Yearly plans.
- 'Contact on WhatsApp' button for each plan.
### 6.3 Contact Mechanism
- WhatsApp floating button on all pages.
- Contact form (via EmailJS or mailto) or direct contact links.
### 6.4 Gallery
- Grid layout for gym images.

## 7. Non-Functional Requirements
- **Performance:** Fast loading (< 2s).
- **Responsiveness:** Mobile-first design.
- **Aesthetics:** "Fitness Orange", Black, White, Dark Gray palette.
- **Budget constraints:** Use free stock images.

## 8. Use Case Diagram
*(Description)*
- **Visitor:** View Plans -> Click WhatsApp -> Chat with Gym Owner.
- **Visitor:** View Gallery -> View Trainers -> Visit Gym.

## 9. Data Flow Diagram
- User -> Website -> WhatsApp API.
- User -> Website -> Email Client/Service.

## 10. System Architecture
- **Client-Side Only (3-Tier interpretation for static):**
    - **Presentation:** HTML5/CSS3.
    - **Logic:** JavaScript (DOM manipulation, API redirection).
    - **Data:** Static JSON or Hardcoded Content.

## 11. Database Design
- *Not Applicable* (Static Website).

## 12. OOPS Design (Adapted for JS)
- **Components:** Header, Footer, Hero, PlanCard, TrainerCard (implemented as reusable HTML structures or JS classes if needed).

## 13. Constraints
- Zero backend maintenance.
- No paid plugins.

## 14. Assumptions
- Content (text/images) will be provided or sourced from free stock libraries.

## 15. Future Enhancements
- Online Payment Gateway.
- Member Login Portal.
- Diet Plan Generator.
