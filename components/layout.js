import Header from './header'
export default ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <footer>
                footer
            </footer>
        </div>
    )
}