import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import ConversationItem from './ConversationItem';
import { COLORS } from '../../constants';

export const conversations = [
    {
        image: 'https://images.pexels.com/photos/3646160/pexels-photo-3646160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Tanya',
        time: '15:05',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam mollitia suscipit repellat rerum incidunt esse harum a assumenda blanditiis',
        userId: 'MmSWTR1ZLOU4hwVZfLKMCWl7WQI2'
    },
    {
        image: 'https://newprofilepic2.photo-cdn.net//assets/images/article/tips.jpg',
        name: 'Alisa Degga Cortega Monnikabeluchi junior',
        time: '12:32',
        text: 'Hi. How are you?',
        userId: 'dIIzgZeT80SDhEROtYf0RiNt5X92'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtjQ_4cZVivwF9DS1dNXA8hzKVJA67ebUAtg&usqp=CAU',
        name: 'Bob',
        time: '18:17',
        text: ' amet consectetur adipisicing elit.',
        userId: 'dIIzgZeT80SDhEROtYf0RiNt5123'
    },
    {
        image: 'https://images.beinsports.com/AAUnIMsoPPVPNl8jhOJXCAVPqOg=/full-fit-in/1000x0/david-de-gea_1mxe0bcoblqaz11zxs5qna1jky.jpg',
        name: 'De Gea',
        time: '19:17',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. 8023 25 12 485',
        userId: 'dIIzgZeT80SDhEROtYf0RiNt5456'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQg69Q1u31WBRhsh846cJphPGJ-GJG8BVJCWj59qkaVpv2X35zJVHHMyAUPGIY63d1ahE&usqp=CAU',
        name: 'Koko',
        time: '22:02',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing elit',
        userId: 'dIIzgZeT80SDhEROtYf0RiNt5789'
    },
    {
        image: 'https://media.vanityfair.com/photos/63068cbbbfb0c00da24590fe/4:3/w_1500,h_1125,c_limit/Luke-MacFarlane-Profile-Story-Image.jpg',
        name: 'Diablo',
        time: '22:02',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing elit',
        userId: 'dIIzgZeT80SDhEROtYf0RiNt5147'
    },
]

const ConversationsList = () => {

    return (
        <View style={styles.wrapper}>
            {conversations.map(conversation => <ConversationItem 
            key={conversation.name} conversation={conversation}/>)}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 15,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: COLORS.cherry,
        borderRadius: 25,
        marginBottom: 80
    }
});

export default ConversationsList;