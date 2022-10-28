import React from 'react';
import './App.css';

const App = () => {
  const [myList, setMyList] = React.useState([]);

  React.useEffect(() => {
    let mounted = true;

    if (mounted) {
      setMyList(['item 1', 'item 2', 'item 3']);
    }

    return () => {
      mounted = false;
    };
  }, []);

  const handleAddBelow = (index) => {
    const indexAfter = index + 1;

    // new item - we will use the indexAfter as the element
    // added plus 1 as we have started our item name with 1
    // const newItem = `item ${indexAfter + 1}`;

    // sample new item
    const newItem = 'new item';

    // make a copy of list
    const newList = [...myList];
    // add new item after current index and do not delete an item
    newList.splice(indexAfter, 0, newItem);
    // update list
    setMyList(newList);
  };

  const handleDelete = (index) => {
    // make a copy of list
    const listCopy = [...myList];
    // remove 1 item using the index
    listCopy.splice(index, 1);
    // update list
    setMyList(listCopy);
  };

  return (
    <div className="App">
      <header className="App-header">Task list</header>
      <div className="App-body">
        <div className="App-list">
          <ul>
            {myList.map((item, index) => {
              return (
                <li className="list-item" key={`item-${index}`}>
                  <div className="list-label">{item}</div>
                  <div className="list-btn">
                    <button onClick={() => handleAddBelow(index)}>
                      Add next
                    </button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
