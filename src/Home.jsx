import React from 'react'
import {
	View,
	ActivityIndicator,
	Alert,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
} from 'react-native'
import { Popup } from './component/Popup'
import { Post } from './component/Post'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setClose, setMassive, setNumber } from './redux/slice/popupSlice'
const Home = () => {
	const dispatch = useDispatch()
	const openPopup = useSelector(state => state.popup.open)
	const [items, setItem] = useState()
	const [load, setLoad] = useState(false)
	//const [link, setLink] = useState()
	useEffect(() => {
		axios
			.get(
				'https://api.unsplash.com/photos?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'
			)
			.then(({ data }) => {
				setLoad(false)
				setItem(data)
				setLoad(true)
				dispatch(setMassive(data))
			})
			.catch(() => {
				Alert.alert('Ошибка', 'Не удалось получить данные')
			})
	}, [])
	const clickOpen = i => {
		dispatch(setNumber(i))
		dispatch(setClose())
	}
	return (
		<View style={styles.content}>
			<ScrollView style={styles.scroll}>
				<View style={styles.item}>
					{load ? (
						items.map((e, ind) => (
							<TouchableOpacity onPress={() => clickOpen(ind)}>
								<Post
									key={ind}
									data={e.created_at.slice(0, 10)}
									name={e.user.name}
									url={e.urls.full}
								/>
							</TouchableOpacity>
						))
					) : (
						<ActivityIndicator size='large' />
					)}
				</View>
			</ScrollView>
			{openPopup ? <Popup /> : openPopup}
		</View>
	)
}
const styles = StyleSheet.create({
	content: {
		display: 'flex',
		justifyContent: 'center',
		flex: 1,

		alignItems: 'center',
	},
	scroll: {
		paddingTop: 30,
		backgroundColor: 'black',
		width: '100%',
	},
	item: {
		display: 'flex',
		alignItems: 'center',
		rowGap: 20,
	},
})
export default Home
