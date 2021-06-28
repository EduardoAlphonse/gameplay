import React, { ReactNode } from 'react';
import {
	Text,
	Image,
	View,
	TouchableOpacity,
	TouchableOpacityProps,
} from 'react-native';

import discordImg from '../../assets/discord.png';

import { styles } from './styles';

type ButtonIconProps = TouchableOpacityProps & {
	title: string;
}

export function ButtonIcon({ title, ...props }: ButtonIconProps) {
	return (
		<TouchableOpacity style={styles.container} {...props}>
			<View style={styles.iconWrapper}>
				<Image
					source={discordImg} style={styles.icon}
				/>
			</View>
			<Text style={styles.title}>
				{title}
			</Text>
		</TouchableOpacity>
	)
}