import * as mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    location: any;
    address: string;
    name: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        isValid?: {};
    };
    city_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        isValid?: {};
    };
    cover: string;
    cuisines: any[];
    openTime: string;
    closeTime: string;
    price: number;
    delivery_time: number;
    isClose: boolean;
    rating: number;
    totalRating: number;
    description?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    location: any;
    address: string;
    name: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        isValid?: {};
    };
    city_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        isValid?: {};
    };
    cover: string;
    cuisines: any[];
    openTime: string;
    closeTime: string;
    price: number;
    delivery_time: number;
    isClose: boolean;
    rating: number;
    totalRating: number;
    description?: string;
}>>;
export default _default;
