import { Route, Switch, Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import MessagesPanel from './pages/MessagesPanel'

function App() {
	const [users, setUsers] = useState([])
	const [selectedUser, setSelectedUser] = useState(null)
	const [conversations, setConversations] = useState(null)
	const [messages, setMessages] = useState(null)

	function findConversation(chats, user, selectedUser) {
		let selectedChat = chats.filter(
			chat =>
				(chat.userId === selectedUser.id && chat.participantId === user.id) ||
				(chat.userId === user.id && chat.participantId === selectedUser.id)
		)
		console.log('selectedChat:', selectedChat)

		// return selectedChat.id
	}

	// http://localhost:4000/messages/?conversationId=1
	// useEffect(
	// 	() =>
	// 		fetch(`http://localhost:4000/messages/?conversationId=${chatId}`)
	// 			.then(resp => resp.json())
	// 			.then(setMessages),
	// 	[messages]
	// )

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

				<Route path="/logged-in" exact>
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
