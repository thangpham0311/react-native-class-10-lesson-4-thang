import React from 'react'
import { Image } from 'react-native'

type viewSanPham = {
    linkSP: string
}

const viewSanPham: React.FC<viewSanPham> = ({ linkSP }) => {
    return (
        <View>
            v
        </View>
        <Image source={{uri:linkSP}}/>
    )
}

export default viewSanPham;