import { toJSON, toObject } from "./konversi.js";

const user = { nama: "ucup", umur: 60 };

const string = toJSON(user);
console.log("JSON String:", string);

const objek= toObject(string);
console.log("Object:", objek);
