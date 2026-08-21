import { Image, Text } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function ProductCard({nombre, desc, precio, imagen}) {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: imagen }}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.info}>
                <Text style={styles.name}>{nombre}</Text>
                <Text style={styles.desc}>
                    {desc}
                </Text>
                <View style={styles.priceRow}>
                    <Text style={styles.price}>S/ {precio.toFixed(2)}</Text>
                    <View style={styles.stockBadge}>
                        <Text style={styles.stockText}>Stock</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row", //Imagen a la izq, info a la der
        alignItems: "flex-start",
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 16,
        gap: 12,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 6,
        shadowOffset: {
            width: 0,
            height: 3
        },
        elevation: 4 //Sombra en android
    },

    image: {
        width: 84,
        height: 84,
        borderRadius: 12
    },

    info: {
        flex: 1
    },

    name: {
        fontSize: 16,
        fontWeight: "700",
        color: "purple"
    },

    desc: {
        fontSize: 14,
        marginTop: 4,
        marginBottom: 4,
        color: "gray"
    },

    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    price: {
        fontSize: 18,
        fontWeight: '800',
        color: '#16A34A'
    },

    stockBadge: {
        backgroundColor: '#DCFCE7',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 8
    },

    stockText: {
        color: '#15803D',
        fontSize: 11,
        fontWeight: '700'
    },
})