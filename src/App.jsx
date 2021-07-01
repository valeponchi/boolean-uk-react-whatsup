import { Route, Switch, Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import MessagesPanel from './pages/MessagesPanel'

function App() {
	const [users, setUsers] = useState([])
	const [selectedUser, setSelectedUser] = useState({})

	useEffect(
		() =>
			fetch('http://localhost:4000/users')
				.then(resp => resp.json())
				.then(setUsers),
		[]
	)

	return (
		<>
			<Switch>
				<Route path="/" exact>
					<Redirect to="/login" />
				</Route>

				<Route path="/login" exact>
					<LoginPage users={users} setSelectedUser={setSelectedUser} />
				</Route>

				<Route path="/logged-in" exact>
					<MainPage selectedUser={selectedUser} users={users} />
				</Route>
				<Route path="/logged-in/:chatId" exact>
					{/* <MessagesPanel /> */}
				</Route>
			</Switch>
		</>
	)
}

export default App
