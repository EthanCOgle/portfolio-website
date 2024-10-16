import React, { useState } from 'react';

function Items({ title, items, type }) {
  const [showItems, setShowItems] = useState(true);

  return (
    <section>
      <h2>{title}</h2>
      <button onClick={() => setShowItems(!showItems)}>
        {showItems ? `Hide ${title}` : `Show ${title}`}
      </button>
      {showItems && (
        <div>
          {items.map((item, index) => (
            <div key={index} style={{ marginTop: '10px', padding: '10px', border: '1px solid #ddd' }}>
              {type === 'project' && (
                <>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </>
              )}
              {type === 'experience' && (
                <>
                  <h3>{item.company}</h3>
                  <p><strong>{item.title}</strong></p>
                  <p>{item.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Items;
