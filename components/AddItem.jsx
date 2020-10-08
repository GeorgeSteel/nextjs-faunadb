import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const CREATE_ITEM = gql`
  mutation CreateItem($data: ItemInput!) {
    createItem(data: $data) {
      _id
    }
  }
`
const ITEMS_QUERY = gql`
  {
    allItems {
      data {
        _id
        name
      }
    }
  }
`
export default function AddItem() {
  const [showForm, setShowForm] = useState(false)
  const [newItemName, setNewItemName] = useState('')
  const [createItem, { loading }] = useMutation(CREATE_ITEM, {
    refetchQueries: [{ query: ITEMS_QUERY }],
    onCompleted: () => {
      setNewItemName('')
      setShowForm(false)
    },
  })

  if (showForm) {
    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          createItem({ variables: { data: { name: newItemName } } })
        }}
      >
        <label>
          <input
            disabled={loading}
            type="text"
            value={newItemName}
            onChange={e => setNewItemName(e.target.value)}
            style={{ marginRight: '5px' }}
          />
        </label>
        <input disabled={loading} type="submit" value="Add" />
      </form>
    )
  }
  return <button onClick={() => setShowForm(true)}>Add Item</button>
}
