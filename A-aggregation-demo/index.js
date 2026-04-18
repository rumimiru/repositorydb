const mongoose = require('mongoose');

// 🔹 Connect to MongoDB (local or Atlas)
mongoose.connect("mongodb://username:<secretpasssss>@mongo.db")
.then(() => console.log("Database Connected"))
.catch(err => console.log(err));

// 🔹 Schema
const salesSchema = new mongoose.Schema({
    productName: String,
    category: String,
    price: Number,
    quantity: Number
});

// 🔹 Model
const Sale = mongoose.model('Sale', salesSchema);

// 🔹 Insert Sample Data
const insertData = async () => {
    await Sale.deleteMany(); // clear old data

    await Sale.insertMany([
        { productName: "Laptop", category: "Electronics", price: 50000, quantity: 2 },
        { productName: "Phone", category: "Electronics", price: 20000, quantity: 5 },
        { productName: "TV", category: "Electronics", price: 30000, quantity: 1 },
        { productName: "Shoes", category: "Fashion", price: 2000, quantity: 10 },
        { productName: "Shirt", category: "Fashion", price: 1000, quantity: 8 }
    ]);

    console.log("Sample data inserted");
};

// 🔹 Aggregation Pipeline
const runAggregation = async () => {
    const result = await Sale.aggregate([
        // 1. MATCH
        { $match: { category: "Electronics" } },

        // 2. GROUP
        {
            $group: {
                _id: "$category",
                totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
                count: { $sum: 1 }
            }
        },

        // 3. PROJECT
        {
            $project: {
                category: "$_id",
                totalRevenue: 1,
                count: 1,
                _id: 0
            }
        },

        // 4. SORT
        { $sort: { totalRevenue: -1 } }
    ]);

    console.log("Aggregation Result:", result);
};

// 🔹 Run Everything
const run = async () => {
    await insertData();
    await runAggregation();
    mongoose.connection.close();
};

run();
