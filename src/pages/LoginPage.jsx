import { Link } from 'react-router-dom'

function LoginPage({ users, setSelectedUser }) {
	return (
		<div className="main-wrapper login">
			<section className="login-section">
				<h2>Choose your user!</h2>
				<ul>
					{users.map((user, index) => (
						<li key={index}>
							<Link to="/logged-in" user={user}>
								<button
									className="user-selection"
									onClick={e => {
										setSelectedUser(user)
									}}>
									<img
										className="avatar"
										width="50"
										height="50"
										src={user.avatar}
										alt={`avatar ${user.firstName} ${user.lastName}`}
									/>
									<h3>{`${user.firstName} ${user.lastName}`}</h3>
								</button>
							</Link>
						</li>
					))}

					<li>
						<button className="user-selection">
							<h3>+ Add a new user</h3>
						</button>
					</li>
				</ul>
			</section>
		</div>
	)
}

export default LoginPage
