import { defineStore } from "pinia";
import socket from "@/sockets";

export const useConnectionStore = defineStore("connection", () => {
  const isConnected = ref(false);
  const online = ref(0);

  const bindEvents = () => {
    socket.on("connect", () => {
      isConnected.value = true;
    });

    socket.on("activeTabs", (count: number) => {
      online.value = count;
    });

    socket.on("disconnect", () => {
      isConnected.value = false;
    });
  };

  return {
    online,
    isConnected,
    bindEvents,
  };
});
