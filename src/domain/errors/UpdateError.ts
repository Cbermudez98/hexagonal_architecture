export class UpdateError extends Error {
    constructor(message?: string) {
        super(message || "Error at updating");
    }
}