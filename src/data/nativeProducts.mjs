// Illustrative browser-independent data, never a real order or payment record.
export const sampleMenu = Object.freeze([
  Object.freeze({ name: 'Coffee', unitPrice: 100, quantity: 1 }),
  Object.freeze({ name: 'Sandwich', unitPrice: 150, quantity: 1 }),
  Object.freeze({ name: 'Cookie', unitPrice: 50, quantity: 1 }),
]);
export const sampleOrderTotal = sampleMenu.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
export const sampleOrderQuantity = sampleMenu.reduce((sum, item) => sum + item.quantity, 0);
// Local demonstration bounds, not a product/order-limit claim.
export const sampleQuantityLimit = 99;
export const clampSampleQuantity = quantity => Math.min(sampleQuantityLimit, Math.max(0, Math.trunc(Number(quantity) || 0)));
export const formatSamplePrice = value => new Intl.NumberFormat('en-PH', {
  style: 'currency', currency: 'PHP', minimumFractionDigits: 2, maximumFractionDigits: 2,
}).format(value);

export const inventoryItems = Object.freeze([
  { name:'Coffee Beans', stock:24, unit:'kg', status:'In Stock' },
  { name:'Paper Cups', stock:8, unit:'packs', status:'Low Stock' },
  { name:'Fresh Milk', stock:12, unit:'L', status:'In Stock' },
  { name:'Matcha Powder', stock:3, unit:'kg', status:'Low Stock' },
  { name:'Sugar', stock:18, unit:'kg', status:'In Stock' },
].map(Object.freeze));
export const weeklyOrders = Object.freeze([
  ['Mon',12],['Tue',18],['Wed',15],['Thu',22],['Fri',19],['Sat',25],['Sun',21],
].map(([day,orders])=>Object.freeze({day,orders})));
export const weeklyOrderTotal = weeklyOrders.reduce((sum,item)=>sum+item.orders,0);
export const averageDailyOrders = (weeklyOrderTotal / weeklyOrders.length).toFixed(1);
export const peakOrderDay = weeklyOrders.reduce((peak,item)=>item.orders>peak.orders?item:peak);
export const queueOrders = Object.freeze([
  { number:101, items:'Coffee ×1, Cookie ×1', status:'Ready for Pickup' },
  { number:102, items:'Sandwich ×1, Coffee ×1', status:'Ready for Pickup' },
  { number:104, items:'Coffee ×2, Sandwich ×1', status:'Preparing' },
  { number:105, items:'Coffee ×1, Cookie ×2', status:'Preparing' },
  { number:106, items:'Sandwich ×2, Cookie ×1', status:'Preparing' },
].map(Object.freeze));
export const preparingCount = queueOrders.filter(order=>order.status==='Preparing').length;
export const pickupCount = queueOrders.filter(order=>order.status==='Ready for Pickup').length;
export const categoryMix = Object.freeze([
  ['Coffee',35],['Pastries',25],['Matcha',22],['Espresso',18],
].map(([name,percentage])=>Object.freeze({name,percentage})));
export const customerTools = Object.freeze([
  { title:'Profile', detail:'Guest record', icon:'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9v-2a7 7 0 0 1 14 0v2' },
  { title:'Loyalty', detail:'Configurable', icon:'m12 3 3 6 6 1-4 5 1 6-6-3-6 3 1-6-4-5 6-1 3-6Z' },
  { title:'Promotions', detail:'Configurable', icon:'M3 3h8l10 10-8 8L3 11V3Zm4 4h.01' },
  { title:'Repeat orders', detail:'Configurable', icon:'M4 10a8 8 0 0 1 14-4l2 2M20 3v5h-5M20 14a8 8 0 0 1-14 4l-2-2M4 21v-5h5' },
].map(Object.freeze));
