import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

export const Post = ({url, name, data}) => {
	
	return (
		<View style={styles.items}>
			<Image
				style={{ width: 180, height: 180, objectFit: 'cover' }}
				source={{ uri: url }}
			/>
			<Text style={{ marginTop: 10, width: 180, fontWeight: '600' }}>
				Імя автора: {name}
			</Text>
			<Text style={{ marginTop: 4, fontWeight: '600' }}>
				Дата публікації: {data}
			</Text>
		</View>
	)

}
const styles = StyleSheet.create({
	items: {
		padding: 10,
		paddingBottom:20,
		paddingTop:20,
		Width: 220,
		display: 'flex',
		alignItems: 'center',
		backgroundColor:'red',
		marginBottom:10,
		backgroundColor:'#fff'
	},
})