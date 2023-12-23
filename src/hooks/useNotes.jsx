import { useEffect, useState } from "react";

const LOCALSTORAGE_KEY = "notes.list";

const useNotes = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		if (localStorage.getItem(LOCALSTORAGE_KEY)) {
			setNotes(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
		}
	}, []);

	useEffect(() => {
		if (!notes || notes.length == 0) return;
		localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(notes));
	}, [notes]);

	const add = (title, message) => {
		const id = Date.now();
		const noteObject = { id, title, message };
		setNotes([noteObject, ...notes]);
	};

	const remove = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return {
		notes,
		add,
		remove,
	};
};

export default useNotes;
