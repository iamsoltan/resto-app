import * as types from '../actions/types';

const r_orders = (state = [], action) => {

    if (action.type === types.GET_ORDERS) {
        
        console.log("orders state : ", action.payload );
        return action.payload

    } else {
        return state
    }
}

export default r_orders;

// [{
//     userInfo: {
//         userId: "0",
//         userName: "khalil",
//         adress: "mourouj",
//         tel: "27145229"
//     },
//     orderInfo: {
//         orderId = "0",
//         order_send_date : "06/06/2006 17:25:36",
//         order_response : "to_deliver",
//         order_response_date : "06/06/2006 17:26:36",
//         order_delivred : "delivred",
//         order_delivery_date : "06/06/2006 17:45:36",

//     },
//     orderProducts: [
//         {originalProductID="1",title:"couscous",price:"25",quantity:"2"},
//         {originalProductID="1",title:"couscous",price:"25",quantity:"2"},
//         {originalProductID="1",title:"couscous",price:"25",quantity:"2"}
//     ]   
// }]