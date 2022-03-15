import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Pressable,
  Alert,
  Modal,
} from 'react-native';
import {styles} from '../style/styles';
import Button from './Button';
import {UserInfo} from './UserInfo';

const Mypage = ({navigation}) => {
  const [pwToggle, setPwtoggle] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContents, setModalContents] = useState({title: '', text: ''});

  const modalHandler = () => {
    setModalVisible(!modalVisible);
    setModalContents(prev => ({...prev, title: 'id', text: 'dooooosan'}));
  };

  return (
    <ScrollView contentContainerStyle={styles.containerScrollView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>
              {modalContents.title} : {modalContents.text}
            </Text>
            <Pressable
              style={[style.button, style.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={style.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={[styles.text.big, styles.position.centerBig]}>My Page</Text>
      <UserInfo onPress={() => modalHandler()} title="id" text="doosan" />
      <UserInfo
        onPress={() => setModalVisible(!modalVisible)}
        title="id"
        text="doosan"
      />
      <UserInfo
        onPress={() => setModalVisible(!modalVisible)}
        title="id"
        text="doosan"
      />
      <UserInfo
        onPress={() => setModalVisible(!modalVisible)}
        title="id"
        text="doosan"
      />
      <UserInfo
        onPress={() => setModalVisible(!modalVisible)}
        title="id"
        text="doosan"
      />
      <Button
        onPress={() => navigation.reset({routes: [{name: 'Home'}]})}
        title="Home"
      />
      <Button onPress={() => navigation.navigate('Edit')} title="Edit" />
    </ScrollView>
  );
};

export default Mypage;

const style = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
