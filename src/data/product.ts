export const steps = [
  ['Browse', 'Explore the digital menu and its product categories.'],
  ['Select', 'Choose products and options to add to the order.'],
  ['Adjust', 'Change quantities and fine-tune the selection.'],
  ['Review', 'Check the order, options, and calculated total.'],
  ['Confirm', 'Send the order into the connected checkout flow.'],
];

export const productCategories = [
  { id: 'self-ordering', label: 'Self-Ordering', eyebrow: 'Customer experience', title: 'Every choice, clear from the first tap.', body: 'Give customers a focused touchscreen journey for exploring the menu, choosing products, adjusting their order, and confirming with confidence.', items: ['Digital menu and categories', 'Product options and quantities', 'Cart and order review', 'Calculated totals', 'Order confirmation'] },
  { id: 'pos-checkout', label: 'POS & Checkout', eyebrow: 'Connected operations', title: 'Move confirmed orders into checkout.', body: 'Connect the self-ordering journey with the operational checkout flow, including order queueing and the requirements defined for each deployment.', items: ['Connected checkout flow', 'Order queueing', 'Order status visibility', 'Counter handoff support', 'Configuration to business requirements'] },
  { id: 'inventory', label: 'Inventory', eyebrow: 'Real-time visibility', title: 'Keep menu availability closer to reality.', body: 'Real-time inventory support helps the ordering experience reflect operational availability and gives teams a clearer view of stock movement.', items: ['Real-time inventory updates', 'Menu availability alignment', 'Item-level visibility', 'Operational stock awareness', 'Deployment-specific configuration'] },
  { id: 'reports', label: 'Reports & Analytics', eyebrow: 'Configurable insight', title: 'Shape reporting around the questions you ask.', body: 'Reporting and analytics can be configured to the information, roles, and workflows a client needs rather than forcing every business into one template.', items: ['Sales and order reporting', 'Product performance views', 'Operational summaries', 'Role-aware access', 'Custom reporting requirements'] },
  { id: 'customers', label: 'Customers', eyebrow: 'Configurable engagement', title: 'Add customer tools when they serve the experience.', body: 'Customer profiles, loyalty, promotions, and related tools can be scoped around client needs and the experience they want to provide.', items: ['Customer profiles', 'Loyalty options', 'Promotions and bundles', 'Repeat-order support', 'Bespoke customer workflows'] },
];

export const faqs = [
  ['What is Ez Kyosk?', 'Ez Kyosk is self-ordering and checkout kiosk software for hospitality, retail, wellness, and service businesses. It brings menu or product browsing, order review, checkout, payments, inventory visibility, and order tracking into a connected experience.'],
  ['How does self-ordering work?', 'Customers browse the touchscreen menu, select products and options, adjust quantities, review their order and total, then confirm. The core journey is Browse → Select → Adjust → Review → Confirm.'],
  ['Is Ez Kyosk a POS system?', 'Ez Kyosk is customer-facing self-ordering software with connected POS and checkout capabilities. The exact checkout configuration is matched to each business and deployment.'],
  ['Can it accept card, QR, GCash, or Maya payments?', 'Yes. Payment processing through the approved AltPayNet relationship can support card, QR, GCash, and Maya payment paths. The precise terminal, wallet, and deployment requirements are confirmed during consultation.'],
  ['Does it track inventory and orders?', 'Yes. The operational scope includes real-time inventory and order queueing or tracking. Configuration depends on the business workflow and deployment requirements.'],
  ['Can it work with my current setup?', 'Ez Kyosk is configurable, but compatibility with a specific POS, printer, kitchen system, hardware model, or provider must be assessed before it is promised. Share your current setup during the requirements discussion.'],
  ['What types of businesses can use it?', 'Ez Kyosk is initially focused on hospitality and food businesses, including cafés, bakeries, restaurants, and quick-service operations. It can also be explored for retail, wellness, beauty, service, and B2B use cases.'],
  ['Can you add features for our business?', 'Yes. Reports, analytics, customer tools, loyalty, promotions, and other capabilities can be scoped according to client requirements and approved during the quotation and implementation process.'],
  ['How much does Ez Kyosk cost?', 'Pricing depends on the hardware, integrations, configuration, and implementation requirements. Request a demo so the team can understand your operation before preparing a quotation.'],
];
