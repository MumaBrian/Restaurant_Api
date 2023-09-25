import * as mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    total: number;
    address: any;
    order: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    restaurant_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        isValid?: {};
    };
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        isValid?: {};
    };
    grandTotal: number;
    deliveryCharge: number;
    payment_status: boolean;
    payment_mode: string;
    instruction?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    total: number;
    address: any;
    order: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    restaurant_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        isValid?: {};
    };
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        isValid?: {};
    };
    grandTotal: number;
    deliveryCharge: number;
    payment_status: boolean;
    payment_mode: string;
    instruction?: string;
}>>;
export default _default;
