# Meeting Room Standards

A web-based interactive gallery for visualizing meeting room configurations and their Bill of Materials (BOM). This application displays different meeting room types with detailed equipment specifications, pricing, and professional services information.

## Features

- **Password-Protected Access**: Secure login modal with password protection
- **Interactive Gallery**: Thumbnail navigation to browse different room configurations
- **Detailed Room Information**: 
  - High-quality room images
  - Complete equipment list with quantities, manufacturers, models, and descriptions
  - Individual item pricing (unit and extended)
  - Equipment totals and professional services pricing
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Smooth Animations**: Elegant transitions and animations for enhanced user experience
- **Microsoft Teams Integration**: Room configurations include Microsoft Teams-compatible equipment

## Room Types

1. **Standard Huddle Room**
2. **Standard Small Conference Room**
3. **Standard Medium Conference Room**
4. **Standard Large Conference Room**
5. **Executive Large Conference Room**

Each room configuration includes detailed specifications for:
- Display monitors (Samsung LCD displays)
- Mounting hardware (Chief mounts)
- Video conferencing equipment (Logitech cameras and systems)
- Audio equipment (microphones and audio processors)
- Installation materials and accessories

## Project Structure

```
room-bom-gallery/
├── index.html          # Main HTML structure
├── script.js           # Application logic and room data
├── styles.css          # Styling and responsive design
├── input.csv           # Source data for room configurations
├── README.md           # Project documentation
│
├── uc-web-logo.webp    # Unified Communications logo
├── Hyundai_AutoEver_logo.svg  # Client logo
│
└── Room Images/
    ├── Standard Huddle.jpeg
    ├── Standard Small.jpeg
    ├── Standard Medium.jpeg
    ├── Standard Large.jpeg
    └── Executive Large.jpeg
```

## Setup & Usage

### Prerequisites

No special prerequisites required. This is a static web application that runs entirely in the browser.

### Installation

1. Clone or download this repository
2. Ensure all files are in the same directory
3. Open `index.html` in a modern web browser

### Access

- **Password**: `hyundairocks!`
- Enter the password on the login screen to access the gallery

### Usage

1. Enter the password on the login screen
2. Browse room configurations using the thumbnail gallery at the top
3. Click any thumbnail to view detailed information for that room type
4. Review equipment specifications, pricing, and totals in the detailed view
5. On mobile devices, equipment items are displayed as cards for better readability

## Technology Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **Vanilla JavaScript**: No framework dependencies - pure JavaScript for functionality
- **CSS Grid & Flexbox**: For responsive layouts

## Browser Compatibility

This application is designed to work in all modern browsers including:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features in Detail

### Security
- Password-protected access control
- Modal-based login screen with animated transitions

### User Experience
- Smooth page transitions when switching between rooms
- Animated table rows and mobile cards for visual appeal
- Responsive design that adapts to different screen sizes
- Mobile-optimized card layout for equipment items

### Data Display
- Detailed equipment tables with:
  - Quantity (QTY)
  - Manufacturer
  - Model number
  - Description
  - Unit price
  - Extended price
- Summary totals for:
  - Equipment Total
  - Professional Services

### Contact Information
Footer section includes contact details for:
- Sales Representative: Ozzie Alvarez
- Design Engineer: Joseph Living

## Development Notes

- All room data is stored in JavaScript objects within `script.js`
- Images should be placed in the same directory as `index.html` or update paths accordingly
- The password can be changed in `script.js` (line 231)
- Styling is centralized in `styles.css` for easy customization

## Customization

To add or modify room configurations:

1. Edit the `roomData` object in `script.js`
2. Add corresponding room images in the project directory
3. Update the image path in the room data object

To change styling:
- Modify `styles.css` for colors, fonts, spacing, and layout adjustments
- The color scheme uses modern gradients and professional styling

## License

This project is proprietary and prepared for Hyundai AutoEver.

## Support

For questions or support, contact:
- **Sales Representative**: oalvarez@unifiedcommunications.com
- **Design Engineer**: jliving@unifiedcommunications.com

---

*Prepared for Hyundai AutoEver by Unified Communications*

