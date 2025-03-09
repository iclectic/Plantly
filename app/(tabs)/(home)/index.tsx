import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {theme} from "@/theme"
import { usePlantStore } from '@/store/plantsStore';
import { PlantCard } from '@/components/PlantCard';

export default function App() {
  const plants = usePlantStore  ((state) => state.plants);
  console.log(plants);

  return (
    <FlatList
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
     />  
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
});



