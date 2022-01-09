/* /context/AppContext.js */

import React from 'react';
// create auth context with default value

// set backup default for isAuthenticated if none is provided in Provider
const AppContext = React.createContext({
	isAuthenticated: true,
	cart: { items: [], total: 0 },
	addItem: () => {},
	removeItem: () => {},
	user: false,
	setUser: () => {},
});

export const AppContextProvider = (props) => {
	const [user, setUser] = React.useState(null);
	const [state, setState] = React.useState({ items: [], total: 0 });
	return (
		<AppContext.Provider
			value={{
				isAuthenticated: false,
				cart: state,
				addItem: (item) => {
					setState({
						items: {
							...state.items,
							item,
							[item.quantity]: item.quantity,
						},
						total: state.total + item.price,
					});
				},
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
