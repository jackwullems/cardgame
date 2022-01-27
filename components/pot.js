import React, { Component } from 'react'
import Card from './card'
import { View, Dimensions, Text, TouchableWithoutFeedback, StyleSheet, Alert, Switch } from 'react-native'
import { location, deal, logicFlip, ground, logicRlease } from '../store'
import { connect } from 'react-redux'
import { addG11, addG12, addG13, addG21, addG22, addG23, addG31, addG32, addG33, setPot, popPot, setGameatrest } from '../redux/actions'
import { percentUnit, percentRemind } from './helpers'
import SoundPlayer from 'react-native-sound-player'

class Pot extends React.Component {
  id = 'pot'
  render() {
    const left = percentUnit * 2 + percentRemind
    const top = percentUnit * 5 + percentRemind
    const width = percentUnit * 2
    const height = percentUnit
    return (
      <View style={{ position: 'absolute', top: top + '%', left: left + '%', width: width + '%', height: height + '%' }}
        ref='pot'
        onLayout={({ nativeEvent }) => {
          if (this.refs.pot) {
            this.refs.pot.measureInWindow((x, y, width, height) => {
              location.pot = { x, y, width, height }
            })
          }
        }}
      >
        {this.props.table.cards.map((card, i) => {
          const cardref = 'card' + i.toString()
          return (
            <View key={i} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, flexDirection: 'row' }}>
              <Card ref={cardref} source={card} portrait={card.portrait} onPress={this.tapCard.bind(this)}
                draggable={!card.faceDown}
                releaseOn={(to, yes, no)=>{
                  this.props.releaseOn(ground.pot, to, yes, no)
                }}
                setDragging={() => {
                  this.props.setDragging(this.id)
                }}
                moveOn={(to) => {
                  return logicRlease(ground.pot, to)
                }}
                relateMode='fix'
                modeChanged={this.props.modeChanged}
              />
              <View style={{ marginTop: percentUnit, marginLeft: percentUnit }}>
                <Switch
                  // trackColor='green'
                  // thumbColor='green'
                  value={this.props.table.gameatrest}
                  onValueChange={() => {
                    this.props.setGameatrest(!this.props.table.gameatrest)
                  }} />
              </View>
            </View>
          )
        })}
      </View>
    )
  }

  tapCard() {
    const pot = [...this.props.table.cards]
    var cnt = pot.length
    if (!deal.init) {
      deal.init = true
      if (cnt < 9) {
        alert('No more card')
        return
      }
      this.props.setDragging(this.id)
      // SoundPlayer.playSoundFile('deal', 'mp3')
      setTimeout(() => {
        SoundPlayer.playSoundFile('flip', 'mp3')
        this.refs['card' + (--cnt)].move(
          location.g11.x - location.pot.x,
          location.g11.y - location.pot.y
        )
        setTimeout(() => {
          SoundPlayer.playSoundFile('flip', 'mp3')
          this.refs['card' + (--cnt)].move(
            location.g12.x - location.pot.x,
            location.g12.y - location.pot.y
          )
          setTimeout(() => {
            SoundPlayer.playSoundFile('flip', 'mp3')
            this.refs['card' + (--cnt)].move(
              location.g13.x - location.pot.x,
              location.g13.y - location.pot.y
            )
            setTimeout(() => {
              SoundPlayer.playSoundFile('flip', 'mp3')
              this.refs['card' + (--cnt)].move(
                location.g21.x - location.pot.x,
                location.g21.y - location.pot.y
              )
              setTimeout(() => {
                SoundPlayer.playSoundFile('flip', 'mp3')
                this.refs['card' + (--cnt)].move(
                  location.g22.x - location.pot.x,
                  location.g22.y - location.pot.y
                )
                setTimeout(() => {
                  SoundPlayer.playSoundFile('flip', 'mp3')
                  this.refs['card' + (--cnt)].move(
                    location.g23.x - location.pot.x,
                    location.g23.y - location.pot.y
                  )
                  setTimeout(() => {
                    SoundPlayer.playSoundFile('flip', 'mp3')
                    this.refs['card' + (--cnt)].move(
                      location.g31.x - location.pot.x,
                      location.g31.y - location.pot.y
                    )
                    setTimeout(() => {
                      SoundPlayer.playSoundFile('flip', 'mp3')
                      this.refs['card' + (--cnt)].move(
                        location.g32.x - location.pot.x,
                        location.g32.y - location.pot.y
                      )
                      setTimeout(() => {
                        SoundPlayer.playSoundFile('flip', 'mp3')
                        this.refs['card' + (--cnt)].move(
                          location.g33.x - location.pot.x,
                          location.g33.y - location.pot.y
                        )
                        setTimeout(() => {
                          var card = pot.pop()
                          card.faceDown = false
                          this.props.addG11(card)
                          var card = pot.pop()
                          card.faceDown = false
                          this.props.addG12(card)
                          var card = pot.pop()
                          card.faceDown = false
                          this.props.addG13(card)
                          var card = pot.pop()
                          card.faceDown = false
                          this.props.addG21(card)
                          var card = pot.pop()
                          card.faceDown = false
                          this.props.addG22(card)
                          var card = pot.pop()
                          card.faceDown = false
                          this.props.addG23(card)
                          var card = pot.pop()
                          card.faceDown = false
                          this.props.addG31(card)
                          var card = pot.pop()
                          card.faceDown = false
                          this.props.addG32(card)
                          var card = pot.pop()
                          card.faceDown = false
                          this.props.addG33(card)
                          this.props.setPot(pot)
                        }, 1000)

                      }, 300)

                    }, 300)

                  }, 300)

                }, 300)

              }, 300)

            }, 300)

          }, 300)

        }, 300)

      }, 100)
      return
    }
    const card = pot.pop()
    if (card.faceDown) {
      if (logicFlip()) {
        SoundPlayer.playSoundFile('flip', 'mp3')
        card.faceDown = false
        pot.push(card)
        this.props.setPot(pot)
        return
      }
      SoundPlayer.playSoundFile('error', 'mp3')
    }
  }
}

const mapStateToProps = (state) => ({
  table: state.pot
});

export default connect(mapStateToProps, { addG11, addG12, addG13, addG21, addG22, addG23, addG31, addG32, addG33, setPot, setGameatrest, popPot })(Pot);
