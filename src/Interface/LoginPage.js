import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../shared/hooks/index'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useForm, Controller } from 'react-hook-form'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(2),

		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '300px',
		},
		'& .MuiButtonBase-root': {
			margin: theme.spacing(2),
		},
	},
}))

const LoginPage = () => {
	const classes = useStyles()
	const navigate = useNavigate()
	const { setLoggedIn, setUser } = useLogin()
	const { control, handleSubmit } = useForm()

	const onSubmit = (data) => {
		console.log(data)
		setLoggedIn(true)
		setUser(data)
		navigate('/')
	}

	return (
		<FormWrapper>
			<h3>Login</h3>
			<h4>kkk</h4>
			<form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name='email'
					control={control}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<TextField
							label='Email'
							variant='outlined'
							value={value}
							defaultValue=''
							onChange={onChange}
							error={!!error}
							helperText={error ? error.message : null}
							type='email'
						/>
					)}
					rules={{
						required: 'Email is required',
						pattern: {
							value:
								/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							message: 'Please enter a valid email',
						},
					}}
				/>

				<Controller
					name='password'
					control={control}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<TextField
							label='Password'
							variant='outlined'
							value={value}
							onChange={onChange}
							defaultValue=''
							error={!!error}
							helperText={error ? error.message : null}
							type='password'
						/>
					)}
					rules={{ required: 'Password required' }}
				/>

				<Button
					// variant={varient}
					type='submit'
					// onClick={handleLogin}
					// disabled={!values?.captureReason?.label}
				>
					Log In
				</Button>

				{/* <Button variant='outlined' href='../Interface/Dashboard.js'>
					Log in
				</Button> */}
				<Button variant='text'>forgot password?</Button>
			</form>
			<h6>
				ssss<span>hh</span>ggggg
			</h6>
		</FormWrapper>
	)
}

export default LoginPage
const FormWrapper = styled.div`
	position: absolute;
	width: 467px;
	height: 564px;
	left: 763px;
	top: 209px;

	background: #ffffff;
	border: 1px solid rgba(164, 167, 183, 0.3);
	box-sizing: border-box;
	border-radius: 8px;
`
