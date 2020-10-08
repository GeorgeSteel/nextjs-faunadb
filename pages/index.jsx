import Head from 'next/head'
import AddItem from '../components/AddItem'
import ItemList from '../components/ItemList'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next & Fauna App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ padding: '5px' }}>
        <h3>My TODO List</h3>

        <AddItem />
        <ItemList />
      </div>
    </div>
  )
}
