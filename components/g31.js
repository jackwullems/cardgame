import React, {Component} from 'react';
import Card from './card'
import {
    View,
    Dimensions,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';
import {location, ground, logicRlease, logicTap} from '../store'
import {percentUnit, percentRemind} from './helpers'
import {connect} from 'react-redux'
import {popG31} from '../redux/actions'

class G31 extends Component {
    id = 'g31'
    render() {
        const left = percentUnit*1+percentRemind
        const top = percentUnit*3+percentRemind
        const width = percentUnit
        const height = percentUnit
        const relateMode=(this.props.moveCard.to==this.id)?this.props.moveCard.mode:'fix'
        return (
            <View style={{position: 'absolute', top: top+'%', left: left+'%', width: width+'%', height: height+'%'}}
                ref='table'
                onLayout={({nativeEvent}) => {
                    if (this.refs.table) {
                        this.refs.table.measureInWindow((x, y, width, height) => {
                            location.g31 = {x, y, width, height}
                    })}
                }}
            >
                {
                    this.props.table.cards.map((card, i)=>{
                        return (
                            <View key={i} style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
                            <Card
                                key={i}
                                source={card}
                                draggable={!card.faceDown}
                                portrait={card.portrait}
                                releaseOn={(to, yes, no)=>{
                                    if (ground.g31.cards.length <= 2) {
                                        no()
                                        return
                                    }
                                    this.props.releaseOn(ground.g31, to, yes, no)
                                }}
                                setDragging={()=>{
                                    this.props.setDragging(this.id)
                                }}
                                moveOn={(to)=>{
                                    return logicRlease(ground.g31, to)
                                }}
                                relateMode={relateMode}
                                onPress={logicTap}
                                modeChanged={this.props.modeChanged}
                            />
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    table: state.g31,
});

export default connect(mapStateToProps, {popG31})(G31);
