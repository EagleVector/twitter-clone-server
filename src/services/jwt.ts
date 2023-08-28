import { User } from '@prisma/client';
import JWT from 'jsonwebtoken';
import { prismaClient } from '../clients/db';

const JWT_SECRET = 'abc123';

class JWTService {
	public static generateTokenForUser(user: User) {
		const payload = {
			id: user?.id,
			email: user?.email
		};
		const token = JWT.sign(payload, JWT_SECRET);
		return token;
	}
}

export default JWTService;
