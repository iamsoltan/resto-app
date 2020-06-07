import { ADD_USER, GET_DISHES } from '../actions/types';

let initialState ={list:[],user:{}}

const cmds = (state = initialState, action) => {

    if (action.type === ADD_USER) {
        console.log("reducer called: ", action.user);
        let x = {list : state.list,user: action.user};
        return x

    } else if (action.type === GET_DISHES) {
        let y = {list:action.payload,user: state.user};
        return y

    } else {
        return state
    }
}

export default cmds;



// let firstTemporaryUsersList = [
//     {
//         personal_info: { name: "mohamed", email: "email@gmail.com", tel: "23369685", adress: "mourouj" },
//         commandes_list: 
//         [
//             { id = "0", adress: "mourouj", delivred: "delivred", commande: [{ id: "0", quantity: "2", price_unit: "20" }] },
//             { "second_command"}, { "third_command"}
//         ]
//     },
//     {'second user object'}
// ]
// let firstTemporaryDishesList = [
//     {
//         "id": 0,
//         "title": "couscous",
//         "img": "https://www.diari.tn/sites/default/files/image/recette/couscous-viande_0.jpg",
//         "unitPrice": 25
//     },
//     {
//         "id": 1,
//         "title": "tajin",
//         "img": "https://www.simpleetgourmand.fr/wp-content/uploads/tajine-tunisien-thon_01.jpg",
//         "unitPrice": 30
//     },
//     {
//         "id": 2,
//         "title": "salade mechwiya",
//         "img": "https://www.cuisinetunisienne.tn/wp-content/uploads/2019/03/Recette-Salade-Mechouia-1080x810.jpg",
//         "unitPrice": 10
//     }
// ]
