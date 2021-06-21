import { initReactQueryAuth } from 'react-query-auth'
import { login, register, logout, getUser } from 'services/axios'

export const { AuthProvider, useAuth } = initReactQueryAuth({
	loadUser: getUser,
	loginFn: login,
	registerFn: register,
	logoutFn: logout,
})
