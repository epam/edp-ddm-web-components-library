export const darkTheme = {
  colors: {
    // Layout
    layoutBackgroundPrimary: '#202020', // Page base background
    layoutBackgroundSecondary: '#242C32', // Tall header & sidebar background
    layoutBackgroundTertiary: '#222B22', // Additional background
    layoutBackgroundOutside: '#000000', // Fill color for browser area beyond 1680px width

    // Text colors
    textMainPrimary: 'rgba(255, 255, 255, 0.87)', // Most text blocks, like headers, body texts, descriptions
    textMainSecondary: 'rgba(255, 255, 255, 0.66)', // Secondary texts, hints, component labels
    textMainSubtle: 'rgba(255, 255, 255, 0.46)', // Disabled text. Placeholders
    textAlternatePrimary: '#000000', // Color style for primery texts over inverted backgrounds
    textAlternateSecondary: 'rgba(0, 0, 0, 0.7)', // Color style for secondary texts over inverted backgrounds
    textErrors: '#FF525A', // Error description under components

    // UI colors
    uIBase: 'rgba(255, 255, 255, 0.85)', // Dividers. Components strokes
    uIBase2: 'rgba(255, 255, 255, 0.6)', // Reserved
    uIBase4: 'rgba(255, 255, 255, 0.4)', // Disabled components
    uIBase6: 'rgba(255, 255, 255, 0.12)', // Components backgrounds
    uIIconBase: 'rgba(255, 255, 255, 0.8)', // Regular state of icons
    uIIconHovered: '#FFFFFF',
    uIIconDisabled: 'rgba(255, 255, 255, 0.4)',
    uIIconHoverArea: 'rgba(255, 255, 255, 0.2)', // Hover effects for icons
    uIBlueBase: '#5A7E96', // Labels
    uIBlueBase2: '#2B3F4D',
    uIBlueBackground: '#1E282F', // Components hover states. Backgrounds
    uIGreenBase: '#31D585', // Labels
    uIGreenBackground: '#13412A', // Background for banners & notifications
    uIYellowBase: '#FFDB1F', // Labels
    uIYellowBackground: '#4D430D', // Background for banners & notifications
    uIRedBase: '#FF525A', // Labels.Icon-buttons with important actions
    uIRedBackground: '#4D1C1E', // Backgrounds for banners & notifications

    // Focused inputs. Hovered secondary buttons
    uIGradient1: 'linear-gradient(87.92deg, #2833D0 0%, #7179EF 34.8%, #BF98C6 70.37%, #F1ACAC 118.85%)',
    // Hovered primary buttons
    uIGradient2: 'linear-gradient(79.32deg, #2833D0 -7.04%, #7179EF 31.7%, #BF98C6 68.62%, #F1ACAC 102.98%)',
    // Border for panels
    uIGradient3: `radial-gradient(92.76% 76.25% at 7.24% 21%, #B5D39D 0%, #F1ACAC 25.66%, #BF98C6 54.47%,
         #7179EF 86.04%, #2833D0 100%) 1`,

    // Dropdown menus
    dropmenuBackground: '#363D42', // Menu background
    dropmenuHover: '#474E53',
    dropmenuSelected: '#1E252A', // Selected options in menu

    // Footer
    footerBackground: '#000000',
    footerUIElements: '#FFFFFF',
    footerTextPrimary: '#FFFFFF',
    footerTextSecondary: 'rgba(255, 255, 255, 0.7)',

    // Loader
    loaderBody: '#FFFFFF',
    loaderBackground: '#000000',
    loaderOverlay: 'rgba(0, 0, 0, 0.8)',
    loaderRotationUnit: '#2EC0C1',

    // focus
    focusOutline: '#FFFFFF',
  },
};
