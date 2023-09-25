import * as mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    address: string;
    title: string;
    created_at: Date;
    updated_at: Date;
    lat: number;
    lng: number;
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        isValid?: {};
    };
    landmark: string;
    house: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    address: string;
    title: string;
    created_at: Date;
    updated_at: Date;
    lat: number;
    lng: number;
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        isValid?: {};
    };
    landmark: string;
    house: string;
}>>;
export default _default;
