export interface AppError extends Error{
    statusCode: number;
}

export class InternalServerError extends Error implements AppError {
    statusCode: number;

    constructor(message: string = 'Internal Server Error') {
        super(message);
        this.statusCode = 500;
        this.name = 'InternalServerError';
    }
}

export class NotFoundError extends Error implements AppError {
    statusCode: number;

    constructor(message: string = 'Not Found') {
        super(message);
        this.statusCode = 404;
        this.name = 'NotFoundError';
    }
}


export class BadRequestError extends Error implements AppError {
    statusCode: number;

    constructor(message: string = 'Bad Request') {
        super(message);
        this.statusCode = 400;
        this.name = 'BadRequestError';
    }
}