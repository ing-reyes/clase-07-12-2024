export class ManagerError extends Error {
    constructor(
        public statusCode: number,
        public message: string,
    ) {
        super(message);
    }

    static badRequest(message: string) {
        return new ManagerError(400, message);
    }

    static notFound(message: string) {
        return new ManagerError(404, message);
    }
}