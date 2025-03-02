import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const FlipCard = ({
  front,
  back,
  height,
}: {
  front: React.ReactNode;
  back: React.ReactNode;
  height: number;
}) => {
  const [isFlipped, setIsFlipped] = useState(false); // state of card
  const flipAnimation = useRef(new Animated.Value(0)).current; // animated value for flip animation

  // front card rotation
  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const flipToFrontStyle = {
    transform: [{rotateY: frontInterpolate}],
  };

  // back card rotation
  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const flipToBackStyle = {
    transform: [{rotateY: backInterpolate}],
  };

  // card flip animation
  const flipCard = () => {
    if (isFlipped) {
      // animate back to the front side
      Animated.spring(flipAnimation, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      // animate to the back side
      Animated.spring(flipAnimation, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
    setIsFlipped(!isFlipped);
  };

  // card ui
  return (
    <View style={[styles.container, {height}]}>
      <TouchableWithoutFeedback onPress={flipCard}>
        <View style={styles.cardContainer}>
          <Animated.View style={[styles.card, flipToFrontStyle]}>
            {front}
          </Animated.View>

          <Animated.View style={[styles.card, flipToBackStyle]}>
            {back}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  cardContainer: {
    width: width - 50,
  },
  front: {
    backgroundColor: '#092635',
  },
  back: {
    backgroundColor: '#5C8374',
  },
  card: {
    position: 'absolute',
    backfaceVisibility: 'hidden',
    width: '100%',
  },
  text: {
    color: '#FFFFDD',
    fontSize: 18,
  },
});

export default FlipCard;
