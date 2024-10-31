import {StyleSheet} from "react-native";

export const generalStyles = StyleSheet.create({
    regularText: {
        fontSize: 16,
        color: 'white',
        marginRight: 8,
    },
    bigText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },
    icons: {
        width: 32,
        height: 32,
        padding: 10,
        marginRight: 10,
        color: 'white',
    },
    bold: {
        fontWeight: 'bold',
    },
    rowSpacedBetween: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    row: {
        flexDirection: "row",
    },
    padded: {
        flexDirection: 'row',
        padding: 8,
    },
    sidePadded: {
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    primaryActions: {
        flexDirection: 'row',
    },
    secondaryActions: {
        flexDirection: 'row',
    },
    bg: {
        backgroundColor: 'black',
    },
    whiteText: {
        color: 'white',
    },
    largeText: {
        fontSize: 18,
    },
    centreText: {
        textAlign: 'center',
    },
    bottomSpace: {
        paddingBottom: 16,
        marginBottom: 8,
        borderBottomWidth: 2,
        borderBottomColor: '#111',
    },
});
