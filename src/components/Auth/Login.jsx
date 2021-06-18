import { useForm } from 'react-hook-form'
import AuthContainer from './AuthContainer'
import Button from 'components/ui/Button/Button'
import Input from 'components/ui/Input'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const loginSchema = yup.object().shape({
	email: yup.string().email().required('Email is required.'),
	password: yup
		.string()
		.required('Password is required.')
		.min(5, 'Password must be atleast 5 characters long.')
		.max(50),
})

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		resolver: yupResolver(loginSchema),
		mode: 'onBlur',
	})

	// usequery mutation with loading
	const onSubmit = (data) => console.log(data)

	return (
		<>
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
							disabled={!isValid && true}
							variant="primary"
							fullWidth
							type="submit"
							// isLoading={true}
						>
							Submit
						</Button>
					</form>
					<div className="mt-3">
						<p>
							Don&lsquo;t have an account ?{' '}
							<Link to="/auth/register"> Sign up</Link>
						</p>
					</div>
				</AuthContainer>
			</div>
		</>
	)
}
