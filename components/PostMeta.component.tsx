import {PostMetaData} from "../api.ts";
import {Text, View} from "react-native";
import React, {useState} from "react";
import moment from "moment";
import {generalStyles} from "../generalStyles.ts";


export const PostMeta = ({ name, description, createdAt } : PostMetaData) => {

    const parsedDate = !!createdAt && moment(createdAt).fromNow();

    return (
        <>
        <View style={generalStyles.sidePadded}>
            <Text style={[generalStyles.regularText, generalStyles.bold]}>{name.trim()}</Text>
            <Text style={generalStyles.regularText}>{description}</Text>
        </View>
        <View style={generalStyles.sidePadded}>
            <Text style={generalStyles.regularText}>{parsedDate}</Text>
        </View>
        </>
    );
};

