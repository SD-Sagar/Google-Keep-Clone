import React, { useCallback, useMemo, useState } from 'react'
import '../assets/styles/trash.css'
import NoteComponent from './components/NoteComponent'
import { useSelector } from 'react-redux';
import EditPopup from './components/EditPopup';
const Trash = () => {
  const {notes = [],searchQuery} = useSelector((state)=>state.notes);
 const [info, setInfo] = useState({
    editPopup: false,
    selectedNote: null,
  });
 
  const openEditPopup = useCallback(
    (value) => {
      setInfo((prev) => ({ ...prev, editPopup: true, selectedNote: value }));
    },
    []
  );
 
  const closeEditPopup = useCallback(() => {
    setInfo((prev) => ({ ...prev, editPopup: false, selectedNote: null }));
  }, []);
 
  const trashdata = useMemo(() => {
    return notes?.filter(
      (ele) =>
        ele?.label === "trash" &&
        ele?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase())
    );
  }, [notes, searchQuery]);
 
  return (
    <div className="notesrendercontainer">
      {trashdata?.map((ele, index) => (
        <NoteComponent
          key={index}
          data={ele}
          source={"trash"}
          onClick={openEditPopup}
        />
      ))}
      <EditPopup
        open={info?.editPopup}
        onClose={closeEditPopup}
        selectedNote={info?.selectedNote}
      />
    </div>
  );
 };
 export default Trash;
