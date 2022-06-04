import {useEffect,useState} from 'react';
export const useLocalStorage=(itemName, initialValue)=> {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialValue);
    useEffect(() => {
      setTimeout(() => {
        try {
          const itemLocalStorage = localStorage.getItem(itemName);
          let itemParsed;
          if (!itemLocalStorage) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            itemParsed = initialValue;
          } else {
            itemParsed = JSON.parse(itemLocalStorage);
          }
          setItem(itemParsed);
          setLoading(false);
        } catch (err) {
          setError(err);
        }
      }, 5000);
    },[]);
  
    const saveItem = (newItem) => {
      try {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
      } catch (err) {
        setError(err);
      }
    };
    return { item, saveItem, loading, error };
  }
  