import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

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
`;

const CloseIcon = styled.TouchableOpacity`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 20px;
  top: 60px;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: #495057;
  z-index: 10;
`;

const ModalView = styled.View`
  position: relative;
  flex: 1;
`;

const Home = ({ navigation }) => {
    return (
        <AreaView>
          <PayOpenBtn onPress={() => navigation.navigate('Pay')}>
            <Text>음악 잠금 해제</Text>
          </PayOpenBtn>
        </AreaView>
    );
};

export default Home;