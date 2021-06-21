import { useAuth } from 'components/Auth/Auth'
import { Route, Redirect } from 'react-router-dom'

export function PrivateRoute({ children, ...rest }) {
	const { user } = useAuth()

	return (
		<>
			{user.id ? (
				<Route {...rest}>{children}</Route>
			) : (
				<Redirect to="/auth/login" />
			)}
		</>
	)
}
