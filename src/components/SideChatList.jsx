import { Link } from 'react-router-dom'

function SideChatList({
	users,
	selectedUser,
	findConversation,
	conversations,
}) {
	if (conversations.length === 0) return 'Loading conversations..'

	return (
		<ul>
			{/* <!-- This first item should always be present --> */}
			<li>
				<button className="chat-button">
					<div>
						<h3>+ Start a new Chat</h3>
					</div>
				</button>
			</li>
			{/* <!--  --> */}
			{users.map((user, index) => {
				if (user.id !== selectedUser.id)
					//messages are those with the selectedUser.id
					// const conversation = conversations.find(
					// 	conversation =>
					// 		conversation.userId === user.id ||
					// 		conversation.participantId === user.id
					// )
					return (
						<li key={index}>
							<Link to={`/logged-in/${findConversation(user)}`}>
								<button className="chat-button">
									<img
										className="avatar"
										height="50"
										width="50"
										alt={`avatar ${user.firstName} ${user.lastName}`}
										src={user.avatar}
									/>
									<div>
										<h3>{`${user.firstName} ${user.lastName}`}</h3>
										<p>Last message</p>
									</div>
								</button>
							</Link>
						</li>
					)
			})}
		</ul>
	)
}

export default SideChatList
