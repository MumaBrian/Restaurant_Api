import * as mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    type: string;
    name: string;
    status: string;
    password: string;
    email: string;
    email_verified: boolean;
    verification_token: string;
    verification_token_time: Date;
    phone: string;
    created_at: Date;
    updated_at: Date;
    photo?: string;
    reset_password_token?: string;
    reset_password_token_time?: Date;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    type: string;
    name: string;
    status: string;
    password: string;
    email: string;
    email_verified: boolean;
    verification_token: string;
    verification_token_time: Date;
    phone: string;
    created_at: Date;
    updated_at: Date;
    photo?: string;
    reset_password_token?: string;
    reset_password_token_time?: Date;
}>>;
export default _default;
