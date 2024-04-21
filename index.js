const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors());

const properties = [
  {
    id: 1,
    location: "Hyderabad",
    title: "Luxury villa",
    price: 8000000,
    image:
      "https://www.favouritehomes.com/wp-content/uploads/2021/12/luxury-villa.jpg",
  },
  {
    id: 2,
    location: "Bangalore",
    title: "Sunset villa",
    price: 10000000,
    image:
      "https://www.windrushalliance.com/files/property/New-Portobello-Village-AUGUST-2023-13-64e7577835ba7.2.jpg",
  },
  {
    id: 3,
    location: "Mumbai",
    title: "Cloud villa",
    price: 9000000,
    image:
      "https://img.directbooking.ro/getimage.ashx?w=880&h=660&file=682b5ae2-a0b3-4350-a1cc-fda6e8f6c612.jpg",
  },
  {
    id: 4,
    location: "Hyderabad",
    title: "Sky villas",
    price: 11000000,
    image: "https://ssl.cdn-redfin.com/photo/48/bigphoto/837/190012837_1.jpg",
  },
  {
    id: 5,
    location: "Delhi",
    title: "Luxe Retreat",
    price: 12000000,
    image: "https://apollo.olx.in/v1/files/lmvyqv450y1j1-IN/image;s=360x0",
  },
  {
    id: 6,
    location: "Chennai",
    title: "rainbow",
    price: 10000000,
    image:
      "https://www.elitehavens.com/magazine/wp-content/uploads/2021/05/Header.jpg",
  },
  {
    id: 7,
    location: "Pune",
    title: "Mount villa",
    price: 9000000,
    image:
      "https://assets.easybroker.com/property_images/3165204/50663311/EB-LD5204.jpg?version=1659637609",
  },
  {
    id: 8,
    location: "Kolkata",
    title: "Venz villa",
    price: 13000000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oh7TKdDTW_8Ed4Tny92oZEtSzf_7n1JJtVmfjq86fQ&s",
  },
];

app.get("/properties", (req, res) => {
  res.json(properties);
});

app.listen(PORT, () => {
  console.log("Server running on port 3003");
});
