import { useState } from "react";
import * as ImagePicker from 'expo-image-picker'
import { StyleSheet, Button, Image, View} from "react-native";



export default function ImagePickerteste() {
    const [image, setImage] = useState('');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        });

        console.log(result)
        if(!result.canceled) {
            setImage(result.assets[0].uri);
    }

}

    return (
        <View style={styles.container}>
            <Button title="Pick a Image" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
    )
}

const styles = StyleSheet.create ({
     container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
     },
     image: {
        width: 200,
        height: 200,
     },
})

