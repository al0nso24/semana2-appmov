import { StyleSheet, View } from 'react-native';
import ProductCard from './src/components/ProductCard';

export default function App() {

  const productos = [
    {
      nombre: "Audífonos Inalámbricos",
      desc: "Audífonos inalámbricos con cancelación de ruido y sonido envolvente.",
      precio: 95.00,
      imagen: "https://techfamily.pe/cdn/shop/files/gsc_127259649_4853112_1.jpg?v=1716396772&width=1445"
    },

    {
      nombre: "Teclado Mecánico",
      desc: "Teclado mecánico con retroiluminación RGB y switches de alta calidad.",
      precio: 500.00,
      imagen: "https://promart.vteximg.com.br/arquivos/ids/7479097-1000-1000/image-9af968446b50480fade90869c612e40f.jpg?v=638305829355370000"
    },

    {
      nombre: "Peluche 20cm - Chiikawa",
      desc: "Peluche de felpa. Ideal para regalar.",
      precio: 49.90,
      imagen: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRQWelXmGhUGn3HOx16-EyfBe5tuGdEglgVnwU4R64aYiOcvpvLYXGS93pQRELKYD8BGazCkHgpTKGjTXnI1so6IVWU4UUoO_wAdV7kzGR-Q01wmnMm_ySWBhxLzN6f32pmXI6E3z99&usqp=CAc"
    }

  ];

  return (
    <View style={styles.container}>
      {productos.map((productos, index) => (
        <ProductCard
          key={index}
          nombre={productos.nombre}
          desc={productos.desc}
          precio={productos.precio}
          imagen={productos.imagen}
        >
        </ProductCard>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    gap: 30,
    paddingHorizontal: 20
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
