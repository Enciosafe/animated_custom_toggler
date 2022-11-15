import {AnimatePresence, MotiView, View} from "moti";
import {useMemo, useReducer, useState} from "react";
import {Pressable, StyleSheet, Text} from "react-native";
import {Easing} from "react-native-reanimated";

const _colors = {
    active: '#2C2C2C',
    inactive: '#DCDCDC'
}

const _colorsIndi = {
    active: '#f56348',
    inactive: '#2b8000'
}

const Switch = ({size, onPress, isActive}) => {

  const trackWidth = useMemo(() => {
    return size * 1.5;
  }, [size]);

  const trackHeight = useMemo(() => {
    return size * 0.4;
  }, [size]);

  const knobSize = useMemo(() => {
        return size * 0.6;
        }, [size]);

  const transition = {
      type: 'timing',
      duration: 300,
      easing: Easing.inOut(Easing.ease)
  }

  return (
      <Pressable onPress={onPress}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <MotiView
                  transition={transition}
                  animate={{
                      backgroundColor: isActive ? _colors.active : _colors.inactive,
                  }}
                  style={{
                      position: 'absolute',
                      width: trackWidth,
                      height: trackHeight,
                      borderRadius: trackHeight / 2,
                      backgroundColor: _colors.active
                  }}
              />
              <MotiView
                  transition={transition}
                  animate={{
                      translateX: isActive ? trackWidth / 4 : -trackWidth / 4,
                  }}
                  style={{
                      width: size,
                      height: size,
                      borderRadius: size / 2,
                      backgroundColor: '#fff',
                      alignItems: 'center',
                      justifyContent: 'center'
                  }}
              >
                  <MotiView
                      transition={transition}
                      animate={{
                          width: isActive ? 0 : knobSize,
                          borderColor: isActive ? _colorsIndi.active: _colorsIndi.inactive
                      }}
                      style={{
                          width: knobSize,
                          height: knobSize,
                          borderRadius: knobSize / 2,
                          borderWidth: size * 0.1,
                          borderColor: _colors.active
                      }}
                  />
              </MotiView>
          </View>
      </Pressable>
  )

}

export default function App() {
    const [isActive, setIsActive] = useState(false);
    return (
    <View style={[styles.container, {backgroundColor: isActive ? 'tomato' : 'green'}]}>
        <Switch
            size={60}
            onPress={() => {setIsActive((isActive) => !isActive)}}
            isActive={isActive}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
