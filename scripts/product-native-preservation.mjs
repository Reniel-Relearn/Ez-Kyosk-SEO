// Only the five owner-approved native visual substitutions are reconstructed.
// Original marketing copy, tab logic, icons, assets and golden hashes remain protected.
const legacyManifest = "const productImages: Record<string, { stem: string; alt: string }> = {\n  'self-ordering': { stem: 'product-self-ordering-v1', alt: 'Illustrative Ez Kyosk portrait kiosk menu with generic café items and an enlarged matching order review' },\n  'pos-checkout': { stem: 'product-pos-checkout-v1', alt: 'Illustrative Ez Kyosk staff checkout workstation with an order queue, receipt printer, and matching generic checkout detail' },\n  'inventory': { stem: 'product-inventory-v1', alt: 'Illustrative Ez Kyosk inventory tablet beside stock containers and an enlarged sample item availability table' },\n  'reports': { stem: 'product-reports-v1', alt: 'Illustrative Ez Kyosk reporting laptop with a sample item-sales chart and matching sales-summary table' },\n  'customers': { stem: 'product-customers-v1', alt: 'Illustrative Ez Kyosk smartphone sample profile beside configurable Profile, Loyalty, and Promotions tools' },\n};\n";
const legacyVisual = "{productImages[category.id] ? (\n        <div class=\"product-panel-visual product-panel-visual--image\">\n          <img class=\"product-panel-image\" src={sitePath(`/assets/images/${productImages[category.id].stem}-960.webp`)}\n            srcset={[480, 960, 1440].map(width => `${sitePath(`/assets/images/${productImages[category.id].stem}-${width}.webp`)} ${width}w`).join(', ')}\n            sizes=\"(max-width: 720px) calc(100vw - 98px), (max-width: 980px) 80vw, 44vw\"\n            width=\"1440\" height=\"1080\" loading=\"lazy\" decoding=\"async\"\n            alt={productImages[category.id].alt} />\n        </div>\n      ) : (\n      <div class:list={['product-panel-visual', `visual-${category.id}`]} aria-hidden=\"true\">\n        <div class=\"ui-window\"><div class=\"ui-top\"><span></span><span></span><span></span><b>{category.label}</b></div><div class=\"ui-body\"><div class=\"ui-sidebar\"><i></i><i></i><i></i><i></i></div><div class=\"ui-content\"><div class=\"ui-metric\"></div><div class=\"ui-lines\"><i></i><i></i><i></i></div><div class=\"ui-cards\"><span></span><span></span><span></span></div></div></div></div>\n      </div>\n      )}";
const legacyEntries = [
  {
    "id": "self-ordering",
    "stem": "product-self-ordering-v1",
    "alt": "Illustrative Ez Kyosk portrait kiosk menu with generic café items and an enlarged matching order review"
  },
  {
    "id": "pos-checkout",
    "stem": "product-pos-checkout-v1",
    "alt": "Illustrative Ez Kyosk staff checkout workstation with an order queue, receipt printer, and matching generic checkout detail"
  },
  {
    "id": "inventory",
    "stem": "product-inventory-v1",
    "alt": "Illustrative Ez Kyosk inventory tablet beside stock containers and an enlarged sample item availability table"
  },
  {
    "id": "reports",
    "stem": "product-reports-v1",
    "alt": "Illustrative Ez Kyosk reporting laptop with a sample item-sales chart and matching sales-summary table"
  },
  {
    "id": "customers",
    "stem": "product-customers-v1",
    "alt": "Illustrative Ez Kyosk smartphone sample profile beside configurable Profile, Loyalty, and Promotions tools"
  }
];
export function normalizeNativeProductSource(source) {
  return source
    .replace("import NativeSelfOrdering from './NativeSelfOrdering.astro';\n", '')
    .replace("import NativeProductPanel from './NativeProductPanel.astro';\n", '')
    .replace("import '../styles/product-native.css';\n", '')
    .replace('\n---\n<div', '\n'+legacyManifest+'---\n<div')
    .replace("{category.id === 'self-ordering' ? (\n        <NativeSelfOrdering />\n      ) : (\n        <NativeProductPanel kind={category.id} />\n      )}", legacyVisual);
}
export function normalizeNativeProductHtml(html) {
  for(const {id,stem,alt} of legacyEntries) {
    const image='<div class="product-panel-visual product-panel-visual--image"><img class="product-panel-image" src="/Ez-Kyosk-SEO/assets/images/'+stem+'-960.webp" srcset="/Ez-Kyosk-SEO/assets/images/'+stem+'-480.webp 480w, /Ez-Kyosk-SEO/assets/images/'+stem+'-960.webp 960w, /Ez-Kyosk-SEO/assets/images/'+stem+'-1440.webp 1440w" sizes="(max-width: 720px) calc(100vw - 98px), (max-width: 980px) 80vw, 44vw" width="1440" height="1080" loading="lazy" decoding="async" alt="'+alt+'"></div>';
    html=html.replace(new RegExp('<aside class="product-native" data-native-product="'+id+'"[\\s\\S]*?<\\/aside>'),image);
  }
  return html;
}
