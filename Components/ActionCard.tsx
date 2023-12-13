import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>what's new in javascript 21 - ES12 </Text>
                    <Image
                        style={styles.cardImage}
                        source={{
                            uri: "https://miro.medium.com/v2/resize:fit:680/1*TK3lUqXrmh82x3Mjb3Oa0A.png"
                        }} />
                    <View style={styles.bodyContainer}>
                        <Text numberOfLines={2} style={styles.blogText}>
                            ECMAScript 2021 highlights include replaceAll(), promise.any(), AggregateError, and new logical assignment operators, for starters.
                        </Text>
                    </View>
                    <View style={styles.footerContainer}>
                        <TouchableOpacity onPress={() => openWebsite('https://dev.to/naimlatifi5/ecmascript-2021-es12-new-features-2l67')}>
                            <Text style={styles.socialLinks}>
                                Read More
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => openWebsite('https://www.google.com/search?q=w3+schools&rlz=1C1VDKB_enIN1046IN1065&oq=w3&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIUCAEQRRg5GEMYgwEYsQMYgAQYigUyDggCEEUYJxg7GIAEGIoFMhIIAxAAGEMYgwEYsQMYgAQYigUyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDM0OTBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8')}>
                            <Text style={styles.socialLinks}>
                                Follow Me
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginHorizontal: 16,
        marginVertical: 12
    },
    elevatedCard: {
        backgroundColor: "#2C3335",
        elevation: 3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:"#333",
        shadowOpacity: 0.4
    },
    headingContainer: {
        justifyContent: "center",
        alignItems:"center",
        marginTop:10
    },
    headerText:{
        color: "#fff",
        fontSize: 20,
        fontWeight:"600"
    },
    cardImage: {
        height: 200,
        width:350,
        borderRadius:10,
        marginTop:10
    },
    bodyContainer: {
        padding: 10,
    },
    blogText:{
        color:"#fff"
    },
    footerContainer: {
        padding: 20,
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-evenly",
        gap:20
    },
    socialLinks:{
        fontSize: 16,
        color: "#000000",
        backgroundColor: "#fff",
        borderRadius: 6,
        paddingHorizontal:20,
        paddingVertical:6
    }
})