export default function Nav() {
  return (  
    <nav className="flex flex-row flex-wrap h-auto py-10 bg-black text-2xl text-white justify-between items-center" style={{textShadow: '0 0 1rem black'}} >
        <a className="navbar-brand ml-16" href="https://azella.io">Azella Financial Services</a>
        <div className="py-2">
            <ul className="flex flex-row flex-wrap justify-evenly align-center w-auto">
            <li className="mx-10">
                <a className="nav-link" href="https://azella.io">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="mx-10">
                <a className="nav-link" href="https://azella.io">Features</a>
            </li>
            <li className="mx-10">
                <a className="nav-link" href="https://azella.io">Pricing</a>
            </li>
            <li className="mx-10">
                <a className="nav-link disabled" href="https://azella.io">Contact</a>
            </li>
            </ul>
        </div>
    </nav>
    );
}
