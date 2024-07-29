import { io } from "socket.io-client";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const socket = io(apiBaseUrl, {
  reconnection: false,
});

export default socket;
