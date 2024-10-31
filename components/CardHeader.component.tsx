import {HeaderData} from "../api.ts";
import {Text, View} from "react-native";
import FastImage from "react-native-fast-image";
import React, {useState} from "react";
import {generalStyles} from "../generalStyles.ts";

const Circle = () =>
    <View style={{ width: 20, height: 20, backgroundColor: 'red', borderRadius: 50, marginRight: 16 }}></View>

export const CardHeader = ({ avatar, name, location } : HeaderData) => {
    const [avatarError, setAvatarError] = useState(false);
    const [avatarLoaded, setAvatarLoaded] = useState(false);

    return (
        <View style={generalStyles.padded}>
            {avatarLoaded ?
                <FastImage
                    source={{ uri : avatar }}
                    resizeMode={FastImage.resizeMode.contain}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 5,
                    }}
                    onLoad={() => setAvatarLoaded(true)}
                    onError={() => setAvatarLoaded(false)}
                /> :
                <Circle />
            }
            <Text style={generalStyles.regularText}>{name}</Text>
            <View>
                <Text style={generalStyles.regularText}>{location}</Text>
            </View>
        </View>
    );
};

