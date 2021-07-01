function SideChatList({ users, selectedUser }) {
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
					return (
						<li key={index}>
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
						</li>
					)
			})}
		</ul>
	)
}

export default SideChatList
