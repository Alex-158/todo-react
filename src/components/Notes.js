import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const Notes = ({ notes, onRemove }) => {
  return (
    <TransitionGroup component="ul" className="list-group list-group-flush">
      {notes.map((note) => (
        <CSSTransition key={note.id} classNames={"note"} timeout={1000}>
          <li className="list-group-item note">
            <strong>
              {note.title}
              <small>{note.date}</small>
            </strong>

            <button
              onClick={() => onRemove(note.id)}
              type="button"
              className="btn btn-outline-danger btn-sm"
            >
              &times;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
