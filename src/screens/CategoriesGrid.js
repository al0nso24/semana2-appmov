import { Text } from "react-native"
import { View } from "react-native"
import { StyleSheet } from "react-native"

export default function CategoriesGrid() {

    const catgorias = [
        { nombre: 'Frontend', color: '#0EA5E9' },
        { nombre: 'Backend', color: '#8B5CF6' },
        { nombre: 'Móvil', color: '#22C55E' },
        { nombre: 'Diseño', color: '#F97316' },
        { nombre: 'Datos', color: '#EF4444' },
        { nombre: 'Cloud', color: '#0891B2' },
        { nombre: "DevOps", color: "#FACC15"}
    ]

    return(
        <View style={styles.container}>
            {catgorias.map((cat, index) => (
                <View key={index} style={[styles.box, {backgroundColor: cat.color}]}>
                    <Text style={styles.boxText}>{cat.nombre}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",  //para que se acomoden en varias filas
        gap: 10,
        padding: 10,
        justifyContent: "space-between",
        alignContent: "flex-start",
    },

    box: {
        width: '47%',  //2 columnas
        aspectRatio: 1.6,  //alto proporcional, sin fijarlo a mano
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxText: { 
        color: '#fff', 
        fontWeight: '700', 
        fontSize: 15, 
        alignItems: "center",
        marginBottom: 30
    }

})