import React from 'react';
import {
    View,
    StyleSheet,
    TouchableHighlight,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import foto1 from '../images/foto-stories/foto1.jpg';
import foto2 from '../images/foto-stories/foto6.jpg';
import foto3 from '../images/foto-stories/foto4.jpg';
import foto4 from '../images/foto-stories/foto3.jpg';
import foto5 from '../images/foto-stories/foto2.jpg';
import { COLORS } from '../constants';

const styleStory = {
    justifyContent: 'center', 
    alignItems: 'center',
    height: 52,
    width: 52,
    borderRadius: 50,
    overflow: 'hidden',
}

const Stories = () => {

    const stories = [
        {name: 'Adele', image: foto3},
        {name: 'Liza', image: foto1},
        {name: 'Samuel', image: foto2},
        {name: 'Denni', image: foto4},
        {name: 'Elena', image: foto5},
    ]

    return (
        <ScrollView horizontal={true} style={{flexDirection: 'row', marginVertical: 15, marginLeft: 15}}>
            <TouchableHighlight style={{width: 55, marginRight: 15}}>
                <>
                    <View
                        style={{ 
                            ...styleStory,
                            borderWidth: 1,
                            borderColor: '#000',
                            borderStyle: 'dashed',
                        }}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>+</Text>
                    </View>
                    <Text style={{textAlign: 'center', marginTop: 5}}>add</Text>
                    </>
            </TouchableHighlight>
            {stories.map(story => (
                <TouchableOpacity style={{width: 55, marginRight: 15}} key={story.name}>
                <>
                    <View style={{...styleStory,
                        borderWidth: 2,
                        borderColor: COLORS.salutLight,
                        borderStyle: 'solid'
                    }}>
                        <Image source={story.image}
                        style={{width: 44, height: 44, borderRadius: 50}}
                        />
                    </View>
                    <Text style={{textAlign: 'center', marginTop: 5}}>{story.name}</Text>
                </>
            </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
});

export default Stories;