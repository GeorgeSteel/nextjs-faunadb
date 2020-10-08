import Head from 'next/head'
import ItemList from '../components/ItemList'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next & Fauna App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ padding: '5px' }}>
        <h3>My Todo Items</h3>
        <div>items to get loaded here</div>

        <ItemList />
      </div>
    </div>
  )
}
