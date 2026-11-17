export const steps = [
  ['Browse', 'Explore the digital menu and its product categories.'],
  ['Select', 'Choose products and options to add to the order.'],
  ['Adjust', 'Change quantities and fine-tune the selection.'],
  ['Review', 'Check the order, options, and calculated total.'],
  ['Confirm', 'Send the order into the connected checkout flow.'],
];

// End-to-end customer journey. The guide's ordering microsteps above are separate.
export const customerJourney = [
  { id: 'start-select', title: 'Start & Select', body: 'Tap to begin, browse the menu and choose products.' },
  { id: 'review-edit', title: 'Review & Edit Order', body: 'Check items, edit quantities or selections, and review the total.' },
  { id: 'payment', title: 'Choose How to Pay', body: 'Pay by card or e-wallet, or choose cash payment at the cashier.' },
  { id: 'scan-qr', title: 'Scan Your Tracking QR', body: 'Scan the order-tracking QR to open order tracking.' },
  { id: 'track-queue', title: 'Track Your Queue Status', body: 'Follow the queue and see when your order is ready for pickup.' },
  { id: 'collect', title: 'Collect Your Order', body: 'Collect your prepared order when it is ready.' },
];

export const productCategories = [
  { id: 'self-ordering', label: 'Self-Ordering', eyebrow: 'Customer experience', title: 'Every choice, clear from the first tap.', body: 'Give customers a focused touchscreen journey for exploring the menu, choosing products, adjusting their order, and confirming with confidence.', items: ['Digital menu and categories', 'Product options and quantities', 'Cart and order review', 'Calculated totals', 'Order confirmation'] },
  { id: 'pos-checkout', label: 'POS & Checkout', eyebrow: 'Connected operations', title: 'Move confirmed orders into checkout.', body: 'Connect the self-ordering journey with the operational checkout flow, including order queueing and the requirements defined for each deployment.', items: ['Connected checkout flow', 'Order queueing', 'Order status visibility', 'Counter handoff support', 'Configuration to business requirements'] },
  { id: 'inventory', label: 'Inventory', eyebrow: 'Real-time visibility', title: 'Keep menu availability closer to reality.', body: 'Real-time inventory support helps the ordering experience reflect operational availability and gives teams a clearer view of stock movement.', items: ['Real-time inventory updates', 'Menu availability alignment', 'Item-level visibility', 'Operational stock awareness', 'Deployment-specific configuration'] },
  { id: 'reports', label: 'Reports & Analytics', eyebrow: 'Configurable insight', title: 'Shape reporting around the questions you ask.', body: 'Reporting and analytics can be configured to the information, roles, and workflows a client needs rather than forcing every business into one template.', items: ['Sales and order reporting', 'Product performance views', 'Operational summaries', 'Role-aware access', 'Custom reporting requirements'] },
  { id: 'customers', label: 'Customers', eyebrow: 'Configurable engagement', title: 'Add customer tools when they serve the experience.', body: 'Customer profiles, loyalty, promotions, and related tools can be scoped around client needs and the experience they want to provide.', items: ['Customer profiles', 'Loyalty options', 'Promotions and bundles', 'Repeat-order support', 'Bespoke customer workflows'] },
];

export const faqs = [
  ['What is Ez Kyosk?', 'Ez Kyosk is a self-ordering and connected checkout system for businesses. It connects customer ordering, payments, and order queue tracking, with additional capabilities configured around your requirements.'],
  ['How do customers place and collect an order?', 'Customers select products, review their order, and complete payment. They can then follow their order number on the queue display or scan an optional tracking QR, and collect their order when it is ready.'],
  ['Do customers still need a cashier?', 'Customers can complete supported electronic payments through the kiosk without a separate cashier checkout. An optional cashier-assisted payment route accommodates customers who prefer cash.'],
  ['What payment methods does Ez Kyosk support?', 'Ez Kyosk supports card, QR, GCash, Maya, and other supported e-wallet payment paths through AltPayNet. The available methods and terminal configuration are confirmed for each deployment.'],
  ['How do customers track their orders?', 'After successful payment, customers can follow their order number on the customer-facing queue display or scan a tracking QR to view order status. For cash payments, the cashier can provide the order number, tracking QR, or both after payment. Scanning is optional, and the tracking QR is separate from a payment QR.'],
  ['Can Ez Kyosk automate inventory?', 'Yes. Automated inventory updates and menu-availability controls can be included when requested and agreed in the quotation. These capabilities are not included automatically in every package.'],
  ['Can Ez Kyosk work with my existing setup?', 'Compatibility with your existing POS, printers, payment devices, and other hardware is assessed during consultation. Share your current setup so the required integrations can be evaluated before the scope is agreed.'],
  ['What types of businesses can use Ez Kyosk?', 'Ez Kyosk serves cafés, bakeries, restaurants, and quick-service businesses. It can also be configured for retail, wellness, beauty, services, and B2B requirements.'],
  ['Can Ez Kyosk be customized for our business?', 'Yes. Reports, analytics, loyalty, promotions, automated inventory, and other additional features can be scoped around your business needs. The agreed features and implementation requirements are documented in the quotation.'],
  ['How much does Ez Kyosk cost?', 'Pricing depends on your selected software, hardware, integrations, and customization requirements. Software-only, hardware-only, and combined packages are available, with pricing and payment terms defined in your quotation.'],
];
