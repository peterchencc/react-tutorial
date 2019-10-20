import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Actions</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}

const SimpleComponent = () => {
  return <div>SimpleComponent</div>
}

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props

    return (
      <div>
        <table>
          <TableHeader />
          <TableBody
            characterData={characterData}
            removeCharacter={removeCharacter}
          />
        </table>
        <SimpleComponent />
      </div>
    )
  }
}

export default Table
