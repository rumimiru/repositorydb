const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/schema-demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database Connected'))
.catch(err => console.log(err));

// Define Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Create Model
const User = mongoose.model('User', userSchema);

// Insert Data
const createUser = async () => {
    try {
        const user = new User({
            name: "John Doe",
            email: "john@example.com",
            age: 25
        });

        await user.save();
        console.log("User saved successfully");

        // Fetch Data
        const users = await User.find();
        console.log("All Users:", users);

    } catch (error) {
        console.log(error);
    } finally {
        mongoose.connection.close();
    }
};

createUser();
