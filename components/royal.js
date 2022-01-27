import React, {Component} from 'react';
import Card from './card'
import {
    View,
    Dimensions,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';
import {location, ground, logicRlease, logicTap, logicRoyalDrop} from '../store'
import {percentUnit, percentRemind} from './helpers'
import {connect} from 'react-redux'
import {popRoyal} from '../redux/actions'

class Royal extends Component {
    id = 'royal'
    render() {
        const left = percentUnit * 1 + percentRemind
        const top = percentUnit * 5 + percentRemind
        const width = percentUnit
        const height = percentUnit
        // const relateMode=(this.props.moveCard.to==this.id)?this.props.moveCard.mode:'fix'
        return (
            <View style={{position: 'absolute', top: top+'%', left: left+'%', width: width+'%', height: height+'%'}}
                ref='table'
                onLayout={({nativeEvent}) => {
                    if (this.refs.table) {
                        this.refs.table.measureInWindow((x, y, width, height) => {
                            location.royal = {x, y, width, height}
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
                                draggable={true}
                                portrait={card.portrait}
                                releaseOn={(to, yes, no)=>{
                                    this.props.releaseOn(ground.royal, to, yes, no)
                                }}
                                setDragging={()=>{
                                    this.props.setDragging(this.id)
                                }}
                                moveOn={(to)=>{
                                    return logicRlease(ground.royal, to)
                                }}
                                relateMode='fix'
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
    table: state.royal,
});

export default connect(mapStateToProps, {popRoyal})(Royal);
