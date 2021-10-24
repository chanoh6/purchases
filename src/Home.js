import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

const PayOpenBtn = styled.TouchableOpacity`
  height: 50px;
  width: 60%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 1);
`;

const AreaView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Home = ({ navigation }) => {
  return (
    <AreaView>
      <PayOpenBtn onPress={() => navigation.navigate("Pay")}>
        <Text>음악 잠금 해제</Text>
      </PayOpenBtn>
    </AreaView>
  );
};

export default Home;
