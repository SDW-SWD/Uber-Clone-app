import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'



const data=[
    {
        id:1,
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
    },
    {
        id:2,
        title:"Order food",
        image:"https://links.papareact.com/28w",
        screen:"EatsScreen"
    }
]

const NavOption:React.FC = () => {
  return (
    <FlatList
    data={data}
    horizontal
    keyExtractor={(item)=>item.id}
    renderItem={(item)=>(  
        <TouchableOpacity className='p-2 pl-6 pb-8 bg-gray-200 m-2 w-40'>
            <View>
                <Image
                 source={{uri:item.item.image}}
                 style={{width:120,height:120,resizeMode:'contain'}}/>
                 <Text className='mt-2 text-lg font-semibold ml-4'>{item.item.title}</Text>
                 <Icon name='arrowright' color='white' type='antdesign' className=' p-2 bg-black rounded-full w-10 mt-4'/>
            </View>
        </TouchableOpacity>
    )}
    />
  )
}

export default NavOption