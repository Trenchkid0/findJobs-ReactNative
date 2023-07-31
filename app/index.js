import { StyleSheet, Text, View,ScrollView,SafeAreaView } from "react-native";
import { useRouter,Stack } from "expo-router";
import { COLORS,icons,images,SIZES } from "../constants/";
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components'

export default function Page() {
  const router = useRouter()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen 
        options={{
          headerStyle: {backgroundColor: COLORS.lightWhite},
          headerShadowVisible:false,
          headerLeft: ()=>(
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: ()=>(
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle:""
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex:1,padding:SIZES.medium}}>
          <Welcome/>
          <Popularjobs/>
          <Nearbyjobs />
        </View>
      </ScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});
