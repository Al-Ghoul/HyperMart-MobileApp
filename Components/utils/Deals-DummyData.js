import React from 'react';

let dealId = 0;

const dealList = [
    { id: ++dealId, image: require('../../assets/images/fraise-large.png'), price: 10, label: 'Straberries', rating: 0, quantityState: true, defaultQuantity: 2 },
    { id: ++dealId, image: require('../../assets/images/fried-chips.png'), price: 12, label: 'Fried Chips', rating: 4.8, quantityState: false, defaultQuantity: 2 },
    { id: ++dealId, image: require('../../assets/images/moderChair.png'), price: 3599, label: 'Moder Chair', rating: 4.8, quantityState: false, defaultQuantity: 2 },
    { id: ++dealId, image: require('../../assets/images/washingMachine.png'), price: 45999, label: 'LG washing machine', rating: 4.8, quantityState: true, defaultQuantity: 2 },
];

export default dealList;