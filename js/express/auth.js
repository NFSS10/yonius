import { ensurePermissions } from "../base";

export const ensureExpress = (token, { skipAuth = false } = {}) => {
    return (req, res, next) => {
        if (skipAuth) next();
        ensurePermissions(token, req).catch(next).then(next);
    };
};

export default ensureExpress;
