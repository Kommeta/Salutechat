import React, { useEffect, useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Alert,
    TouchableOpacity
} from 'react-native';
//import { useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { 
    onSnapshot, 
    collection, 
    addDoc, 
    serverTimestamp,
    query,
    orderBy
} from 'firebase/firestore'
import { useAuth } from '../../useAuth';
import { COLORS ,STYLES } from '../../constants';
import { db } from '../../utils/firebase';
import send from '../../images/send.png'
import Message from '../Conversations/Message';
import { conversations } from '../Conversations/ConversationsList';

const Conversation = () => {

    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const { user } = useAuth()

    //const { params:{ userId } } = useRoute()

    const sendMessage = async () => {
        try {
            await addDoc(collection(db, 'messages'), {
                timestamp: serverTimestamp(),
                userId: user.uid,
                text: message,
            })
            setMessage('')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => 
        onSnapshot(query(collection(db, 'messages'),
        orderBy('timestamp', 'asc')), snapshot => {
            setMessages(snapshot.docs.map(doc => ({
                
                id: doc.id,
                ...doc.data()
            })))
        }), []
    )

    const nameUser = conversations.find(value => value.userId === user.uid).name

    return (
        <LinearGradient colors={['#e3cbe5', '#eee6ef', '#fff', '#eee6ef', '#e3cbe5']} start={{x: 1.5, y: 0.7}} style={styles.linearGradient}>
            <View style={{backgroundColor: COLORS.cherry, paddingVertical: 10}}>
                <Text style={{color: '#fff', textAlign: 'center'}}>{nameUser}</Text>
            </View>
            <ScrollView>
                {messages.map(message => (
                    <Message key={message.name} message={message}/>
                ))}
            </ScrollView>
            <View style={[STYLES.flexDefault, {paddingHorizontal: 10, }]}>
                <TextInput 
                    style={{backgroundColor: '#fff', width: '88%', borderRadius: 15, paddingHorizontal: 10}}
                    placeholder='Введите сообщение'
                    value={message}
                    onChangeText={setMessage}
                />
                <TouchableOpacity onPress={sendMessage}> 
                    <Image source={send} style={{width: 30, height: 30}}/>
                </TouchableOpacity>
            </View>
        </LinearGradient>
        
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        borderRadius: 5
    }
});

export default Conversation;