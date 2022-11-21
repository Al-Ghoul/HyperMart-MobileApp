import React from "react";

let beautyDealId = 0;

const beautyList = [
    { id: ++beautyDealId, image: require('../../assets/images/logos/revlon-logo.png'), discountPercentage: 10 },
    { id: ++beautyDealId, image: require('../../assets/images/logos/lakme-logo.png'), discountPercentage: 20 },
    { id: ++beautyDealId, image: require('../../assets/images/logos/garnier-logo.png'), discountPercentage: 15 },
    { id: ++beautyDealId, image: require('../../assets/images/logos/maybelline-logo.png'), discountPercentage: 5 },
    { id: ++beautyDealId, image: require('../../assets/images/logos/clinique-logo.png'), discountPercentage: 30 },
    { id: ++beautyDealId, image: require('../../assets/images/logos/sugar-logo.png'), discountPercentage: 60 },
]

export default beautyList;