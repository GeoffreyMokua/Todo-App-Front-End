import '../css/App.css'
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-light shadow-sm">
            <a className="navbar-brand " href="#"><h2 className='text-success'>Todo App</h2></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                <li className="nav-item active">
                    <a className="nav-link text-success" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-success" href="#">About</a>
                </li>
                

                <li className="nav-item">
                    <a className="nav-link disabled" href="#">User Profile</a>
                </li>
                </ul>

            </div>
            </nav>

    );
}
