import { Request, Response, NextFunction } from 'express';
import { Exception } from '../exception/exception';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Exception) {        
        res.status(err.statusCode).json({ message: err.message });
    } else {
        console.error(err.stack);
        res.status(500).json({ message: 'Something went wrong' });
    }
    next(err);
};

export default errorHandler;
