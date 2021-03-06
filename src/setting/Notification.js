import { useIsFocused } from "@react-navigation/core";
import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components";

const Container = styled.View`
  position: relative;
  flex: 1;
  background-color: #141212;
  padding: 24px;
  height: 100%;
`;

const ImageView = styled.View`
  margin: 0 auto;
  width: 200px;
  height: 200px;
`;

const FlexView = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
`;

const FlexText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-left: 8px;
`;

const BtnFlexView = styled.View`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ToggleBtn = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 32px;
  background-color: #282828;
  border-radius: 50px;
  ${({ active }) =>
    active &&
    `
    background-color: #fff;
  `}
`;

const ToggleText = styled.Text`
  font-size: 14px;
  color: #000;
  font-weight: bold;
`;

const InfoText = styled.Text`
  font-size: 12px;
  color: gray;
  text-align: center;
  margin-bottom: 16px;
`;

const SetBtnView = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const SetButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px 0;
  background-color: #42a5f5;
  border-radius: 30px;
`;

const ButtonTit = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

const pushSelects = ['on', 'off'];
const benefitSelects = ['on', 'off'];

const Notification = () => {
  const [push, setPush] = useState(pushSelects[1]);
  const [benefit, setBenefit] = useState(benefitSelects[1]);

  return (
    <Container>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#141212" />

      <ImageView>
        <Image source={require("../../assets/lightbulb.gif")} style={styles.image} />
      </ImageView>

      <FlexView>
        <MaterialCommunityIcons name="bell-outline" size={24} color="white" />

        <FlexText>PUSH ?????? ??????</FlexText>

        <BtnFlexView>
          {pushSelects.map((select, index) => (
            <ToggleBtn
              key={select}
              active={push === select}
              onPress={() => setPush(select)}
              style={(index === 0) && { marginRight: 16 }}
            >
              <ToggleText>{select}</ToggleText>
            </ToggleBtn>
          ))}
        </BtnFlexView>
      </FlexView>

      <InfoText>????????? ????????? ?????? ???????????? ???????????????!</InfoText>

      <FlexView>
        <MaterialCommunityIcons name="shopping-outline" size={24} color="white" />

        <FlexText>?????? ??? ????????? ??????</FlexText>

        <BtnFlexView>
          {benefitSelects.map((select, index) => (
            <ToggleBtn
              key={select}
              active={benefit === select}
              onPress={() => setBenefit(select)}
              style={(index === 0) && { marginRight: 16 }}
            >
              <ToggleText>{select}</ToggleText>
            </ToggleBtn>
          ))}
        </BtnFlexView>
      </FlexView>

      <InfoText>????????? ????????? ????????? ??????????????????.</InfoText>

      <SetBtnView>
        <SetButton>
          <ButtonTit>?????? ??????</ButtonTit>
        </SetButton>
      </SetBtnView>
    </Container>
  );
};

export default Notification;
