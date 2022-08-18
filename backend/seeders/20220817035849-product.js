'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('inventories', [
      {
        product_id: "1",
        brand: "RayBan",
        model: "RX6421",
        category: "Mens",
        sunglass: false,
        color: "Silver on Grey",
        price: 205.00
      },
      {
        product_id: "2",
        brand: "RayBan",
        model: "RX8905",
        category: "Mens",
        sunglass: false,
        color: "Transparent Grey",
        price: 265.00
      },
      {
        product_id: "3",
        brand: "Nike",
        model: "NIKE 7246",
        category: "Mens",
        sunglass: false,
        color: "Clear",
        price: 265.00
      },
      {
        product_id: "4",
        brand: "Nike",
        model: "NIKE 8048",
        category: "Mens",
        sunglass: false,
        color: "Satin Black",
        price: 255.00
      },
      {
        product_id: "5",
        brand: "Longchamp",
        model: "LO2675",
        category: "Womens",
        sunglass: false,
        color: "Warm Havana",
        price: 239.00
      },
      {
        product_id: "6",
        brand: "Longchamp",
        model: "LO2687",
        category: "Womens",
        sunglass: false,
        color: "Dark Havana",
        price: 195.00
      },
      {
        product_id: "7",
        brand: "Tom Ford",
        model: "TF5740-B",
        category: "Womens",
        sunglass: false,
        color: "Shiny Black",
        price: 519.00
      },
      {
        product_id: "8",
        brand: "Tom Ford",
        model: "TF5750-B",
        category: "Womens",
        sunglass: false,
        color: "Matte Blue",
        price: 519.00
      },
      {
        product_id: "9",
        brand: "RayBan",
        model: "RY1902",
        category: "Childrens",
        sunglass: false,
        color: "Transparent Violet",
        price: 105.00
      },
      {
        product_id: "10",
        brand: "RayBan",
        model: "RY9083V",
        category: "Childrens",
        sunglass: false,
        color: "Striped Havana",
        price: 105.00
      },
      {
        product_id: "11",
        brand: "Steve Madden",
        model: "Funffeti",
        category: "Childrens",
        sunglass: false,
        color: "Blue Multi",
        price: 145.00
      },
      {
        product_id: "12",
        brand: "Steve Madden",
        model: "fairlie",
        category: "Childrens",
        sunglass: false,
        color: "Tea Teal",
        price: 145.00
      },
      {
        product_id: "13",
        brand: "Tom Ford",
        model: "TF0844",
        category: "Womens",
        sunglass: true,
        color: "Shiny Light Brown",
        price: 415.00
      },
      {
        product_id: "14",
        brand: "Longchamp",
        model: "LO625S",
        category: "Womens",
        sunglass: true,
        color: "Marble Green",
        price: 145.00
      },
      {
        product_id: "15",
        brand: "Oakley",
        model: "OO9263",
        category: "Mens",
        sunglass: true,
        color: "Matte Black",
        price: 225.00
      },
      {
        product_id: "16",
        brand: "Oakley",
        model: "OO9444",
        category: "Mens",
        sunglass: true,
        color: "Polished Clear",
        price: 165.00
      },
     ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
