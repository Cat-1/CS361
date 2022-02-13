import { StyleSheet } from "react-native";

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
})