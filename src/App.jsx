const App = () => {

  const friends = [
    { id: 1, name: 'John', age: 20},
    { id: 2, name: 'Peter', age: 30}
  ]
  return (
    <div>
      <h1>Friends</h1>
      <ul>
        {
          friends.map(friend => 
            <li key={friend.id}>{friend.name} {friend.age}</li>
          )
        }
      </ul>
    </div>
  )
}

export default App