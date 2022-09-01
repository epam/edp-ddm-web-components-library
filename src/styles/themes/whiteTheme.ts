export const whiteTheme = {
  colors: {
    // Layout
    layoutBackgroundPrimary: '#ffffff', // Page base background
    layoutBackgroundSecondary: '#E7EEF3', // Tall header & sidebar background
    layoutBackgroundTertiary: '#E6EBE6', // Additional background
    layoutBackgroundOutside: '#F5F5F5', // Fill color for browser area beyond 1680px width

    // Text colors
    textMainPrimary: '#000000', // Most text blocks, like headers, body texts, descriptions
    textMainSecondary: 'rgba(0, 0, 0, 0.6)', // Secondary texts, hints, component labels
    textMainSubtle: 'rgba(0, 0, 0, 0.25)', // Disabled text. Placeholders
    textAlternatePrimary: '#FFFFFF', // Color style for primery texts over inverted backgrounds
    textAlternateSecondary: 'rgba(255, 255, 255, 0.7)', // Color style for secondary texts over inverted backgrounds
    textErrors: '#FF3A44', // Error description under components

    // UI colors
    uIBase: '#000000', // Dividers. Components strokes
    uIBase2: '#808080', // Reserved
    uIBase4: '#CCCCCC', // Disabled components
    uIBase6: '#F1F1F1', // Components backgrounds
    uIIconBase: 'rgba(0, 0, 0, 0.7)', // Regular state of icons
    uIIconHovered: '#000000',
    uIIconDisabled: 'rgba(0, 0, 0, 0.2)',
    uIIconHoverArea: 'rgba(0, 0, 0, 0.12)', // Hover effects for icons
    uIBlueBase: '#446C88', // Labels
    uIBlueBase2: '#C6DCEC',
    uIBlueBackground: '#E7EEF3', // Components hover states. Backgrounds
    uIGreenBase: '#15CF74', // Labels
    uIGreenBackground: '#E8FAF1', // Background for banners & notifications
    uIYellowBase: '#FFD600', // Labels
    uIYellowBackground: '#FFFBE6', // Background for banners & notifications
    uIRedBase: '#FF3A44', // Labels.Icon-buttons with important actions
    uIRedBackground: '#FFEBEC', // Backgrounds for banners & notifications

    // Focused inputs. Hovered secondary buttons
    uIGradient1: 'linear-gradient(87.99deg, #C3AAB2 0.66%, #99EECC 57.2%, #80C0C8 75.87%, #4B8BFA 98.72%)',
    // Hovered primary buttons
    uIGradient2: 'linear-gradient(68.94deg, #C3AAB2 -4.77%, #99EECC 46.72%, #80C0C8 90.23%, #4B8BFA 134.46%)',
    // Border for panels
    uIGradient3: [
      'radial-gradient(',
      '92.76% 76.25% at 7.24% 21%, #B5D39D 0%, #F1ACAC 25.66%, #BF98C6 54.47%, #7179EF 86.04%, #2833D0 100%',
      ') 1'].join(''),

    // Dropdown menus
    dropmenuBackground: '#FFFFFF', // Menu background
    dropmenuHover: '#E7EEF3',
    dropmenuSelected: '#F1F1F1', // Selected options in menu

    // Footer
    footerBackground: '#000000',
    footerUIElements: '#FFFFFF',
    footerTextPrimary: '#FFFFFF',
    footerTextSecondary: 'rgba(255, 255, 255, 0.7)',

    // Loader
    loaderBody: '#000000',
    loaderBackground: '#FFFFFF',
    loaderOverlay: 'rgba(255, 255, 255, 0.8)',
    loaderRotationUnit: '#2EC0C1',

    // focus
    focusOutline: '#1751C1',
  },
};
