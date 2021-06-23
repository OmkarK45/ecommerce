import { createContext, useContext, useEffect, useState } from 'react'
import { getUser, logout } from 'services/axios'

const AuthContext = createContext()

/**
 * @param {React.ReactNode}  - children - React child
 */
export function AuthProvider({ children }) {
	const [authState, setAuthState] = useState({
		user: null,
		isAuthenticated: false,
	})

	useEffect(() => {
		const getUserInfo = async () => {
			try {
				await getUser()
					.then((user) => {
						setAuthState({
							user,
							isAuthenticated: true,
						})
						console.log(user)
					})
					.catch((err) => {
						setAuthState({
							user: null,
							isAuthenticated: false,
						})
						console.log(err)
					})
			} catch (error) {
				setAuthState({
					user: null,
					isAuthenticated: true,
				})
			}
		}
		getUserInfo()
	}, [])

	function setAuthInfo({ user }) {
		setAuthState({
			user,
			isAuthenticated: user && user.id ? true : false,
		})
	}

	async function logoutUser() {
		await logout()
			.then(() => {
				setAuthState({
					user: null,
					isAuthenticated: false,
				})
			})
			.catch((err) => {
				// do better here
				console.log(err)
			})
	}

	return (
		<AuthContext.Provider
			value={{
				user: authState.user,
				isAuthenticated: authState.isAuthenticated,
				setAuthState: (authInfo) => setAuthInfo(authInfo),
				logoutUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	return useContext(AuthContext)
}
