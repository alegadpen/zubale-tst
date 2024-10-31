import {HeaderData, PostInteractionsData} from "../api.ts";
import {Text, View} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faComment } from "@fortawesome/free-regular-svg-icons/faComment";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons/faPaperPlane";
import { faBookmark } from "@fortawesome/free-regular-svg-icons/faBookmark";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons/faBookmark";
import {generalStyles} from "../generalStyles.ts";


export const PostInteractions = ({ liked, likes, comments, saved } : PostInteractionsData) => {

    return (
        <>
        <View style={[generalStyles.rowSpacedBetween, generalStyles.padded]}>
            <View style={generalStyles.row}>
                <FontAwesomeIcon icon={liked ? faHeartSolid : faHeart} style={generalStyles.icons} />
                <FontAwesomeIcon icon={faComment} style={generalStyles.icons} />
                <FontAwesomeIcon icon={faPaperPlane} style={generalStyles.icons} />
            </View>
            <View style={generalStyles.row}>
                <FontAwesomeIcon icon={saved ? faBookmarkSolid : faBookmark} style={generalStyles.icons} />
            </View>
        </View>
        <View style={generalStyles.padded}>
            <Text style={generalStyles.regularText}>{likes} me gusta</Text>
        </View>
        </>
    );
};

