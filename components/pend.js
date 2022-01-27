import React, {Component} from 'react';
import Card from './card'
import {
    View,
} from 'react-native';
import {location, ground, logicRlease, logicTap} from '../store'
import {percentUnit, percentRemind} from './helpers';
import {connect} from 'react-redux'
import {popPend} from '../redux/actions'

class Pend extends React.Component {
    id = 'pend'
    state = {
        relateMode: 'fix'
    }
    componentDidMount() {
        setInterval(()=>{
            if (this.props.table.pending) {
                this.setState({relateMode: this.state.relateMode=='fix'?'move':'fix'})
            }
        }, 500)
    }

    render() {
        const left = percentUnit * 4.5 + percentRemind
        const top = percentUnit * 5 + percentRemind
        const width = percentUnit
        const height = percentUnit
        return (
            <View style={{position: 'absolute', top: top+'%', left: left+'%', width: width+'%', height: height+'%'}}
                ref='table'
                onLayout={({nativeEvent}) => {
                    if (this.refs.table) {
                        this.refs.table.measureInWindow((x, y, width, height) => {
                            location.pend = {x, y, width, height}
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
                                portrait={true}
                                releaseOn={(to, yes, no)=>{
                                    this.props.releaseOn(ground.pend, to, yes, no)
                                }}
                                setDragging={()=>{
                                    this.props.setDragging(this.id)
                                }}
                                moveOn={(to)=>{
                                    return logicRlease(ground.pend, to)
                                }}
                                relateMode={(i==(this.props.table.cards.length-1)&&this.props.table.pending)?this.state.relateMode:'fix'}
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
    table: state.pend,
});

export default connect(mapStateToProps, {popPend})(Pend);
