import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const ITEMS_QUERY = gql`
  query {
    allItems {
      data {
        _id
        name
      }
    }
  }
`

export default function ItemList() {
  const { data, loading } = useQuery(ITEMS_QUERY)

  if (loading) return <p>Loading...</p>

  console.log(data)
  return (
    <ul>
      {data?.allItems.data.map(item => (
        <li key={item._id}>{item.name}</li>
      ))}
    </ul>
  )
}
