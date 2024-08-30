export class NotFoundError extends Error {
    constructor(message?: string) {
        super(message || "Error at creating");
    }
}