import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: "Harsh Pathak",
            status: "I am busy",
            imageURL: "https://thumbs.dreamstime.com/b/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg"
        },
        {
            uid: 2,
            name: "Mayank Mishra",
            status: "Cool Boy",
            imageURL: "https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg"
        },
        {
            uid: 3,
            name: "Abhay yadav",
            status: "I am busy",
            imageURL: "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg"
        },
        {
            uid: 4,
            name: "Rohit Singh",
            status: "I love Coding",
            imageURL: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
        },
        {
            uid: 5,
            name: "Aman Verma",
            status: "I'm working professional",
            imageURL: "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png"
        }
    ]
    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}>
                {contacts.map(({ uid, name, status, imageURL }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{
                                uri: imageURL
                            }}
                            style={styles.userImage} />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        marginHorizontal: 8,
        marginBottom: 10
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 3
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: "#EAF0F1",
        padding: 8,
        borderRadius: 10

    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 17,
        fontWeight: "600",
        color:"#000000"
    },
    userStatus: {
        fontSize: 13,
    }

})