const products = [
  {
    id: 1,
    vendor: "Entry",
    title: "Cleveland Pochette",
    price: {
      regular: 85,
      sale: 70,
    },
    images: {
      main: "/images/products/Fa_11a.jpg",
      hover: "/images/products/Fa_10a.jpg",
    },
    colors: [
      {
        name: "Pastel Brown",
        class: "bg_pastel-brown",
        img: "/images/products/stroller-baby-brown.jpg",
        active: true,
      },
      {
        name: "Black",
        class: "bg_dark",
        img: "/images/products/stroller-baby-black.jpg",
      },
    ],
  },
  {
    id: 2,
    vendor: "Entry",
    title: "Mens Leather Shoulder Small Bag",
    price: {
      regular: 17.3,
    },
    images: {
      main: "/images/products/Fa_31a.jpg",
      hover: "/images/products/Fa_32a.jpg",
    },
    colors: [
      {
        name: "Black",
        class: "bg_dark",
        img: "/images/products/stroller-baby-black3.jpg",
        active: true,
      },
      {
        name: "Pastel Brown",
        class: "bg_pastel-brown",
        img: "/images/products/stroller-baby-brown.jpg",
      },
      {
        name: "Pink",
        class: "bg_pink",
        img: "/images/products/stroller-baby-pink.jpg",
      },
    ],
  },
  {
    id: 3,
    vendor: "Entry",
    title: "Women's 3/4 Length Sleeve VNeck",
    price: {
      regular: 13.3,
    },
    images: {
      main: "/images/products/Fa_19a.jpg",
      hover: "/images/products/Fa_20a.jpg",
    },
    colors: [
      {
        name: "Black",
        class: "bg_dark",
        img: "/images/products/stroller-baby-black3.jpg",
        active: true,
      },
      {
        name: "Pastel Brown",
        class: "bg_pastel-brown",
        img: "/images/products/stroller-baby-brown.jpg",
      },
      {
        name: "Pink",
        class: "bg_pink",
        img: "/images/products/stroller-baby-pink.jpg",
      },
    ],
  },
  {
    id: 4,
    vendor: "Entry",
    title: "Mens Oversized T Shirts Business",
    price: {
      regular: 13.3,
    },
    images: {
      main: "/images/products/Fa_12a.jpg",
      hover: "/images/products/Fa_13a.jpg",
    },
    colors: [
      {
        name: "Black",
        class: "bg_dark",
        img: "/images/products/stroller-baby-black3.jpg",
        active: true,
      },
      {
        name: "Pastel Brown",
        class: "bg_pastel-brown",
        img: "/images/products/stroller-baby-brown.jpg",
      },
      {
        name: "Pink",
        class: "bg_pink",
        img: "/images/products/stroller-baby-pink.jpg",
      },
    ],
  },
  {
    id: 5,
    vendor: "Entry",
    title: "Womens Sweaters Casual Long",
    price: {
      regular: 13.3,
    },
    images: {
      main: "/images/products/Fa_23a.jpg",
      hover: "/images/products/Fa_24a.jpg",
    },
    colors: [
      {
        name: "Black",
        class: "bg_dark",
        img: "/images/products/stroller-baby-black3.jpg",
        active: true,
      },
      {
        name: "Pastel Brown",
        class: "bg_pastel-brown",
        img: "/images/products/stroller-baby-brown.jpg",
      },
      {
        name: "Pink",
        class: "bg_pink",
        img: "/images/products/stroller-baby-pink.jpg",
      },
    ],
  },
  {
    id: 6,
    vendor: "Entry",
    title: "Yekaty Women Cardigan 3/4 Sleeves",
    price: {
      regular: 17.3,
    },
    images: {
      main: "/images/products/Fa_29a.jpg",
      hover: "/images/products/Fa_30a.jpg",
    },
    colors: [
      {
        name: "Black",
        class: "bg_dark",
        img: "/images/products/stroller-baby-black3.jpg",
        active: true,
      },
      {
        name: "Pastel Brown",
        class: "bg_pastel-brown",
        img: "/images/products/stroller-baby-brown.jpg",
      },
      {
        name: "Pink",
        class: "bg_pink",
        img: "/images/products/stroller-baby-pink.jpg",
      },
    ],
  },
  {
    id: 7,
    vendor: "Entry",
    title: "Cleveland Pochette",
    price: {
      regular: 85,
      sale: 70,
    },
    images: {
      main: "/images/products/Fa_11a.jpg",
      hover: "/images/products/Fa_10a.jpg",
    },
    colors: [
      {
        name: "Pastel Brown",
        class: "bg_pastel-brown",
        img: "/images/products/stroller-baby-brown.jpg",
        active: true,
      },
      {
        name: "Black",
        class: "bg_dark",
        img: "/images/products/stroller-baby-black.jpg",
      },
    ],
  },
  {
    id: 8,
    vendor: "Entry",
    title: "Mens Leather Shoulder Small Bag",
    price: {
      regular: 17.3,
    },
    images: {
      main: "/images/products/Fa_31a.jpg",
      hover: "/images/products/Fa_32a.jpg",
    },
    colors: [
      {
        name: "Black",
        class: "bg_dark",
        img: "/images/products/stroller-baby-black3.jpg",
        active: true,
      },
      {
        name: "Pastel Brown",
        class: "bg_pastel-brown",
        img: "/images/products/stroller-baby-brown.jpg",
      },
      {
        name: "Pink",
        class: "bg_pink",
        img: "/images/products/stroller-baby-pink.jpg",
      },
    ],
  },
  {
    id: 9,
    vendor: "Entry",
    title: "Women's 3/4 Length Sleeve VNeck",
    price: {
      regular: 13.3,
    },
    images: {
      main: "/images/products/Fa_19a.jpg",
      hover: "/images/products/Fa_20a.jpg",
    },
    colors: [
      {
        name: "Black",
        class: "bg_dark",
        img: "/images/products/stroller-baby-black3.jpg",
        active: true,
      },
      {
        name: "Pastel Brown",
        class: "bg_pastel-brown",
        img: "/images/products/stroller-baby-brown.jpg",
      },
      {
        name: "Pink",
        class: "bg_pink",
        img: "/images/products/stroller-baby-pink.jpg",
      },
    ],
  },
  {
    id: 10,
    vendor: "Entry",
    title: "Mens Oversized T Shirts Business",
    price: {
      regular: 13.3,
    },
    images: {
      main: "/images/products/Fa_12a.jpg",
      hover: "/images/products/Fa_13a.jpg",
    },
    colors: [
      {
        name: "Black",
        class: "bg_dark",
        img: "/images/products/stroller-baby-black3.jpg",
        active: true,
      },
      {
        name: "Pastel Brown",
        class: "bg_pastel-brown",
        img: "/images/products/stroller-baby-brown.jpg",
      },
      {
        name: "Pink",
        class: "bg_pink",
        img: "/images/products/stroller-baby-pink.jpg",
      },
    ],
  },
];

export default products;
