const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        },
        thoughts: {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        },
        friends: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        // prevents virtuals from creating duplicate of _id as `id`
        id: false
    }
);

UserSchema.virtual("friendcount").get(function () {
    return this.friends.lenght;
});

const User = model("User", UserSchema);

module.exports = User;