import React from 'react';
let categoryId = 0;

const categoryList = [
    { id: ++categoryId, name: 'Groceries', color: '#4AB7B6', icon: require('../../assets/icons/vegetables-icon.png') },
    { id: ++categoryId, name: 'Appliances', color: '#4B9DCB', icon: require('../../assets/icons/washing-machine-icon.png') },
    { id: ++categoryId, name: 'Fashion', color: '#AF558B', icon: require('../../assets/icons/t-shirt-icon.png') },
    { id: ++categoryId, name: 'Furniture', color: '#A187D9', icon: require('../../assets/icons/chair-icon.png') },
]


export default categoryList;