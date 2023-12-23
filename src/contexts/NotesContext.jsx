import { createContext } from "react";
import useNotes from "../hooks/useNotes";
import PropTypes from "prop-types";

export const NotesContext = createContext();

export function NotesProvider({ children }) {
	const { notes, add, remove } = useNotes();
	return (
		<NotesContext.Provider value={{ notes, add, remove }}>
			{children}
		</NotesContext.Provider>
	);
}

NotesProvider.propTypes = {
	children: PropTypes.object,
};
