import { useState, useRef } from 'react';
import { View, StyleSheet, Text, Image, Button, Alert } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions();
    const [foto, setFoto] = useState(null);
    const cameraRef = useRef(null);
    const [facing, setFacing] = useState('back');
    const [scanning, setScanning] = useState(false);

    if (!permissao) {
        return <View />;
    } 

    if (!permissao.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.TextPermission}>Você precisa conceder a permissão para usar a câmera</Text>
                <Button title='Pedir permissão' onPress={pedirPermissao} />
            </View>
        );
    }

    const tirarFoto = async () => {
        const fotoBase64 = await cameraRef.current?.takePictureAsync({
            quality: 0.001,
            base64: true
        });
        setFoto(fotoBase64);
    };

    const trocaCamera = () => {
        setFacing(facing === 'back' ? 'front' : 'back');
    };

    const handleBarCodeScanned = ({ type, data }) => {
        if (type === BarCodeScanner.Constants.BarCodeType.qr) {
            Alert.alert('QR Code escaneado', `URL: ${data}`);
        }
        setScanning(false);
    };

    return (
        <View style={styles.container}>
            {foto ? (
                <View>
                    <Image 
                        source={{ uri: foto.uri }} 
                        style={styles.foto} 
                    />
                    <Button title='Descartar foto' onPress={() => setFoto(null)} />
                </View>
            ) : (
                <CameraView
                    facing={facing}
                    style={styles.camera}
                    ref={cameraRef}
                >
                    {scanning ? (
                        <BarCodeScanner
                            onBarCodeScanned={handleBarCodeScanned}
                            style={StyleSheet.absoluteFillObject}
                        />
                    ) : (
                        <>
                            <Button title='Tirar foto' onPress={tirarFoto} />
                            <Button title='Trocar câmera' onPress={trocaCamera} />
                            <Button title='Escanear QR Code' onPress={() => setScanning(true)} />
                        </>
                    )}
                </CameraView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    TextPermission: {
        textAlign: 'center',
    },
    camera: {
        flex: 1
    },
    foto: {
        height: '100%',
        width: '100%'
    }
});
