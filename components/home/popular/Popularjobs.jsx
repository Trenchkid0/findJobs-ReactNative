import {useState} from 'react'
import { View, Text,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import {COLORS,SIZES} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'


const Popularjobs = () => {

  const [isLoading, setIsLoading] = useState(false)
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <Text style={styles.headerTitle} >Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn} >Show All</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.cardsContainer}>
        {isLoading ?(
          <ActivityIndicator size="large" color={COLORS.primary} />
        ): error ?(
          <Text>Sumting wong</Text>
        ):(
          <FlatList
            data={[1,2,3,4,5,6]}
            renderItem={({item}) => (
              <PopularJobCard 
                items={item}
              />
            )}
            keyExtractor={item => item?.id}
            contentContainerStyle={{columnGap:SIZES.medium}}
            horizontal
          />
        ) }
        

      </View>
    </View>
  )
}

export default Popularjobs