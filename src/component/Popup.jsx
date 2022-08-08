import React from 'react'
import {
	View,
	Button,
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
	Alert,
	Text
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setClose, setNumber } from '../redux/slice/popupSlice'

export const Popup = () => {
	const dispatch = useDispatch()
	const massive = useSelector(state => state.popup.massive)
	const number = useSelector(state => state.popup.number)
	const lengthM = massive.length
	return (
		<View style={[styles.items, { paddingTop: 30 }]}>
			<View style={[styles.items]}>
				<Image
					style={{
						width: 400,
						height: 400,
						objectFit: 'cover',
						flex: 1,
					}}
					source={{ uri: massive[number].urls.full }}
				/>
			</View>

			<Button onPress={() => dispatch(setClose())} title='Закрити' />
			<View style={{ left: '45%', top:20, position: 'relative' }}>
				<Text style={{color:'#fff', fontSize:22, fontWeight:'700'}}>
					{number + 1}/{lengthM}
				</Text>
			</View>
			<TouchableWithoutFeedback
				onPress={() => {
					lengthM >= number + 2
						? dispatch(setNumber(number + 1))
						: Alert.alert('ошибка', 'фото закончилось!')
				}}
			>
				<Image style={styles.arrow} source={require('../img/arrow.png')} />
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback
				onPress={() => {
					1 <= number
						? dispatch(setNumber(number - 1))
						: Alert.alert('ошибка', 'Это первая фотография!')
				}}
			>
				<Image
					style={[
						styles.arrow,
						{
							transform: [{ rotateZ: '180deg' }],
							left: 10,
						},
					]}
					source={require('../img/arrow.png')}
				/>
			</TouchableWithoutFeedback>
		</View>
	)
}

const styles = StyleSheet.create({
	items: {
		position: 'absolute',
		display: 'flex',
		width: '100%',
		height: '100%',
		flex: 1,
		bottom: 0,
		backgroundColor:'black', 
	},
	arrow: {
		width: 40,
		height: 40,
		position: 'absolute',
		zIndex: 4,
		objectFit: 'cover',
		right: 10,
		top: 500,
		backgroundColor: '#fff',
		padding: 5,
	},
})
