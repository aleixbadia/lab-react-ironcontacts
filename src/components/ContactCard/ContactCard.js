import React from "react";

function ContactCard(props) {
  return (
      <tr key={props.contact.id}>
        <td>
          <img src={props.contact.pictureUrl} alt={props.contact.name} width="50px" />
        </td>
        <td>{props.contact.name}</td>
        <td>{props.contact.popularity.toFixed(1)}</td>
        <td>
          <button
            onClick={() => {
              props.delete(props.contact.id);
            }}
          >
            Delete contact
          </button>
        </td>
      </tr>
  );
}

export default ContactCard;
