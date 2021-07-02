function MessagesPanel({ messages, selectedUser }) {
	return (
		<ul className="conversation__messages">
			{messages.map(message => (
				<li
					key={message.id}
					className={`${message.userId === selectedUser.id ? 'outgoing' : ''}`}>
					<p>{message.messageText}</p>
				</li>

				// message.userId === selectedUser.id ? 'outgoing' : ''
			))}
		</ul>
	)
}

export default MessagesPanel
