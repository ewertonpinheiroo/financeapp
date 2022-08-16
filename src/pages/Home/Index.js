import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import Actions from '../../components/Actions/Index';
import Balance from '../../components/Balance/Index';
import Header from '../../components/Header/Index';
import Moviments from '../../components/Moviments/Index';

const list = [
  {
    id:1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0, //despesas
  },

  {
    id:2,
    label: 'Pix cliente X',
    value: '2.500,00',
    date: '17/09/2022',
    type: 1, //receita / entradas
  },

  {
    id:3,
    label: 'Salário',
    value: '7.200,00',
    date: '17/09/2022',
    type: 1, //receita / entradas
  },


]


export default function Home() {
  return (
   <View style={styles.container}>
      <Header name= "Ewerton Pinheiro" />
      <Balance saldo= "9.500.90" gastos= "-400.00" />

     <Actions/>
     
      <Text style={styles.title} > Últimas movimentações </Text>

 <FlatList
  style={styles.list}
  data={list}
  keyExtractor={(item) => String(item.id)}
  showsVerticalScrollIndicator={false}
  renderItem={({item}) => <Moviments data={item} />}
 />
   </View>
 
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor:'#000814'
   },
   title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
   margin: 14
   }
})

