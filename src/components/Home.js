// import '../styles/home.css'
import Header from '../layout/Header.js'
import SideBar from '../layout/SideBar.js'
import TaskOption from './TaskOption.js'
import TaskContainer from './TaskContainer.js'
import TaskLayout from './TaskLayout.js'
import TaskCard from './TaskCard.js'
import Root from '../layout/Root.js'
import Container from '../layout/Container.js'
import Footer from '../layout/Footer.js'


export default function Home() {

    return (
        <>
            <Header />
            <Root>
                <SideBar />
                <Container>
                    <TaskOption />
                    <TaskContainer>
                        <TaskLayout itemComponent={TaskCard} />
                    </TaskContainer>
                </Container>
            </Root>
            <Footer />
        </>
    );
}
