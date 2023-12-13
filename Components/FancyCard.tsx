import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
        style={styles.cardImage}
        source={{
            uri:'https://miro.medium.com/v2/resize:fit:603/1*fYA-b-KA9UUqPL2OsDYkQw.png'
        }}/>
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City , Jaipur</Text>
            <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace. </Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card:{
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated:{
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width:1,
            height:1
        }
    },
    cardImage:{
        height: 200,
        marginBottom: 10,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody:{
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle:{
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
        flex:1,
        textAlign: 'center'
    },
    cardLabel:{
        color: '#000000',
        fontSize: 18,
        marginBottom: 6,
        textAlign: 'center'
    },
    cardDescription:{
        color: '#242B2E',
        fontSize: 14,
        marginBottom: 12,
        marginTop:6,
        flexShrink: 1
    },
    cardFooter:{
        color: '#000000',
        textAlign: 'right'
    }

})