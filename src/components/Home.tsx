

function Home() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="hover:text-gray-900 font-medium text-3xl font-elephant">
                    Shopp
                </div>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <div className="mr-5 uppercase font-medium">
                        Home
                    </div>
                    <div className="mr-5 uppercase font-medium">
                        Shop
                    </div>
                    <div className="mr-5 uppercase font-medium">
                        Contact
                    </div>
                    <button className="mr-5 uppercase font-medium">Sepet</button>
                </nav>
            </div>
        </header>
    )
}

export default Home;