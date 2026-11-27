
# Ben Swann — Visual Design System

## Design Direction

The website follows an editorial, cinematic and authoritative visual
direction, emphasizing personal identity, journalism, professional
history and independent media.

The visual composition uses large-scale typography, high-contrast
surfaces, cinematic media and signature-led branding.

Structural inspiration includes Steven Bartlett's identity system
and timeline storytelling, adapted to Ben Swann's distinct visual
identity, content and imagery.

## Color Palette

| Token | Value |
| --- | --- |
| Ink | #050505 |
| Carbon | #0B0B0B |
| Paper | #F4F1E8 |
| White | #FFFFFF |
| Signature Gold | #F3D66B |
| Deep Gold | #A87308 |
| Muted Text | rgba(244, 241, 232, 0.64) |
| Dark Border | rgba(255, 255, 255, 0.16) |
| Light Border | rgba(5, 5, 5, 0.16) |

Gold serves as the primary accent for signature branding,
interactive elements, progress indicators and visual highlights.

## Typography

- Display Typeface: Bebas Neue
- Body Typeface: Manrope Variable
- Display typography uses fluid sizing and tight line spacing.
- Supporting typography prioritizes readability and hierarchy.
- Font assets are bundled locally through Fontsource.

## Layout System

- Maximum content width: 1440px
- Fluid gutter: clamp(20px, 4vw, 72px)
- Section spacing: clamp(88px, 11vw, 176px)
- Desktop layouts use structured grids and balanced compositions.
- Mobile layouts adapt typography, spacing and content arrangement.
- Major sections alternate between dark, light and cinematic surfaces.

## Visual Components

- Signature-led introduction
- Fixed navigation header
- Cinematic video hero
- Editorial biography section
- Media and press marquee
- Career timeline
- Company logo grid
- Editorial portrait section
- Media gallery
- Video and podcast section
- Site footer

## Motion and Interaction

GSAP and CSS animations provide the website's motion system.

- Signature-shaped introductory transition
- Hero typography animation
- Scroll-triggered content reveals
- Subtle portrait and timeline image parallax
- Continuous press logo marquee
- Timeline progress animation
- Navigation and button transitions

Animation settings are coordinated with the page layout and
responsive behavior.

## Responsive Design

The website supports desktop, tablet and mobile layouts.

The primary career timeline uses a vertical desktop composition
and horizontal scrolling on mobile devices.

Responsive rules are maintained within the global stylesheet to
preserve consistent visual behavior.

## Navigation

- Fixed header with scroll-dependent styling
- Section-based navigation
- Full-screen mobile navigation
- Dedicated career timeline page
- External media and podcast links

## Accessibility

The implementation includes:

- Semantic page headings
- Contextual image alternative text where applicable
- Visible keyboard focus indicators
- Escape-key support for mobile navigation
- Reduced-motion styling
- Accessible navigation labels

## Implementation

The visual system is implemented in:

src/styles/index.css

Section-level markup is maintained in:

src/components/sections/

Shared media assets are maintained in:

public/media/

Design changes should be evaluated across desktop and mobile
layouts before deployment.
