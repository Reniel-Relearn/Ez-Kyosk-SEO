// Product-only content. Home's shared productCategories and FAQ stay frozen.
export const productPageMeta = {
  title: 'Self-Ordering Kiosk System & Capabilities | Ez Kyosk',
  description: 'Explore Ez Kyosk ordering, checkout, payments and queue tracking, with quotation-based additions and software-only, hardware-only or combined options.',
};

export const coreCapabilities = [
  {
    id: 'self-ordering', label: 'Self-ordering', title: 'Let customers build the order.',
    body: 'Customers browse organized menu or product categories, select available items and options, and review quantities and totals before payment.',
    points: ['Explore menu categories and available choices.', 'Add products, options and quantities.', 'Review and edit selections before checkout.'],
    note: 'The customer-facing ordering flow keeps browsing, selection and review together. The menu or catalogue and product options are defined around your operation.',
    visual: 'Self-ordering and order review',
  },
  {
    id: 'pos-checkout', label: 'POS & checkout', title: 'Connect the order to checkout.',
    body: 'The reviewed order moves into a connected checkout flow with its items, quantities and total. Customers continue through a supported electronic payment path or an optional cashier-assisted cash route.',
    points: ['Keep the order details together as checkout begins.', 'Connect the order to the selected payment route.', 'Offer cashier-assisted cash payment where the business needs it.'],
    note: 'A separate cashier checkout is not required for supported electronic payments. Cash remains an optional alternative, not an extra step for every customer.',
    visual: 'Connected checkout and optional cashier route',
  },
  {
    id: 'payment-overview', label: 'Payments', title: 'Give customers a suitable way to pay.',
    body: 'Payment processing through AltPayNet supports card, QR and supported e-wallet paths. The available methods, terminal and deployment requirements are defined around your operation.',
    points: ['Discuss supported in-store and mobile payment paths.', 'Match the payment setup to the agreed deployment.', 'Make order tracking available after successful payment.'],
    note: 'The supported methods and required equipment are confirmed in the quotation. Electronic payments and optional cashier cash payment have different checkout paths.',
    visual: 'Supported payment paths',
    link: { href: '#payments', label: 'Understand payment configuration' },
  },
  {
    id: 'order-tracking', label: 'Order queue & tracking', title: 'Keep preparation and pickup visible.',
    body: 'After successful payment, customers can follow their order number on the customer-facing queue display. An optional tracking QR offers another way to view order status from a phone.',
    points: ['Follow the order number under Preparing or Ready for Pickup.', 'Choose phone-based tracking by scanning the tracking QR.', 'Collect the order when it is ready.'],
    note: 'Scanning is optional. Customers can use the queue display without a smartphone, and the tracking QR is separate from a payment QR.',
    visual: 'Order number, queue display and optional tracking QR',
    link: { href: '/how-it-works/', label: 'Explore the customer journey' },
  },
];

export const configurableAdditions = [
  {
    id: 'inventory', title: 'Automated inventory & availability',
    body: 'Automated inventory updates and menu-availability controls can be included when requested and agreed in the quotation. They are not automatically included in every package.',
    points: ['Which items and stock movements need to be tracked.', 'When inventory updates should apply in the workflow.', 'How item availability should appear on the kiosk.'],
    visual: 'Inventory automation and item availability',
  },
  {
    id: 'reports', title: 'Reports & analytics',
    body: 'Reporting can be configured around the sales, products and operational questions your team needs to understand. The required views and reporting scope are agreed before implementation.',
    points: ['The business questions the reports should answer.', 'The sales, product or order information needed.', 'Who needs to use the agreed reporting views.'],
    visual: 'Reporting and operational insights',
  },
  {
    id: 'customers', title: 'Customer & loyalty tools',
    body: 'Customer profiles, loyalty, promotions and related workflows can be scoped around your business needs. The quotation defines the features and behavior included in your setup.',
    points: ['The customer information relevant to your use case.', 'The loyalty or promotion requirements to include.', 'The customer workflows your operation needs.'],
    visual: 'Configurable customer and loyalty tools',
  },
];

export const purchaseOptions = [
  { title: 'Software-only', body: 'Discuss a software-only quotation and identify the equipment and connections it needs to work with.', confirm: 'Existing devices, deployment requirements and any integration work.' },
  { title: 'Hardware-only', body: 'Discuss the hardware needed for the environment and intended system setup.', confirm: 'Device selection, compatibility and the exact equipment included.' },
  { title: 'Combined setup', body: 'Plan hardware and software together around the operation you want to support.', confirm: 'The devices, capabilities and integrations included in the combined quotation.' },
];
