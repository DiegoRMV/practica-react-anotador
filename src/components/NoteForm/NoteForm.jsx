import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import styles from "./NoteForm.module.css";
import { useContext } from "react";
import { NotesContext } from "../../contexts/NotesContext";

const schema = z.object({
	title: z.string().min(1, { message: "Required" }),
	message: z.string().min(1, { message: "Required" }),
});

const NoteForm = () => {
	const { add } = useContext(NotesContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(schema),
	});

	const handleSubmitForm = (date) => {
		add(date.title, date.message);
		reset();
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
			<label htmlFor="" className={styles.label}>
				Title
			</label>
			<input className={styles.inputTitle} {...register("title")} />
			{errors.title?.message && (
				<p className={styles.error}>{errors.title?.message}</p>
			)}
			<label htmlFor="" className={styles.label}>
				Message
			</label>
			<textarea className={styles.inputMessage} {...register("message")} />
			{errors.message?.message && (
				<p className={styles.error}>{errors.message?.message}</p>
			)}
			<button className={styles.button} type="submit">
				Guardar
			</button>
		</form>
	);
};

export default NoteForm;
