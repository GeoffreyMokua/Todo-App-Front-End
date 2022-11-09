import OptionProvider from "../services/OptionProvider.js"
import ModalProvider from "../services/ModalProvider.js"
export default function Root({children}) {

    return (
        <div className='app-container container-fluid m-0 row px-2 mx-0'>
            <OptionProvider>
                <ModalProvider>
                    {children}
                </ModalProvider>
            </OptionProvider>
        </div>
    )
}