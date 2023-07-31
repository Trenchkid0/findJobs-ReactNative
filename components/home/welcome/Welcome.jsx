import {useState} from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
 } from 'react-native'

import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons,images,SIZES } from '../../../constants'



const Welcome = () => {
  const router =useRouter()
  const jobTypes = ["Full-time","Part-time","Contractor"];
  const [activeJobType, setActiveJobType] = useState('Full-time')
  return (
    <View>
      <View style={styles.container} >
        <Text style={styles.userName} >Halo Ryoz</Text>
        <Text style={styles.welcomeMessage} >Find ur perfect job</Text>

        <View style={styles.searchContainer} >
          <View style={styles.searchWrapper}>
            <TextInput 
            style={styles.searchInput}
            value=''
            onChange={()=>{}}
            placeholder='what are you lookin for'
            />
          </View>
          <TouchableOpacity  style={styles.searchBtn} onPress={()=>{}}>
            <Image source={icons.search}
              style={styles.searchBtnImage}
            resizeMode='contain'
            />
          </TouchableOpacity>

        </View>
        <View style={styles.tabsContainer} >
          <FlatList
            data={jobTypes}
            renderItem={({item})=>(
                <TouchableOpacity style={styles.tab(activeJobType,item)} 
                onPress={()=>{
                  setActiveJobType(item);
                  router.push(`/search/${item}`)
                }} >
                  <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
                </TouchableOpacity>
            )}

            keyExtractor={items => items}
            contentContainerStyle={{columnGaps:SIZES.small}}
            horizontal
          />
        </View>
      </View>
    </View>
  )
}

export default Welcome