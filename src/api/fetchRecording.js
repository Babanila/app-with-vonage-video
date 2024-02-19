import axios from 'axios';
const API_URL = `${process.env.REACT_APP_API_SERVER_URL}/archive`;

const fetchRecordings = (sessionId) => {
  return axios.get(`${API_URL}/${sessionId}`);
};

const startRecording = (sessionId) => {
  return axios.post(`${API_URL}/start`, {
    session_id: sessionId,
  });
};

const stopRecording = (archiveId) => {
  return axios.get(`${API_URL}/stop/${archiveId}`);
};

export { fetchRecordings, startRecording, stopRecording };
