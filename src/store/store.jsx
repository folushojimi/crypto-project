import { SelectedCurrencyProvider } from "./selectedCurrencyContext";

export default function Store(props){
    return (
        <SelectedCurrencyProvider>
            {props.children}
        </SelectedCurrencyProvider>
    )  
}

 