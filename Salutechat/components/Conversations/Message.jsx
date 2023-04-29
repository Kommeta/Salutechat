import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';
import { COLORS } from '../../constants';
import { useAuth } from '../../useAuth';

const Message = ({message}) => {

    const { user } = useAuth()

    const replyMessageUser = user.uid === message.userId

    return (
        <View style={[styles.blockWrapper, {justifyContent: replyMessageUser ? 'flex-end' : 'flex-start'}]}>
            {
            !replyMessageUser && 
                <Image source={{uri: user.avatar}}
                    style={{width: 30, height: 30, borderRadius: 30}}
                />
            }
            <View style={[styles.messageWrapper, 
                {backgroundColor: replyMessageUser ? COLORS.bgBlue : COLORS.bgPrimary,
                borderBottomLeftRadius: replyMessageUser ? 20 : 0,
                borderBottomRightRadius: replyMessageUser ? 0 : 20}]}>
                <Text style={{color: '#fff', width: '90%', marginHorizontal: 10}}>{message.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    blockWrapper: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'flex-end',
    },
    messageWrapper: {
        borderRadius: 20,
        padding: 15,  
        marginHorizontal: 10, 
        maxWidth: '76%'
    }
});

export default Message;