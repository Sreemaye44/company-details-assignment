import React, { useState } from 'react';

const Test = () => {
    const [isChecked, setIsChecked] = useState(false);
  const [isFormEnabled, setIsFormEnabled] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
    setIsFormEnabled(!isFormEnabled);
  };
    
    return (
        <div>
        <label>
          <input type="checkbox" onClick={handleCheckboxClick} />
          Enable Form
        </label>
        <form disabled={isChecked}>
          <label disabled={!isChecked}>
            Name:
            <input type="text" disabled={!isChecked} />
          </label>
          <label disabled={!isChecked}>
            Email:
            <input type="email" disabled={!isChecked} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
};

export default Test;