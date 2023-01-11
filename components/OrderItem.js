import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from '../constants/colors';


const formatDay = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
}

const OrderItem = ({ item, onDelete }) => {

    return (
        <View style={styles.item}>
            <View>
                <Text style={styles.date}>{formatDay(item.date)}</Text>
                <Text style={styles.total}>{item.total}</Text>
            </View>
            <TouchableOpacity onPress={() => onDelete(item.id)}>
                <Ionicons name="md-trash" size={22} color={COLORS.primary} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    header: {
        fontSize: 18,
    },
    detail: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
    },
});

export default OrderItem;