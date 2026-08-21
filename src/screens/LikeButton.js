import { useState } from "react"
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";

export default function LikeButton() {
    const [liked, setLiked] = useState(false);
    const [guardado, setGuardado] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={(styles.counter, liked && styles.counterActive)}>
                {liked ? "243 Me gusta" : "242 Me gusta"}
            </Text>
            <TouchableOpacity
            onPress={() => setLiked((v) => !v)} style={[styles.button, liked && styles.buttonActive]}> 
                <Text style={styles.icon}>{liked ? '❤️' : '🤍'}</Text>
                <Text style={[styles.label, liked && styles.labelActive]}>
                    {liked ? "Te gusta" : "Me gusta"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => setGuardado((v) => !v)} style={[styles.button, guardado && styles.buttonActive_save]}> 
                <Text style={styles.icon}>{guardado ? '🏷️' : "💾" }</Text>
                <Text style={[styles.label, guardado && styles.labelActive_save]}>
                    {guardado ? "Guardado :D" : "Guardar"}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#fff', 
        padding: 20
    },

    counter: { 
        fontSize: 16, 
        color: '#334155', 
        marginBottom: 20 
    },

    counterActive: {  //se "superpone" al anterior
        color: '#DC2626', 
        fontWeight: '700' 
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 9,
        gap: 8,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: '#CBD5E1',
        backgroundColor: '#fff',
    },

    buttonActive: { 
        backgroundColor: '#FEE2E2', 
        borderColor: '#DC2626' 
    },

    buttonActive_save: { 
        backgroundColor: '#537fcf', 
        borderColor: '#143aa1' 
    },

    icon: { 
        fontSize: 18 
    },

    label: { 
        fontSize: 15, 
        fontWeight: '600', 
        color: '#334155' 
    },

    labelActive: { 
        color: '#DC2626' 
    },

    labelActive_save: { 
        color: '#a5d3f8' 
    },
});