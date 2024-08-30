export class CreateError extends Error {
    constructor(message?: string) {
        super(message || "Error at create");
    }
}