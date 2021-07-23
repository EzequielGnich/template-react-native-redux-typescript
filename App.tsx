import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
// import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

// import { theme } from './assets/Theme';

import { store } from './src/store';
import Screens from './src/screens';

let isReady = false;

const persistor = persistStore(store, null, () => {
	isReady = true;
});

const renderScreen = () => <Screens />;

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate
				loading={
					isReady && (
						<View style={{ flex: 1, backgroundColor: 'green' }}>
							<Text>Loading..</Text>
						</View>
					)
				}
				persistor={persistor}>
				{/* <PaperProvider theme={theme}> */}
				<SafeAreaView style={styles.container}>{renderScreen()}</SafeAreaView>
				{/* </PaperProvider> */}
			</PersistGate>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
