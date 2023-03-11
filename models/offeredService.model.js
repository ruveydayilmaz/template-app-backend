const {Schema, model} = require('mongoose');

const OfferedServiceSchema = new Schema(
    {
        provider: {
            type: Schema.Types.ObjectId, 
            ref: 'Shop',
            required: true,
        },
        type: {
            type: String
        },
        name: {
            type: String,
            required: true,
        },
        cost: {
            type: Number,
            default: 0,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        image: {
            type: String
        }
    },
    {
        timestamps: true
    },
);

OfferedServiceSchema.methods = {

};


const OfferedService = model('OfferedService', OfferedServiceSchema);

module.exports = OfferedService;