import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  query,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { app, db } from "../firebase/firebase";
import { useEffect, useState, useCallback } from "react";
import MainLayout from "../components/MainLayout";
import useWindowSize from "../components/windowSize";

import { Button, TextField, Modal, Box, Snackbar, Alert } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { DataGrid } from "@mui/x-data-grid";

const gridColumns = [
  {
    field: "rank",
    headerName: "Rank",
    type: "number",
    width: 100,
    editable: true,
  },
  {
    field: "name",
    headerName: "Name",
    width: 400,
    editable: true,
  },
];
const gridRows = [
  { id: "001", name: "Dylan Payne", rank: 1 },
  { id: "002", name: "Mia Karsten", rank: 2 },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LoggedIn = () => {
  const [addPlayerOpen, setAddPlayerOpen] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);
  const [name, setName] = useState("");
  const [rank, setRank] = useState(null);

  const addPlayer = async () => {
    setName("");
    setRank(null);
    setAddLoading(true);
    const docRef = await addDoc(collection(db, "ladder"), {
      name: name,
      rank: parseInt(rank),
    });
    console.log(docRef.id);
    setAddLoading(false);
    setAddSuccess(true);
    setRefresh(refresh + 1);
  };

  const handleSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAddSuccess(false);
  };

  // Getting players
  const [refresh, setRefresh] = useState(0);
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const tempPlayers = [];
    const q = query(collection(db, "ladder"));
    const getPlayers = async () => {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        tempPlayers.push({
          id: doc.id,
          name: doc.data().name,
          rank: doc.data().rank,
        });
      });
      await setPlayers(tempPlayers);
    };
    getPlayers();
  }, [refresh]);
  useEffect(() => {
    console.log(players);
  }, [players]);

  // Editing rows
  const [editRowsModel, setEditRowsModel] = useState({});
  const handleEditRowsModelChange = useCallback(
    (model) => {
      const editedIds = JSON.stringify(editRowsModel).substr(2, 20);
      const rawRankValue = JSON.stringify(editRowsModel).substr(41);
      const rawNameValue = JSON.stringify(editRowsModel).substr(42);
      const doneNameValue = rawNameValue.substr(0, rawNameValue.length - 4);
      const doneRankValue = rawRankValue.substr(0, rawRankValue.length - 3);
      const valueType = JSON.stringify(editRowsModel)[26];
      console.log(editRowsModel);
      console.log(doneRankValue);
      console.log(doneNameValue);

      const updatePlayer = async () => {
        if (valueType === "n") {
          // alert("name");
          console.log(editedIds);
          const ref = doc(db, "ladder", editedIds);
          await updateDoc(ref, {
            name: doneNameValue,
          });
        } else if (valueType === "r") {
          const ref = doc(db, "ladder", editedIds);
          await updateDoc(ref, {
            rank: parseInt(doneRankValue),
          });
        }
      };
      updatePlayer();

      setEditRowsModel(model);
    },
    [editRowsModel]
  );

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // border: "1px solid red",
        marginTop: 25,
      }}
    >
      <Button onClick={() => setAddPlayerOpen(true)} color="error">
        Add Player
      </Button>
      <Modal
        open={addPlayerOpen}
        onClose={() => setAddPlayerOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            label="Name"
            size="small"
            margin="normal"
            fullWidth
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            label="Ranking"
            size="small"
            margin="normal"
            fullWidth
            type="number"
            onChange={(e) => setRank(e.target.value)}
          />
          <LoadingButton
            variant="contained"
            color="error"
            fullWidth
            style={{ marginTop: 20 }}
            onClick={() => {
              addPlayer();
            }}
            loading={addLoading}
          >
            Add
          </LoadingButton>
        </Box>
      </Modal>
      <Snackbar
        open={addSuccess}
        autoHideDuration={6000}
        onClose={handleSuccessClose}
        message="Note archived"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSuccessClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Player Successfully Added
        </Alert>
      </Snackbar>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 1000,
          width: 500,
        }}
      >
        <DataGrid
          rows={players}
          columns={gridColumns}
          pageSize={100}
          editRowsModel={editRowsModel}
          onEditRowsModelChange={handleEditRowsModelChange}
        />
      </div>
    </div>
  );
};

const NotLoggedInDesktop = () => {
  // Getting names
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const tempPlayers = [];
    const q = query(collection(db, "ladder"));
    const getPlayers = async () => {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        tempPlayers.push({
          id: doc.id,
          name: doc.data().name,
          rank: doc.data().rank,
        });
      });
      tempPlayers.sort((a, b) => parseInt(a.rank) - parseInt(b.rank));
      await setPlayers(tempPlayers);
    };
    getPlayers();
  }, []);
  useEffect(() => {
    console.log(players);
  }, [players]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // border: "1px solid red",
        marginTop: 55,
      }}
    >
      <div
        style={{
          clipPath: "polygon(50% 0%, 100% 10%, 100% 100%, 0 100%, 0 10%)",
          width: "40%",
          // height: 500,
          backgroundColor: "darkgray",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ color: "white", marginTop: 50, fontSize: 20 }}>
          <h1>Club Ladder</h1>
        </div>
        <div
          style={{
            backgroundColor: "gray",
            width: "90%",
            marginBottom: "5%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <table style={{ width: "60%", color: "white" }}>
            <tbody>
              {players.map((player) => {
                return (
                  <tr key={player.id}>
                    <td
                      style={{
                        // border: "1px solid red",
                        width: "20%",
                        textAlign: "end",
                      }}
                    >
                      <p style={{ fontFamily: "bungee" }}>{player.rank}</p>
                    </td>
                    <td
                      style={{
                        // border: "1px solid red",
                        width: "80%",
                        textAlign: "center",
                      }}
                    >
                      <p style={{ fontFamily: "bungee" }}>{player.name}</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const NotLoggedInMobile = () => {
  // Getting names
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const tempPlayers = [];
    const q = query(collection(db, "ladder"));
    const getPlayers = async () => {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        tempPlayers.push({
          id: doc.id,
          name: doc.data().name,
          rank: doc.data().rank,
        });
      });
      tempPlayers.sort((a, b) => parseInt(a.rank) - parseInt(b.rank));
      await setPlayers(tempPlayers);
    };
    getPlayers();
  }, []);
  useEffect(() => {
    console.log(players);
  }, [players]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // border: "1px solid red",
        marginTop: 55,
      }}
    >
      <div
        style={{
          clipPath: "polygon(50% 0%, 100% 10%, 100% 100%, 0 100%, 0 10%)",
          width: "90%",
          // height: 500,
          backgroundColor: "darkgray",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ color: "white", marginTop: 50, fontSize: 20 }}>
          <h1>Club Ladder</h1>
        </div>
        <div
          style={{
            backgroundColor: "gray",
            width: "90%",
            marginBottom: "5%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <table style={{ width: "90%", color: "white" }}>
            <tbody>
              {players.map((player) => {
                return (
                  <tr key={player.id}>
                    <td
                      style={{
                        // border: "1px solid red",
                        width: "20%",
                        textAlign: "end",
                      }}
                    >
                      <p style={{ fontFamily: "bungee" }}>{player.rank}</p>
                    </td>
                    <td
                      style={{
                        // border: "1px solid red",
                        width: "80%",
                        textAlign: "center",
                      }}
                    >
                      <p style={{ fontFamily: "bungee" }}>{player.name}</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const DesktopLadder = () => {
  const auth = getAuth();
  const [loggedIn, setLoggenIn] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("logged in");
      const uid = user.uid;
      setLoggenIn(true);
    }
  });

  return <div>{loggedIn ? <LoggedIn /> : <NotLoggedInDesktop />}</div>;
};

const Ladder = () => {
  const size = useWindowSize();
  return (
    <MainLayout>
      {size.width > 1000 ? <DesktopLadder /> : <NotLoggedInMobile />}
    </MainLayout>
  );
};

export default Ladder;
