const state = {
    products: [1, 2, 3, 4, 5, 6],
    stockDetails: [{
            itemNumber: 1,
            itemName: "Living room table",
            itemPrice: 5,
            itemQuantity: 0,
            itemImage: '../images/andrea-davis-zOPRKaYLSdE-unsplash.jpg',
            description: "Our furniture are wonderfully crafted by the best wood to bring elegance to your homes"
        },
        {
            itemNumber: 27466,
            itemName: "TV stand",
            itemPrice: 10,
            itemQuantity: 0,
            itemImage: '../images/andres-jasso-jfxY9uoMRwM-unsplash.jpg',
            description: "Our furniture are wonderfully crafted by the best wood to bring elegance to your homes"

        },
        {
            itemNumber: 27466,
            itemName: "Bed",
            itemPrice: 10,
            itemQuantity: 0,
            itemImage: '../images/febrian-zakaria-2QTsCoQnoag-unsplash.jpg',
            description: "Our furniture are wonderfully crafted by the best wood to bring elegance to your homes"

        },
        {
            itemNumber: 27466,
            itemName: "Sofa",
            itemPrice: 10,
            itemQuantity: 4,
            itemImage: '../images/paul-weaver-nWidMEQsnAQ-unsplash.jpg',
            description: "Our furniture are wonderfully crafted by the best wood to bring elegance to your homes"

        },
        {
            itemNumber: 27466,
            itemName: "Book shelf",
            itemPrice: 10,
            itemQuantity: 4,
            itemImage: '../images/pickawood-CQfpe-YLN6Q-unsplash.jpg',
            description: "Our furniture are wonderfully crafted by the best wood to bring elegance to your homes"

        },
        {
            itemNumber: 27466,
            itemName: "Dining table",
            itemPrice: 10,
            itemQuantity: 4,
            itemImage: '../images/stephan-coudassot-xstTzTRiJ4k-unsplash.jpg',
            description: "Our furniture are wonderfully crafted by the best wood to bring elegance to your homes"

        },
    ],
}
const getters = {
    stock: (state) => state.stockDetails,
}
const actions = {

}
const mutations = {

}
export default {
    state,
    getters,
    actions,
    mutations
}