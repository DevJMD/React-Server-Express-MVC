import Mongoose from 'mongoose';
import FindOrCreate from 'mongoose-findorcreate';
import PassportLocalMongoose from 'passport-local-mongoose';

const Schema = Mongoose.Schema;

const UserSchema = new Schema({});

UserSchema.plugin(FindOrCreate);
UserSchema.plugin(PassportLocalMongoose);

const User = Mongoose.model('User', UserSchema);

export default User;
