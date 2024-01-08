import { useState } from 'react';
import { UserContext } from './UserContext';

// const user = {
// 	id: 1,
// 	name: 'Marco',
// 	email: 'marco.salazar.2014.com@gmail.com'
// };

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState();

	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
