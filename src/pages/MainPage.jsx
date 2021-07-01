import MessagesPanel from './MessagesPanel'
import SideChatList from '../components/SideChatList'
import { Redirect } from 'react-router-dom'
import { useState } from 'react'

function MainPage({ selectedUser, users, findConversation, conversations }) {
	if (!selectedUser) return <Redirect to="/login" />

	//  const {chatId} = useParams()
	//  const selectedChat = chatId
	//  ? chats.filter(chat => chat.id === chatId)
	//  : chats

	return (
		<div className="main-wrapper">
			{/* <!-- Side Panel --> */}
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

				{/* <!-- Search form --> */}
				<form className="aside__search-container">
					<input
						type="search"
						name="messagesSearch"
						placeholder="Search chats"
						value=""
					/>
				</form>

				{/* Side Chat List goes here. Check side-chat-list.html */}
				<SideChatList
					users={users}
					selectedUser={selectedUser}
					findConversation={findConversation}
					conversations={conversations}
				/>
			</aside>

			{/* <!-- Main Chat Section --> */}
			<main className="conversation">
				{/* <!-- Chat header --> */}
				<header className="panel"></header>

				<MessagesPanel />

				{/* <!-- Message Box --> */}
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
