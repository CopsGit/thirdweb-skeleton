import "./styles/Home.css";
import {useStateContext} from "./context";

export default function Home() {
    const {connect, disconnect, address} = useStateContext();

    return (
        <div>
            <button
                onClick={() => {address ? disconnect() : connect()}}
            >
                {address ? 'Disconnect' : 'Connect'}
            </button>
            <p>
                {address}
            </p>
        </div>
    );
}
