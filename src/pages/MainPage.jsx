import MessagesPanel from './MessagesPanel'
import SideChatList from '../components/SideChatList'
import { Redirect, Route } from 'react-router-dom'

function MainPage({
	selectedUser,
	users,
	findConversation,
	conversations,
	setMessages,
	messages,
}) {
	if (!selectedUser) return <Redirect to="/login" />

	return (
		<div className="main-wrapper">
			{/* <!-- SIDE PANEL --> */}
			<aside>
				{/* <!-- Side Header --> */}
				<header className="panel">
					<img
						className="avatar"
						width="50"
						height="50"
						src={selectedUser.avatar}
						alt={`avatar ${selectedUser.firstName} ${selectedUser.lastName}`}
					/>
					<h3>{`${selectedUser.firstName} ${selectedUser.lastName}`}</h3>
				</header>

				{/* SEARCH FORM*/}
				<form className="aside__search-container">
					<input
						type="search"
						name="messagesSearch"
						placeholder="Search chats"
						value=""
					/>
				</form>

				{/* SIDE CHAT LIST */}
				<SideChatList
					users={users}
					selectedUser={selectedUser}
					findConversation={findConversation}
					conversations={conversations}
					setMessages={setMessages}
				/>
			</aside>

			{/* MAIN CHAT SECTION */}
			<main className="conversation">
				{/* <!-- Chat header --> */}
				<header className="panel"></header>

				{/* MESSAGE BOX */}
				<ul className="conversation__messages">
					<Route path="/logged-in/:chatId">
						<MessagesPanel messages={messages} selectedUser={selectedUser} />
					</Route>
				</ul>

				{/* FOOTER  */}
				<footer>
					<form className="panel conversation__message-box">
						<input type="text" placeholder="Type a message" rows="1" value="" />
						<button type="submit">
							{/* <!-- This is the send button --> */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24">
								<path
									fill="currentColor"
									d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path>
							</svg>
						</button>
					</form>
				</footer>
			</main>
		</div>
	)
}

export default MainPage
