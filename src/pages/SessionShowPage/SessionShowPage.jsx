import IdvSessionCard from "../../components/IdvSessionCard/IdvSessionCard";
import SessionEditForm from "../../components/SessionEditForm/SessionEditForm";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as sessionService from "../../utilities/session-service";
export default function SessionShowPage() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("selectedId");

  async function getOneItem(selectedId) {
    try {
      const item = await sessionService.getOneItem(selectedId);
      console.log("SSP function ", item);
      setSelectedItem(item);
    } catch (error) {
      console.log(error);
    }
  }

  async function _handleDelete(selectedId) {
    try {
      const newItemList = await sessionService.deleteOneItem(selectedId);
      navigate("/sessions");
    } catch (error) {
      console.log(error);
    }
  }

  function _handleSaved(item) {
    setSelectedItem(item);
  }

  function toggleEdit() {
    setIsEditing(!isEditing);
  }

  useEffect(() => {
    getOneItem(selectedId);
  }, []);
  return (
    <>
      {isEditing ? (
        <SessionEditForm
          selectedItem={selectedItem}
          toggleEdit={toggleEdit}
          onSaved={setSelectedItem}
        />
      ) : (
        <IdvSessionCard
          selectedItem={selectedItem}
          _handleDelete={_handleDelete}
          toggleEdit={toggleEdit}
          selectedId={selectedId}
        />
      )}
    </>
  );
}
