import React from 'react'

const History = ({ history }) => {
  return (
    <div>
        { history.join(', ') }
    </div>
  )
}

export default History;
