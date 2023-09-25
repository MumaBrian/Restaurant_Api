export declare class NodeMailer {
    private initiateTransport;
    sendEmail(to: string, htmlContent: string): Promise<{
        emailSent: boolean;
    }>;
}
