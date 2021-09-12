import React, { useState, useEffect } from 'react';
import {Linking, Image, View, Text, Button, TextInput, StyleSheet, ScrollView, Modal, TouchableOpacity, FlatList, ImageBackground, } from 'react-native';
import database from '@react-native-firebase/database';
import DropDownPicker from 'react-native-dropdown-picker';
import UploadScreen from './uploadImageScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';

const SettingsScreen = () => {

  const reference = storage().ref('black-t-shirt-sm.png');
  const [image, setImage] = useState();
  const [uploadImageStatus, setUploadImageStatus] = useState(false);

  const uid = auth().currentUser.uid;

  const [data1, setData1] = useState([]);
  const [businessData, setBusinessData] = useState([]);
  const [businessId, setBusinessId] = useState(Math.floor((Math.random() * 1000000) + 1));
  console.log(businessId);
  const [data, setData] = useState([]);

  const [modal, setModal] = useState(false);
  const [name, setName] = useState();
  const [businessName, setBusinessName] = useState('');
  // const [category,setCategory] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [descripton, setDescription] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  // console.log(value);
  const [category1, setCategory1] = useState('');
  const [category, setCategory] = useState([
    { label: 'Electrician', value: 'Electrician' },
    { label: 'Mechanic', value: 'Mechanic' },
    { label: 'Plumber', value: 'Plumber' },
    { label: 'Air Conditioner', value: 'Air Conditioner' },
    { label: 'Appliances', value: 'Appliances' },
    { label: 'Computer & laptop', value: 'Computer & laptop' },
    { label: 'Cleaning Services', value: 'Cleaning Services' },
    { label: 'Pest Control', value: 'Pest Control' }
  ]);
  let bs = React.createRef();
  let fall = new Animated.Value(1);
  console.log(data);
  const userData = async () => {

    database()
      .ref(`users/${uid}`)
      .on('value', snapshot => {
        let data2 = snapshot.val();
        if (data2 != null) {
          var keys = Object.keys(data2);
          let testing = [];
          for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let obj = data2[key];
            testing.push(obj);
          }
          setData(testing);
        }


      });

  }

  useEffect(() => {
    userData();
  }, []);



  // const getId = () => {

  //   var id = "master" + Math.round(new Date().getTime() / 1000);
  //   console.log(id);
  //   setBusinessId(id);

  // }


  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({

      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
    // bs.current.snapTo(1)
  }

  const uploadImage = async () => {

    const url = await storage().ref(`users/images/${uid}/image/1`).getDownloadURL();
    setImageUrl(url);
    const reference = storage().ref(`users/images/${uid}/image/1`);
    const task = reference.putFile(image);
    task.on('state_changed', taskSnapshot => {
      console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
    });

    task.then(() => {
      console.log('Image uploaded to the bucket!');
      setUploadImageStatus(true);
    });
  }

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={uploadImage}>
        <Text style={styles.panelButtonTitle}>Upload Image</Text>

      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );



  async function addData() {

    database()
      .ref('/users/' + uid + '/' + businessId)
      .set({
        name: name,
        businessName: businessName,
        category: value,
        mobileNumber: mobileNumber,
        descripton: descripton,
        businessId: businessId,
        image: imageUrl
      })
      .then(() => {
        
      });
  }

  const renderItem = ({ item }) => {

    return (
      <TouchableOpacity onPress={()=>{Linking.openURL('tel:'+item.mobileNumber);}} >
      <View style={{ height: 400, width: '90%', padding: 0, backgroundColor: '#f2f2f2', marginTop: 20, marginLeft: 15, borderRadius:10 }}  >
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', height: '10%', }} >

          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }} >
              {item.category}
            </Text>
          </View>
          <View style={{ marginLeft: 60 }} >
            <Text style={{ fontSize: 20 }} >
              ID   :   {item.businessId}
            </Text>
          </View>

        </View>
        <View style={{ justifyContent: 'flex-start', height: '10%', }} >
          <Text style={{ fontSize: 20 }} >
            {item.businessName}
          </Text>
        </View>
        <View style={{ justifyContent: 'flex-start', height: '80%', }} >
          {/* <Text style={{ fontSize: 20 }} >
            {item.businessName}
          </Text> */}
          <Image source={{
            uri: item.image //'https://firebasestorage.googleapis.com/v0/b/online-home-maintenance.appspot.com/o/users%2Fimages%2FgZ2Qk4wyrSbjesHFrF5owlToWL62%2Fimage%2F1?alt=media&token=66f21226-b039-4346-8952-394dfc3fc4d6',
          }}
            style={{ height: '100%', width: '100%' }}
          />




        </View>

      </View>
      </TouchableOpacity>
    );
  };

  return (

    <View style={styles.container}>

      <View style={{ height: '90%', }} >
        <View style={{}}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.businessId}
          />

        </View>
      </View>
      <View style={{ height: '10%', justifyContent: 'flex-end', alignItems: 'flex-end' }} >
        <TouchableOpacity onPress={() => {
          setModal(!modal);

          setBusinessId(Math.floor((Math.random() * 1000000) + 1));
        }} >
          <Icon name="plus" size={50}
            color="blue" />
        </TouchableOpacity>
      </View>
      <Modal

        animationType="slide"
        transparent={false}
        visible={modal}
        onRequestClose={() => {

          //setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1, margin: 10 }} >

          <View style={{ flexDirection: 'row' }} >
            <View style={{ marginTop: 10, marginBottom: 10, width: '80%' }} >
              <Text style={{ fontWeight: 'bold', fontSize: 20 }} >Add a Producct</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => { setModal(!modal) }} >
                <Icon name="chevron-down" size={50}
                  color="#367dd5"
                  onPress={() => { setModal(!modal) }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView>
            <Text style={styles.inputLabel} >Category</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={category}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setCategory1}
            />
            <Text style={styles.inputLabel} >Enter Name</Text>
            <TextInput placeholder="Enter Name" style={styles.inputBox} onChangeText={(data) => { setName(data) }} />
            <Text style={styles.inputLabel} >Enter Business Name</Text>
            <TextInput placeholder="Enter Name" style={styles.inputBox} onChangeText={(data) => { setBusinessName(data) }} />
            {/* <Text style={styles.inputLabel} >Enter Business Name</Text>
            <TextInput placeholder="Enter Name" style={styles.inputBox} onChangeText={(data) => { setBusinessName(data) }} /> */}


            <Text style={styles.inputLabel} >Mobile Number</Text>
            <TextInput placeholder="Enter Name" style={styles.inputBox} onChangeText={(data) => { setMobileNumber(data) }} />
            <Text style={styles.inputLabel} >Description</Text>
            <View style={{ flexDirection: 'row' }} >
              <View style={{ width: '80%' }} >
                <Text>Upload Image</Text>
                {uploadImageStatus ? <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'green' }} >uploaded</Text> : <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'red' }}>Upload Image</Text>}

              </View>
              <View style={{ width: '20%' }} >
                <TouchableOpacity onPress={() => { bs.current.snapTo(0) }} >
                  <Icon
                    name="camera"
                    size={35}
                    color="blue" />
                </TouchableOpacity>
              </View>
            </View>
            <TextInput placeholder="Enter Description" style={styles.inputBox} onChangeText={(data) => { setDescription(data) }} />
            <TouchableOpacity onPress={() => { addData() }} >
              <View style={{ backgroundColor: '#367dd5', height: 50, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }} >Add</Text>
              </View>
            </TouchableOpacity>



            {/* <TouchableOpacity onPress={() => { bs.current.snapTo(0) }} >
              <View style={{ backgroundColor: '#367dd5' , height: '10%',  borderRadius: 5, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }} >upload Image</Text>
              </View>
            </TouchableOpacity> */}

          </ScrollView>

        </View>
        <BottomSheet
          ref={bs}
          snapPoints={[330, 0]}
          renderContent={renderInner}
          renderHeader={renderHeader}
          initialSnap={1}
          callbackNode={fall}
          enabledGestureInteraction={true}
        />

      </Modal>



    </View>


  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // justifyContent: 'center'
  },
  inputBox: {
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10
  },
  formContainer: {
    margin: "5%",
    height: "80%",
    width: "80%"
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: 'gray',
    paddingTop: 20,

  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
