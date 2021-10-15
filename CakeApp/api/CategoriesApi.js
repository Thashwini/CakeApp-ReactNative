import firebase from "firebase";

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