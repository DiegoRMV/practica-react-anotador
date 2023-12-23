import "./App.css";
import NoteForm from "./components/NoteForm/NoteForm";

import NoteList from "./components/NoteList/NoteList";
import { NotesProvider } from "./contexts/NotesContext";

function App() {
	return (
		<div>
			<NotesProvider>
				<NoteForm />
				<NoteList />
			</NotesProvider>
		</div>
	);
}

export default App;
