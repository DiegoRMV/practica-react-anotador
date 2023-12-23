import { useContext } from "react";
import Note from "./Note";
import { NotesContext } from "../../contexts/NotesContext";
import styles from "./NoteList.module.css"

const NoteList = () => {
	const { notes} = useContext(NotesContext);
	return (
		<div>
			<p className={styles.countNotes}>Tienes {notes.length} notas</p>
			{notes.map((e) => (
				<Note key={e.id} id={e.id} title={e.title} message={e.message} />
			))}
		</div>
	);
};

export default NoteList;
