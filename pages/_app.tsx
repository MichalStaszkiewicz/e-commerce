import '@/styles/globals.css'
import '@/styles/header.css'
import '@/styles/benefit.css'
import '@/styles/big_sale.css'
import '@/styles/collection.css'
import '@/styles/featured_product.css'
import '@/styles/featured_products.css'
import '@/styles/globals.css'
import '@/styles/footer.css'
import '@/styles/primary_button.css'
import '@/styles/shopping_benefits.css'
import '@/styles/home_promotion.css'
import '@/styles/shop_nav_history_container.css'
import '@/styles/shop_content.css'
import type { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


library.add(faMagnifyingGlass);


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
