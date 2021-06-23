import { useForm } from 'react-hook-form'
import AuthContainer from './AuthContainer'
import Button from 'components/ui/Button/Button'
import Input from 'components/ui/Input'
import { Link, useHistory } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'
import { useAuth } from 'context/authContext'
import toast from 'react-hot-toast'
import { login } from 'services/axios'

// TODO : move this elsewhere
const loginSchema = yup.object().shape({
	email: yup
		.string()
		.email('Email must be a valid email.')
		.required('Email is required.'),
	password: yup.string().required('Password is required.'),
})

export default function Login() {
	const { user } = useAuth()

	const {
		register,
		handleSubmit,
		formState: { errors, isDirty },
	} = useForm({
		resolver: yupResolver(loginSchema),
	})

	const { isLoading, mutate } = useMutation(login)

	const history = useHistory()

	// usequery mutation with loading
	const onSubmit = (data) => {
		mutate(data, {
			onSuccess: () => {
				history.push('/store')
			},
			onError: () => toast.error('Something went wrong. Please try again.'),
		})
	}

	return (
		<>
			{user && <pre>{JSON.stringify(user, null, 2)}</pre>}
			<div className="min-h-screen">
				<AuthContainer title="Sign in">
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
						<Input
							label="Email Address"
							placeholder="you@example.com"
							{...register('email')}
							error={errors.email?.message}
						/>
						<Input
							label="Password"
							type="password"
							placeholder="Password"
							{...register('password')}
							error={errors.password?.message}
						/>
						<Button
							disabled={!isDirty && true}
							variant="primary"
							fullWidth
							type="submit"
							isLoading={isLoading && true}
						>
							Submit
						</Button>
					</form>
					<div className="mt-3">
						<p>
							Don&lsquo;t have an account ?{' '}
							<Link to="/auth/register"> Sign up</Link>
							<Link to="/cart"> Cart</Link>
						</p>
					</div>
				</AuthContainer>
			</div>
		</>
	)
}
