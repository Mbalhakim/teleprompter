import { io } from 'socket.io-client';

class SocketioService {
    socket;
    constructor() {}

    setupSocketConnection() {



        this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);

        this.socket.emit('my message', 'Hello there from Vue.');

        this.socket.on('from server', (msg) => {
            console.log(msg)
        })

    }
    connected() {
        this.isConnected = true;
    }
    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }
}

export default new SocketioService();