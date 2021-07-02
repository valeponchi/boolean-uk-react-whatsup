import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'

function App() {
	const [users, setUsers] = useState([])
	const [selectedUser, setSelectedUser] = useState(null)
	const [conversations, setConversations] = useState([])
	const [messages, setMessages] = useState([])

	//IF NO LINK IN LOGIN-PAGE, the button change the selectedUser
	const history = useHistory()

	useEffect(() => {
		if (!selectedUser) {
			console.log('user not found.. ')
			history.push('/login')
			setConversations([])
		} else {
			console.log('user found.. ')

			fetch(`http://localhost:4000/messages/?conversationId=${selectedUser.id}`)
				.then(resp => resp.json())
				.then(setMessages)

			history.push('/logged-in')
		}
	}, [selectedUser, history])

	function findConversation(user) {
		let selectedChat = conversations.find(
			chat =>
				(chat.userId === selectedUser.id && chat.participantId === user.id) ||
				(chat.userId === user.id && chat.participantId === selectedUser.id)
		)
		console.log('selectedChat:', selectedChat)

		return selectedChat.id
	}

	useEffect(
		() =>
			fetch('http://localhost:4000/conversations')
				.then(resp => resp.json())
				.then(setConversations),
		[]
	)

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

				<Route path="/logged-in">
					<MainPage
						selectedUser={selectedUser}
						users={users}
						findConversation={findConversation}
						conversations={conversations}
						messages={messages}
						setMessages={setMessages}
					/>
				</Route>

				<Route>
					<h1 style={{ padding: 200 }}>Page not found.. 🛸</h1>
				</Route>
			</Switch>
		</>
	)
}

export default App
