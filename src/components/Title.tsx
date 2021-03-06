import React, { useContext } from "react";
import classes from "./Title.module.css";
import FancyButton from "./FancyButton";
import NoteContext from "../contexts/NoteContext";
import { debounce } from "src/utils/debounce";

interface TitleProps {
  prettify: () => void;
}

const Title: React.FC<TitleProps> = (props) => {
  const { title, setTitle, updateNote, noteId, content } = useContext(
    NoteContext
  );

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.currentTarget.value;
    setTitle(newTitle);
    debounce("update title", () => {
      updateNote(noteId, newTitle, content);
    });
  };

  return (
    <div className={classes.Title}>
      <section style={{ display: "flex", padding: 10, paddingBottom: 0 }}>
        <div style={{ flexGrow: 1, display: "flex" }}>
          <input
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <FancyButton title="Prettify" onClick={props.prettify} />
      </section>
      <section></section>
    </div>
  );
};

export default Title;
