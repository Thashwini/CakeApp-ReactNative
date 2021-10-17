import firebase from "firebase";

export function login ({email,password}){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((value)=>console.log(value))
}

export function signup ({email,password, displayName}){
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((userInfo)=>{
        console.log(userInfo)
        userInfo.user.updateProfile({displayName: displayName.trim()})
        .then(()=>{})
    })
}

export function subscribeToAuthChanges(authStateChanged){
    firebase.auth().onAuthStateChanged((user)=>{
        console.log(user)
        authStateChanged(user)
    })
}

export function signout(onSignOut){
    firebase.auth().signOut()
    .then(()=>{
        console.log('Sign Out')
        onSignOut();
    })
}

export async function getCategories(categoryRetreived){

    var cakeList = []
    var snapshot = await firebase.firestore()
    .collection('Categories')
    .get()
    snapshot.forEach((doc)=>{
        const cakeItem = doc.data();
        cakeItem.id = doc.id

        cakeList.push(cakeItem)
    })

    categoryRetreived(cakeList)
}

export async function getOrders(orderRetreived){
    const uId = firebase.auth().currentUser.uid
    var orderList = []
    console.log(uId)
    var snapshot = await firebase.firestore()
    .collection('Orders')
    .where('customerId', '==' , uId)
    .get()
    snapshot.forEach((doc)=>{
        const order = doc.data();
        order.id = doc.id

        orderList.push(order)
    })

    orderRetreived(orderList)
}

export function addOrders(order, addOrdersComplete){
    console.log('oooerrrderrrr')
    console.log(order)
    firebase.firestore()
    .collection('Orders')
    .add({
        customerId: firebase.auth().currentUser.uid,
        customerName: firebase.auth().currentUser.displayName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        Items: order,
        dddd:order,
        orderId: 'order' + Math.round(  (Math.random() * Math.pow(10, 6)) + '' + new Date().getTime())

    })
    .then((snapshot) => {
        // snapshot.get()
        order.id=snapshot.id
        snapshot.set(order)
    })
    .then(()=>addOrdersComplete(order))
    .catch((error)=>console.log(error))
}