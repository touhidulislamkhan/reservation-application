import mongoose from 'mongoose';

const connectDb = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log('connected to db');
	} catch (error) {
		throw error;
	}
};

export default connectDb;
