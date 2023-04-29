import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity 
} from 'react-native';
import { useAuth } from '../../useAuth';
import { COLORS } from '../../constants';


const ConversationItem = ({conversation}) => {

    const navigation = useNavigation()
    const { user } = useAuth()

    if (user?.uid === conversation.userId) return null

    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('Conversation', {
                userId: conversation.userId
            })}
            style={{flexDirection: 'row', marginVertical: 10, 
            paddingBottom: 10, borderBottomColor: COLORS.grey, borderBottomWidth: 1}}>
            <Image source={{uri: conversation.image}}
                style={{width: 50, height: 50, borderRadius: 50}}
            />
            <View style={{marginLeft: 15, width: '80%'}}>
                <View style={{marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold', height: 26, overflow: 'hidden'}}>{conversation.name}</Text>
                    <Text style={{color: COLORS.grey}}>{conversation.time}</Text>
                </View>
                <View style={{width: '100%', paddingRight: 30}}>
                    <Text style={{color: COLORS.grey, height: 33, overflow: 'hidden'}}>{conversation.text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
});

export default ConversationItem;