import { Dimensions, StyleSheet } from "react-native";

// Color palette: https://colorhunt.co/palette/362706464e2eacb992e9e5d6
// Lightest -> darkest:
// #E9E5D6 | #ACB992 | #464E2E | #362706

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9E5D6',
        alignItems: 'center',
        justifyContent: 'center',
      },
    header: {
        color: '#464E2E',
        fontSize: 30,
        padding: 10,
    },
    headerImage: {
        width: 300,
    },
    listItem: {
        backgroundColor: "#ACB992",
        flex: 1,
        width: Dimensions.get('window').width,
        padding: 25,
        marginBottom: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    itemDetailsColumn: {
        flex: 1,
        flexDirection: "column",
        padding: 10,
    },
    itemImg: {
        width: 100,
        height: 100,
    },
    itemName: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#464E2E",
    },
    divider: {
        backgroundColor: "#464E2E",
        width: "90%",
        height: 5,
    }
})