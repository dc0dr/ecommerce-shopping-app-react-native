import * as React from 'react';
import {
	Ionicons,
	Foundation,
	FontAwesome,
	AntDesign,
	MaterialCommunityIcons
} from '@expo/vector-icons';


const TabIcons = (props) => {
	if (props.type === 'ion') {
		return (
			<Ionicons
				name={props.name}
				size={30}
				style={{ marginBottom: -3 }}
			/>
		);
	} else if (props.type === 'fou') {
		return (
			<Foundation
				name={props.name}
				size={22}
				style={{ marginBottom: -3 }}
			/>
		);
	} else if (props.type === 'awe1') {
		return (
			<FontAwesome
				name={props.name}
				size={22}
				style={{ marginBottom: -3 }}
			/>
		);
	} else if (props.type === 'ant') {
		return (
			<AntDesign
				name={props.name}
				size={22}
				style={{ marginBottom: -3 }}
			/>
		);
	} else if (props.type === 'mat') {
		return (
			<MaterialCommunityIcons
				name={props.name}
				size={22}
				style={{ marginBottom: -3 }}
			/>
		);
	} else
		return (
			<Ionicons
				name={props.name}
				size={22}
				style={{ marginBottom: -3 }}
			/>
		);
}

export default TabIcons;