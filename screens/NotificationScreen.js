// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Animated,
//   TouchableHighlight,
//   TouchableOpacity,
//   StatusBar,
// } from 'react-native';

// import {SwipeListView} from 'react-native-swipe-list-view';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import Notifications from '../model/Notifications';

// const NotificationScreen = ({navigation}) => {
//   const [listData, setListData] = useState(
//     Notifications.map((NotificationItem, index) => ({
//       key: `${index}`,
//       title: NotificationItem.title,
//       details: NotificationItem.details,
//     })),
//   );

//   const closeRow = (rowMap, rowKey) => {
//     if (rowMap[rowKey]) {
//       rowMap[rowKey].closeRow();
//     }
//   };

//   const deleteRow = (rowMap, rowKey) => {
//     closeRow(rowMap, rowKey);
//     const newData = [...listData];
//     const prevIndex = listData.findIndex(item => item.key === rowKey);
//     newData.splice(prevIndex, 1);
//     setListData(newData);
//   };

//   const onRowDidOpen = rowKey => {
//     console.log('This row opened', rowKey);
//   };

//   const onLeftActionStatusChange = rowKey => {
//     console.log('onLeftActionStatusChange', rowKey);
//   };

//   const onRightActionStatusChange = rowKey => {
//     console.log('onRightActionStatusChange', rowKey);
//   };

//   const onRightAction = rowKey => {
//     console.log('onRightAction', rowKey);
//   };

//   const onLeftAction = rowKey => {
//     console.log('onLeftAction', rowKey);
//   };

//   const VisibleItem = props => {
//     const {
//       data,
//       rowHeightAnimatedValue,
//       removeRow,
//       leftActionState,
//       rightActionState,
//     } = props;

//     if (rightActionState) {
//       Animated.timing(rowHeightAnimatedValue, {
//         toValue: 0,
//         duration: 200,
//         useNativeDriver: false,
//       }).start(() => {
//         removeRow();
//       });
//     }

//     return (
//       <Animated.View
//         style={[styles.rowFront, {height: rowHeightAnimatedValue}]}>
//         <TouchableHighlight
//           style={styles.rowFrontVisible}
//           onPress={() => console.log('Element touched')}
//           underlayColor={'#aaa'}>
//           <View>
//             <Text style={styles.title} numberOfLines={1}>
//               {data.item.title}
//             </Text>
//             <Text style={styles.details} numberOfLines={1}>
//               {data.item.details}
//             </Text>
//           </View>
//         </TouchableHighlight>
//       </Animated.View>
//     );
//   };

//   const renderItem = (data, rowMap) => {
//     const rowHeightAnimatedValue = new Animated.Value(60);

//     return (
//       <VisibleItem
//         data={data}
//         rowHeightAnimatedValue={rowHeightAnimatedValue}
//         removeRow={() => deleteRow(rowMap, data.item.key)}
//       />
//     );
//   };

//   const HiddenItemWithActions = props => {
//     const {
//       swipeAnimatedValue,
//       leftActionActivated,
//       rightActionActivated,
//       rowActionAnimatedValue,
//       rowHeightAnimatedValue,
//       onClose,
//       onDelete,
//     } = props;

//     if (rightActionActivated) {
//       Animated.spring(rowActionAnimatedValue, {
//         toValue: 500,
//         useNativeDriver: false
//       }).start();
//     } else {
//       Animated.spring(rowActionAnimatedValue, {
//         toValue: 75,
//         useNativeDriver: false
//       }).start();
//     }

//     return (
//       <Animated.View style={[styles.rowBack, {height: rowHeightAnimatedValue}]}>
//         <Text>Left</Text>
//         {!leftActionActivated && (
//           <TouchableOpacity
//             style={[styles.backRightBtn, styles.backRightBtnLeft]}
//             onPress={onClose}>
//             <MaterialCommunityIcons
//               name="close-circle-outline"
//               size={25}
//               style={styles.trash}
//               color="#fff"
//             />
//           </TouchableOpacity>
//         )}
//         {!leftActionActivated && (
//           <Animated.View
//             style={[
//               styles.backRightBtn,
//               styles.backRightBtnRight,
//               {
//                 flex: 1,
//                 width: rowActionAnimatedValue,
//               },
//             ]}>
//             <TouchableOpacity
//               style={[styles.backRightBtn, styles.backRightBtnRight]}
//               onPress={onDelete}>
//               <Animated.View
//                 style={[
//                   styles.trash,
//                   {
//                     transform: [
//                       {
//                         scale: swipeAnimatedValue.interpolate({
//                           inputRange: [-90, -45],
//                           outputRange: [1, 0],
//                           extrapolate: 'clamp',
//                         }),
//                       },
//                     ],
//                   },
//                 ]}>
//                 <MaterialCommunityIcons
//                   name="trash-can-outline"
//                   size={25}
//                   color="#fff"
//                 />
//               </Animated.View>
//             </TouchableOpacity>
//           </Animated.View>
//         )}
//       </Animated.View>
//     );
//   };

//   const renderHiddenItem = (data, rowMap) => {
//     const rowActionAnimatedValue = new Animated.Value(75);
//     const rowHeightAnimatedValue = new Animated.Value(60);

//     return (
//       <HiddenItemWithActions
//         data={data}
//         rowMap={rowMap}
//         rowActionAnimatedValue={rowActionAnimatedValue}
//         rowHeightAnimatedValue={rowHeightAnimatedValue}
//         onClose={() => closeRow(rowMap, data.item.key)}
//         onDelete={() => deleteRow(rowMap, data.item.key)}
//       />
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content"/>
//       {/* <StatusBar backgroundColor="#FF6347" barStyle="light-content"/> */}
//       <SwipeListView
//         data={listData}
//         renderItem={renderItem}
//         renderHiddenItem={renderHiddenItem}
//         leftOpenValue={75}
//         rightOpenValue={-150}
//         disableRightSwipe
//         onRowDidOpen={onRowDidOpen}
//         leftActivationValue={100}
//         rightActivationValue={-200}
//         leftActionValue={0}
//         rightActionValue={-500}
//         onLeftAction={onLeftAction}
//         onRightAction={onRightAction}
//         onLeftActionStatusChange={onLeftActionStatusChange}
//         onRightActionStatusChange={onRightActionStatusChange}
//       />
//     </View>
//   );
// };

// export default NotificationScreen;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#f4f4f4',
//     flex: 1,
//   },
//   backTextWhite: {
//     color: '#FFF',
//   },
//   rowFront: {
//     backgroundColor: '#FFF',
//     borderRadius: 5,
//     height: 60,
//     margin: 5,
//     marginBottom: 15,
//     shadowColor: '#999',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 5,
//   },
//   rowFrontVisible: {
//     backgroundColor: '#FFF',
//     borderRadius: 5,
//     height: 60,
//     padding: 10,
//     marginBottom: 15,
//   },
//   rowBack: {
//     alignItems: 'center',
//     backgroundColor: '#DDD',
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingLeft: 15,
//     margin: 5,
//     marginBottom: 15,
//     borderRadius: 5,
//   },
//   backRightBtn: {
//     alignItems: 'flex-end',
//     bottom: 0,
//     justifyContent: 'center',
//     position: 'absolute',
//     top: 0,
//     width: 75,
//     paddingRight: 17,
//   },
//   backRightBtnLeft: {
//     backgroundColor: '#1f65ff',
//     right: 75,
//   },
//   backRightBtnRight: {
//     backgroundColor: 'red',
//     right: 0,
//     borderTopRightRadius: 5,
//     borderBottomRightRadius: 5,
//   },
//   trash: {
//     height: 25,
//     width: 25,
//     marginRight: 7,
//   },
//   title: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: '#666',
//   },
//   details: {
//     fontSize: 12,
//     color: '#999',
//   },
// });


import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView, Modal, TouchableOpacity, FlatList } from 'react-native';
import database from '@react-native-firebase/database';
import DropDownPicker from 'react-native-dropdown-picker';
import UploadScreen from './uploadImageScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';

const SettingsScreen = () => {
  const reference = storage().ref('black-t-shirt-sm.png');

  const uid = auth().currentUser.uid;
  const [data1, setData1] = useState([]);
  const [businessData, setBusinessData] = useState([]);
  const [businessId, setBusinessId] = useState('');
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [name, setName] = useState();
  const [businessName, setBusinessName] = useState('');
  // const [category,setCategory] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [descripton, setDescription] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
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


  console.log(JSON.stringify(businessData));

  const getId = () => {

    var id = "master" + Math.round(new Date().getTime() / 1000);
    setBusinessId(id);

  }


  useEffect(() => {
   // setBusinessData([]);
    database()
      .ref('/users/' + uid)
      .on('value', snapshot => {
      //  setBusinessData(snapshot.val());
        setData(snapshot.val());
        upDateData();
      });

  }, [])

console.log(JSON.stringify(businessData));

  function upDateData() {

    // setBusinessData([]);
    var keys = Object.keys(data);



    for (let i = 0; i < keys.length; i++) {

      var key = keys[i];
      businessData.push({
        name: data[key].name,
        businessName: data[key].businessName,
        category: data[key].category,
        descripton: data[key].descripton,
        mobileNumber: data[key].mobileNumber,
        businessId: data[key].businessId
      })




    }

    const resultArr = businessData.filter((data,index)=>{
      return businessData.indexOf(data) === index;
    })
    console.log(JSON.stringify("result:"+resultArr))
    setData1(resultArr);


  }


  function addData() {

    getId();
    database()
      .ref('/users/' + uid + '/' + businessId)
      .set({
        name: name,
        businessName: businessName,
        category: value,
        mobileNumber: mobileNumber,
        descripton: descripton,
        businessId: businessId
      })
      .then(() => console.log('Data set.'));
  }
  console.log(JSON.stringify(data1));

  const renderItem = ({ item }) => {
   
    return (
      <View>
        <Text>
          {item.mobileNumber}
        </Text>
      </View>
    );
  };

  return (

    <View style={styles.container}>
      <View style={{ height: '90%', }} >
        <View style={{}}>
          <FlatList
            data={data1}
            renderItem={renderItem}
            keyExtractor={item => item.businessId}
          />
     
        </View>
      </View>
      <View style={{ height: '10%', justifyContent: 'flex-end', alignItems: 'flex-end' }} >
        <TouchableOpacity onPress={() => { setModal(!modal) }} >
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

          <Text style={styles.inputLabel} >Enter Name</Text>
          <TextInput placeholder="Enter Name" style={styles.inputBox} onChangeText={(data) => { setName(data) }} />
          <Text style={styles.inputLabel} >Enter Business Name</Text>
          <TextInput placeholder="Enter Name" style={styles.inputBox} onChangeText={(data) => { setBusinessName(data) }} />
          <Text style={styles.inputLabel} >Category</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={category}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setCategory}
          />

          <Text style={styles.inputLabel} >Mobile Number</Text>
          <TextInput placeholder="Enter Name" style={styles.inputBox} onChangeText={(data) => { setMobileNumber(data) }} />
          <Text style={styles.inputLabel} >Description</Text>
          <TextInput placeholder="Enter Name" style={styles.inputBox} onChangeText={(data) => { setDescription(data) }} />
          <Button title="click"
        onPress={async () => {
          // path to existing file on filesystem
          const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/black-t-shirt-sm.png`;
          // uploads file
          await reference.putFile(pathToFile);
        }}
      />
          <TouchableOpacity onPress={() => { addData() }} >
            <View style={{ backgroundColor: '#367dd5', height: '30%', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }} >
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }} >Add</Text>
            </View>
          </TouchableOpacity>
    
        </View>
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
  }
});
