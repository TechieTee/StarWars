import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../shared/hooks/index'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useForm, Controller } from 'react-hook-form'
import Logo from '../Images/Logo.png'

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
	const [index, setIndex] = useState(true)
	const classes = useStyles()
	const navigate = useNavigate()
	const { login, setUser } = useLogin()
	const { control, handleSubmit } = useForm()

	performance.mark('start')
	const [width, setWidth] = useState(270)
	const [drawer, setDrawer] = useState(false)

	const sideBarRef = useRef()

	const handleClick = () => {
		console.log(sideBarRef)
		setDrawer((prevDrawer) => !prevDrawer)
		console.log('click occured')
	}

	performance.mark('end')
	performance.measure('performance for layout', 'start', 'end')
	const measurement = performance.getEntriesByType('measure')
	console.log(measurement)

	useEffect(() => {
		if (drawer === true) {
			setWidth((currWidth) => 70)
		} else {
			setWidth((currWidth) => 270)
		}
	}, [drawer])

	const onSubmit = (data) => {
		console.log(data)
		login()

		setUser(data)
		navigate('/dashboard')
	}

	return (
		<Container>
			{/* <Sidebar style={{ width: `${width}px` }}> */}
			<Sidebar>
				<ImgLogo>
					<img src={Logo} alt='logo' />
				</ImgLogo>

				{/* <SideBar /> */}
				{/* <SideBar
					ref={sideBarRef}
					links={links}
					handleClick={handleClick}
					width={width}
					drawer={drawer}
				/> */}
			</Sidebar>
			{/* <Main style={{ width: `calc(100% - ${width}px)`, left: `${width}px` }}> */}
			<Main>
				{' '}
				<FormWrapper index>
					<h3>Login</h3>
					<h4>Kindly enter your details to log in</h4>
					<form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
						<Controller
							name='email'
							control={control}
							render={({
								field: { onChange, value },
								fieldState: { error },
							}) => (
								<TextField
									label='Email Address'
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
							render={({
								field: { onChange, value },
								fieldState: { error },
							}) => (
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
							type='submit'
							variant='contained'
							color={'primary'}
							style={{ width: '110%' }}
						>
							Log In
						</Button>
						<h5>forgot your password?</h5>
					</form>
					<h6>
						Privacy Policy <span>and</span> Terms of services
					</h6>
				</FormWrapper>
			</Main>
		</Container>
	)
}

export default LoginPage
const FormWrapper = styled.div`
	margin: auto;
	margin-top: 155px;
	width: 467px;
	height: 564px;
	background: #ffffff;
	border: 1px solid rgba(164, 167, 183, 0.3);
	box-sizing: border-box;
	border-radius: 8px;
	padding: 30px 80px;

	h3 {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 600;
		font-size: 24px;
		line-height: 32px;
		color: #434854;
		text-align: 'center';
	}

	h4 {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #737373;
		margin: 0 0 40px 0;
	}
	h5 {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		color: #0a74dc;
	}
	h6 {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 20px;
		text-align: center;
		color: #303b54;
		background: #fff;
		padding: 2px;
		margin-top: 100px;
		text-decoration-line: underline;

		span {
			color: #c5c5c5;
		}
	}
`

const Container = styled.div`
	display: flex;
	height: 100vh;
	position: relative;
	font-family: 'Poppins', sans-serif;
`
const Sidebar = styled.div`
	/* flex:0 0 20%; */
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	transition: all 0.3s ease;
	width: 270px;
	background: #031434;
`
const Main = styled.main`
	position: fixed;
	-webkit-transition: all 0.3s ease;
	transition: all 0.3s ease;
	height: 100vh;
	width: calc(100% - 270px);
	margin-left: 270px;
	overflow: auto;
`
const ImgLogo = styled.div`
	width: 245px;
	margin: auto;
	margin-top: 335px;

	left: 23px;

	top: 330px;

	img {
		height: 100%;
		width: 100%;
	}
`
