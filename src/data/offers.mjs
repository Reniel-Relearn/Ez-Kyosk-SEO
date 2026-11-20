// Approved commercial copy; no invented billing unit, tax or contract terms.
export const offers = [
  { id:'demo', title:'Free Software Demo', price:'PHP 0', tagline:'Try before you buy.',
    description:'See your own business menu on Ez Kyosk before investing in a machine.',
    costs:[], items:['Your logo and branding','Up to 10 menu items','Interactive self-ordering demo','Shopping cart and order review','Free consultation'],
    note:'No commitment. No payment required. Software preview only.', action:'Get My Free Demo' },
  { id:'starter', title:'Ez Kyosk Starter', price:'PHP 1,990/month', tagline:'Your own self-ordering kiosk.',
    description:'Let customers browse your menu, choose their favorites, and review their orders on a dedicated touchscreen.',
    costs:[['Kiosk machine','PHP 89,000'],['Setup and onboarding','PHP 9,900']],
    items:['Portrait touchscreen kiosk software','Your digital menu and branding','Up to 50 menu items','Shopping cart and automatic totals','Order review and confirmation','Initial software setup and staff training'],
    note:'Best for small cafés, bakeries, and restaurants.', action:'Get a Starter Quote' },
  { id:'complete', title:'Ez Kyosk Complete', price:'PHP 3,990/month', tagline:'Self-ordering, POS, and payments together.',
    description:'Give customers a convenient way to order and pay while keeping checkout connected to your business operations.',
    costs:[['Kiosk machine','PHP 89,000'],['Setup and integration','PHP 14,900']],
    items:['Everything in Starter','POS and checkout integration','AltPayNet payment configuration','Card and QR payment options','GCash and Maya payment options where supported','Receipt and kitchen printer connectivity','Order queueing and tracking','Priority technical support'],
    note:'Best for busy cafés, restaurants, and quick-service businesses.', action:'Request a Complete Package Quote' },
];
