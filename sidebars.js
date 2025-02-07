// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/feature-flags',
        'getting-started/running-locally',
      ],
    },
    {
      type: 'category',
      label: 'Language Basics',
      items: [
        'language-basics/syntax-overview',
        'language-basics/tasks',
        'language-basics/events',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Features',
      items: [
        'advanced-features/control-structures',
        'advanced-features/complex-workflows',
      ],
    },
    {
      type: 'category',
      label: 'Reference Guide',
      items: [
        'reference-guide/built-in-functions',
        'reference-guide/data-types',
      ],
    },
    {
      type: 'category',
      label: 'Examples and Tutorials',
      items: [
        'examples-and-tutorials/sending-a-message',
        'examples-and-tutorials/handling-sensor-readings',
        'examples-and-tutorials/tutorials',
      ],
    },
    'best-practices',
    'faq-and-troubleshooting',
  ],
};

export default sidebars;

