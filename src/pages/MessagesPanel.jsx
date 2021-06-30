function MessagesPanel() {
	return (
		<ul className="conversation__messages">
			<li className="outgoing">
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
					excepturi non odit quisquam et assumenda suscipit maxime officiis
					repellat possimus! Soluta illum rerum eligendi labore ut nemo quod
					voluptates ad.
				</p>
			</li>

			{/* <!-- Outgoing messages are messages sent by the current logged in user --> */}
			<li className="outgoing">
				<p>Lorem ipsum...</p>
			</li>
			{/* <!--  --> */}

			{/* <!-- This one doesnt belong to the current logged in user --> */}
			<li>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
					excepturi non odit quisquam et assumenda suscipit maxime officiis
					repellat possimus!
				</p>
			</li>

			{/* <!--  --> */}
			<li className="outgoing">
				<p>Some test message</p>
			</li>
			<li className="outgoing">
				<p>more messagesss!!!</p>
			</li>
			<li className="outgoing">
				<p>more messagesss!!!</p>
			</li>
			<li className="outgoing">
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
					excepturi non odit quisquam et assumenda suscipit maxime officiis
					repellat possimus! Soluta illum rerum eligendi labore ut nemo quod
					voluptates ad.Lorem ipsum dolor sit amet consectetur, adipisicing
					elit. Natus excepturi non odit quisquam et assumenda suscipit maxime
					officiis repellat possimus! Soluta illum rerum eligendi labore ut nemo
					quod voluptates ad.Lorem ipsum dolor sit amet consectetur, adipisicing
					elit. Natus excepturi non odit quisquam et assumenda suscipit maxime
					officiis repellat possimus! Soluta illum rerum eligendi labore ut nemo
					quod voluptates ad.Lorem ipsum dolor sit amet consectetur, adipisicing
					elit. Natus excepturi non odit quisquam et assumenda suscipit maxime
					officiis repellat possimus! Soluta illum rerum eligendi labore ut nemo
					quod voluptates ad.Lorem ipsum dolor sit amet consectetur, adipisicing
					elit. Natus excepturi non odit quisquam et assumenda suscipit maxime
					officiis repellat possimus! Soluta illum rerum eligendi labore ut nemo
					quod voluptates ad.Lorem ipsum dolor sit amet consectetur, adipisicing
					elit. Natus excepturi non odit quisquam et assumenda suscipit maxime
					officiis repellat possimus! Soluta illum rerum eligendi labore ut nemo
					quod voluptates ad.Lorem ipsum dolor sit amet consectetur, adipisicing
					elit. Natus excepturi non odit quisquam et assumenda suscipit maxime
					officiis repellat possimus! Soluta illum rerum eligendi labore ut nemo
					quod voluptates ad.
				</p>
			</li>
		</ul>
	)
}

export default MessagesPanel
