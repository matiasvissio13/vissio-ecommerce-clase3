import { Products } from './components/Products/Products';

function App() {

  const products = [
    {
      id: 1,
      title: "Samsung Z Flip4",
      img: "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-f721blvkaro/gallery/ar-galaxy-z-flip4-f721-sm-f721blvkaro-thumb-534303234?$240_240_PNG$",
      price: 700,
      sku: "sku-ashf-yrs",
      qty: 1
    },
    {
      id: 2,
      title: "Heladera Samsung SpaceMax 716L",
      img: "https://images.samsung.com/is/image/samsung/p6pim/ar/rs27t5200s9-bg/gallery/ar-ref-sbs-rs5300-379833-rs27t5200s9-bg-thumb-404205136?$252_252_PNG$",
      price: 980,
      sku: "sku-ashf-yrs",
      qty: 1
    },
    {
      id: 3,
      title: "Samsung Galaxy S23",
      img: "https://images.samsung.com/ar/smartphones/galaxy-s23/compare/images/galaxy-s23-compare-cream.jpg",
      price: 1150,
      sku: "sku-ashf-yrs",
      qty: 1
    },
    {
      id: 4,
      title: "Mouse Logitech MX Anywhere 3S",
      img: "https://resource.logitech.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-anywhere-3s/product-gallery/graphite/mx-anywhere-3s-mouse-top-view-graphite.png?v=1",
      price: 70,
      sku: "sku-ashf-yrs",
      qty: 1
    },
    {
      id: 5,
      title: "Auriculares Logitech",
      img: "https://resource.logitech.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/video-conferencing/zone-wired-earbuds/zone-wired-earbuds-gallery-1-teams.png?v=1",
      price: 900,
      sku: "sku-ashf-yrs",
      qty: 1
    },
    {
      id: 6,
      title: "Samsung Galaxy S22",
      img: "https://images.samsung.com/is/image/samsung/p6pim/ar/2202/gallery/ar-galaxy-s22-s901-sm-s901ezklaro-thumb-530921588?$240_240_PNG$",
      price: 950,
      sku: "sku-ashf-yrs",
      qty: 1
    },
    {
      id: 7,
      title: "Teclado Logitech MX Mechanical MINI",
      img: "https://resource.logitech.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/mx-keys-mini/gallery/esp/mx-keys-mini-top-pale-gray-esp.png?v=1",
      price: 120,
      sku: "sku-ashf-yrs",
      qty: 1
    },
    {
      id: 8,
      title: "Samsung Z Flip4",
      img: "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-f721blvkaro/gallery/ar-galaxy-z-flip4-f721-sm-f721blvkaro-thumb-534303234?$240_240_PNG$",
      price: 700,
      sku: "sku-ashf-yrs",
      qty: 1
    },
    {
      id: 9,
      title: "Heladera Samsung SpaceMax 716L",
      img: "https://images.samsung.com/is/image/samsung/p6pim/ar/rs27t5200s9-bg/gallery/ar-ref-sbs-rs5300-379833-rs27t5200s9-bg-thumb-404205136?$252_252_PNG$",
      price: 980,
      sku: "sku-ashf-yrs",
      qty: 1
    },
    {
      id: 10,
      title: "Samsung Galaxy S23",
      img: "https://images.samsung.com/ar/smartphones/galaxy-s23/compare/images/galaxy-s23-compare-cream.jpg",
      price: 1150,
      sku: "sku-ashf-yrs",
      qty: 1
    },
    {
      id: 11,
      title: "Mouse Logitech MX Anywhere 3S",
      img: "https://resource.logitech.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-anywhere-3s/product-gallery/graphite/mx-anywhere-3s-mouse-top-view-graphite.png?v=1",
      price: 70,
      sku: "sku-ashf-yrs",
      qty: 1
    },
    {
      id: 12,
      title: "Auriculares Logitech",
      img: "https://resource.logitech.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/video-conferencing/zone-wired-earbuds/zone-wired-earbuds-gallery-1-teams.png?v=1",
      price: 900,
      sku: "sku-ashf-yrs",
      qty: 1
    },
    {
      id: 13,
      title: "Samsung Galaxy S22",
      img: "https://images.samsung.com/is/image/samsung/p6pim/ar/2202/gallery/ar-galaxy-s22-s901-sm-s901ezklaro-thumb-530921588?$240_240_PNG$",
      price: 950,
      sku: "sku-ashf-yrs",
      qty: 1
    },
    {
      id: 14,
      title: "Teclado Logitech MX Mechanical MINI",
      img: "https://resource.logitech.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/mx-keys-mini/gallery/esp/mx-keys-mini-top-pale-gray-esp.png?v=1",
      price: 120,
      sku: "sku-ashf-yrs",
      qty: 1
    },
  ]

  return (
    <main className='flex flex-col justify-center items-center py-5'>
      <Products products={products} />
    </main>
  );
}

export default App;
