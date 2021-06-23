import { useForm } from 'react-hook-form'
import AuthContainer from './AuthContainer'
import Button from 'components/ui/Button/Button'
import Input from 'components/ui/Input'
import { Link, useHistory } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'
import toast from 'react-hot-toast'

// move this elsewhere
const registerSchema = yup.object().shape({
	firstName: yup.string().required('First Name is required.'),
	lastName: yup.string().required('Last name is required.'),
	email: yup
		.string()
		.email('Make sure email is valid.')
		.required('Email is required.'),
	password: yup
		.string()
		.required('Password is required.')
		.min(5, 'Password must be atleast 5 characters long.')
		.max(50, 'Oof that one is bit too long.'),
})

export default function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty },
	} = useForm({
		resolver: yupResolver(registerSchema),
	})

	const history = useHistory()

	const { isLoading, mutate } = useMutation(register)

	const onSubmit = (data) => {
		mutate(data, {
			onSuccess: history.push('/store'),
			onError: toast.error('Something went wrong. Please try again.'),
		})
	}

	return (
		<>
			<div>
				<pre>{JSON.stringify(errors, null, 2)}</pre>
			</div>
			<div className="min-h-screen">
				<AuthContainer title="Sign up">
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
						<Input
							label="First Name"
							type="text"
							placeholder="First name"
							{...register('firstName')}
							error={errors.firstName?.message}
						/>
						<Input
							label="Last Name"
							type="text"
							placeholder="Last name"
							{...register('lastName')}
							error={errors.lastName?.message}
						/>
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
							Already have an account ? <Link to="/auth/login"> Sign in</Link>
						</p>
					</div>
				</AuthContainer>
			</div>
		</>
	)
}
