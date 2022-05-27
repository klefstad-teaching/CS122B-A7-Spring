import React from 'react';
import { Text, FlatList, StyleSheet, View } from 'react-native';

var movieList = [
    { key: '1', value: 'uwu' },
    { key: '2', value: 'qaq' },
    { key: '3', value: '0w0' }
];

const addMovie = (newKey, newValue) => {
    movieList.push({key : newKey, value: newValue });
};

const movieDivider = () => {
    return (
        <View
        style={{
            height: 1,
            width: "100%",
            backgroundColor: "#607D8B",
        }}
        />
    );
}

const MainScreen = ({ route, navigation }) => {
    const { accessToken, refreshToken } = route.params;

    addMovie("accessToken", accessToken);
    addMovie("refreshToken", refreshToken);

    return (
        <View style={styles.container}>
            <FlatList
                data={movieList}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (
                    <Text 
                        style={{ fontSize: 22 }}
                        onPress = {() => {
                            alert("Key: " + item.key + "\nValue: " + item.value);
                        }}>
                            {item.key} - {item.value}
                    </Text>
                )}
                ItemSeparatorComponent={movieDivider}
            />
            {/* <Text  
                style={styles.titleText}
            >
                "accessToken: {accessToken}" {"\n"}
                "refreshToken: {refreshToken}"
            </Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },baseText: {
        fontFamily: "Cochin"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
  });

export default MainScreen;