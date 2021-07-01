import { Route, Switch, Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import MessagesPanel from './pages/MessagesPanel'

function App() {
	const [users, setUsers] = useState([])
	const [selectedUser, setSelectedUser] = useState(null)
	const [conversations, setConversations] = useState(null)

	// conversations = [
	//   {
	//     "id": 1,
	//     "userId": 1,
	//     "participantId": 2
	//   },
	//   {
	//     "id": 2,
	//     "userId": 1,
	//     "participantId": 3
	//   },
	//   {
	//     "id": 3,
	//     "userId": 2,
	//     "participantId": 3
	//   }
	// ]
	//selectedUser = {
	//   "id": 2,
	//   "firstName": "Tin",
	//   "lastName": "Man",
	//   "phoneNumber": "+44777766666",
	//   "avatar": "https://robohash.org/2"
	// }
	//clickedUser

	function findConversation(chats, user, selectedUser) {
		let selectedChat = chats.filter(
			chat =>
				(chat.userId === selectedUser.id && chat.participantId === user.id) ||
				(chat.userId === user.id && chat.participantId === selectedUser.id)
		)
		console.log('selectedChat:', selectedChat)
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

				<Route path="/logged-in" exact>
					<MainPage
						selectedUser={selectedUser}
						users={users}
						findConversation={findConversation}
						conversations={conversations}
					/>
				</Route>
				<Route path="/logged-in/:chatId" exact>
					{/* <MessagesPanel /> */}
				</Route>
			</Switch>
		</>
	)
}

export default App
