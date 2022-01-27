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
import {percentUnit, percentRemind} from './helpers';
import {connect} from 'react-redux'
import {popB1} from '../redux/actions'

class B1 extends Component {
    id = 'b1'
    render() {
        const left = percentUnit+percentRemind
        const top = percentUnit*4+percentRemind
        const width = percentUnit
        const height = percentUnit
        const relateMode=(this.props.moveCard.to==this.id)?this.props.moveCard.mode:'fix'
        return (
            <View style={{position: 'absolute', top: top+'%', left: left+'%', width: width+'%', height: height+'%'}}
                ref='table'
                onLayout={({nativeEvent}) => {
                    if (this.refs.table) {
                        this.refs.table.measureInWindow((x, y, width, height) => {
                            location.b1 = {x, y, width, height}
                    })}
                }}
            >
                {
                    this.props.table.cards.map((card, i)=>{
                        if ((i+1) == this.props.table.cards.length) {
                            return (
                                <View key={i} style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
                                <Card
                                    key={i}
                                    source={card}
                                    draggable={!card.faceDown}
                                    portrait={card.portrait}
                                    releaseOn={(to, yes, no)=>{
                                        return this.props.releaseOn(ground.b1, to)
                                    }}
                                    setDragging={()=>{
                                        this.props.setDragging(this.id)
                                    }}
                                    moveOn={(to)=>{
                                        return logicRlease(ground.b1, to)
                                    }}
                                    relateMode={relateMode}
                                    onPress={logicTap}
                                    modeChanged={this.props.modeChanged}
                                />
                                </View>
                            )
                        }
                        return (
                            <View key={i} style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
                            <Card
                                key={i}
                                source={card}
                                portrait={card.portrait}
                                releaseOn={(to, yes, no)=>{
                                    this.props.releaseOn(ground.b1, to, yes, no)
                                }}
                                setDragging={()=>{
                                    this.props.setDragging(this.id)
                                }}
                                moveOn={(to)=>{
                                    return logicRlease(ground.b1, to)
                                }}
                                relateMode={'fix'}
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
    table: state.b1,
});

export default connect(mapStateToProps, {popB1})(B1);
