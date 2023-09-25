import * as mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    status: boolean;
    created_at: Date;
    updated_at: Date;
    banner: string;
    restaurant_id?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        isValid?: {};
    };
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    status: boolean;
    created_at: Date;
    updated_at: Date;
    banner: string;
    restaurant_id?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        isValid?: {};
    };
}>>;
export default _default;
