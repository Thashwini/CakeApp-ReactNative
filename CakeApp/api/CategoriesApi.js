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