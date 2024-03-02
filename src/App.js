import './App.css';
import DraggableList from 'react-draggable-list';
import { useEffect, useRef, useState } from 'react';
import ListItem from './component/ListItem';

const DEFAULT_DATA = [
  { id: '1', name: 'User 1' },
  { id: '2', name: 'User 2' },
  { id: '3', name: 'User 3' }
];

function App() {

  const [usersList, setUsersList] = useState(DEFAULT_DATA);
  const containerRef = useRef();

  useEffect(() => {
    const userData = localStorage.getItem('users');
    if (userData) {
      setUsersList(JSON.parse(userData));
    } else {
      setUsersList(DEFAULT_DATA);
      localStorage.setItem('users', JSON.stringify(DEFAULT_DATA));
    }
  }, []);

  const onListChange = (newList) => {
    setUsersList(newList);
    localStorage.setItem('users', JSON.stringify(newList));    
  };

  return (
    <div className="App">
     <DraggableList
          itemKey="id"
          template={ListItem}
          list={usersList}
          onMoveEnd={(newList) => onListChange(newList)}
          container={() => containerRef.current}
        />
    </div>
  );
}

export default App;
