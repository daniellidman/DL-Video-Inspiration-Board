'use client';

import { useState } from 'react';

export default function ReactForm() {
  const [formValues, setFormValues] = useState([
    { description: '', quantity: 1, textInput: '', date: '' },
  ]);

  function handleSubmit(e) {
    e.preventDefault();

    // ERROR CATCHING
    if (!formValues.description) return;

    const newItem = {
      description: formValues.description,
      quantity: formValues.quantity,
      textInput: formValues.textInput,
      date: formValues.date,
      id: Date.now(),
    };

    // FORM SUBMIT FUNCTION
    console.log(newItem);

    // RESET FORM
    setFormValues({ description: '', quantity: 1, textInput: '', date: '' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>SELECT</p>
      <label htmlFor="quantity">Quantity</label>
      <select
        name="quantity"
        id="quantity"
        value={formValues.quantity}
        defaultValue="2"
        onChange={(e) =>
          setFormValues({ ...formValues, quantity: Number(e.target.value) })
        }
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <p>TEXT AREA</p>
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        value={formValues.description}
        onChange={(e) =>
          setFormValues({ ...formValues, description: e.target.value })
        }
      ></textarea>
      <p>INPUT</p>
      <label htmlFor="textInput">textInput</label>
      <input
        name="textInput"
        id="textInput"
        type="text"
        placeholder="Item..."
        value={formValues.textInput || ''}
        onChange={(e) =>
          setFormValues({ ...formValues, textInput: e.target.value })
        }
      />
      <p>DATE</p>
      <input
        name="date"
        id="date"
        type="date"
        value={formValues.date || ''}
        onChange={(e) => setFormValues({ ...formValues, date: e.target.value })}
      />

      <button>Add</button>
    </form>
  );
}
