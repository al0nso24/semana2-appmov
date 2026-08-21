import { StyleSheet} from 'react-native';
import { View } from 'react-native';
import LikeButton from './src/screens/LikeButton';

export default function App() {
  return (
    <View style={styles.container}>
      <LikeButton></LikeButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  //Hace que el contenedor ocupe todo el espacio disponible de la pantalla
    marginTop: 60,
    gap: 30,
    paddingHorizontal: 9
  },

  badge: {
    backgroundColor: "rgba(255,255,255,0.15)",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginBottom: 16
  },

  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 8
  },

  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.85)',
    textAlign: 'center'
  },

  fecha: {
    color: "white",
    fontSize: 14,
    marginTop: 15,
    fontStyle: "italic"
  }

});
