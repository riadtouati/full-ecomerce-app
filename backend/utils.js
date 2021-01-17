import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name:user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    }, 
    process.env.TOKEN_SECRET || 'tokentest',
    {
        expiresIn: '30d',
    } 
    );
};