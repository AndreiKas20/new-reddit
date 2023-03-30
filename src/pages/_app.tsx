import type {AppProps} from 'next/app'
import {store} from "@/store/store";
import {Provider} from "react-redux";
import '/src/styles/normalize.css'
import '/src/styles/colors.global.css'
import '/src/styles/main.global.css'

export default function App({Component, pageProps}: AppProps) {

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>)
}
