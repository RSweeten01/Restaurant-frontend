/* /context/AppContext.js */

import React from 'react';
// create auth context with default value

// set backup default for isAuthenticated if none is provided in Provider
const AppContext = React.createContext({
	isAuthenticated: false,
	cart: { items: [], total: 0 },
	addItem: () => {},
	removeItem: () => {},
	user: false,
	setUser: () => {},
});

export const AppContextProvider = (props) => {
	const [user, setUser] = React.useState(null);
	const [state, setState] = React.useState({ cart: AppContext.cart });
	return (
		<AppContext.Provider
			value={{
				isAuthenticated: false,
				cart: { items: [], total: 0 },
				addItem: () => {},
				removeItem: () => {},
				user: user,
				setUser: setUser,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppContext;
