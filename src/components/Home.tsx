import Footer from "./Footer";
import Header from "./Header";
import { GrFavorite } from 'react-icons/gr';
import { useStore } from '../states/store';


function Home() {

    const homeState = useStore((state) => state.homeState)
    const handleLikeClick = useStore((state) => state.handleLikeClick)
    const setFavorite = useStore((state) => state.setFavorite)


    return (
        <div>
            <Header />
            <section className="text-gray-600 body-font bg-gray-200">
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Lorem Ipsum</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {homeState.map((item) => (
                            <div key={item.id} className="lg:w-1/3 sm:w-1/2 p-4">
                                <div className="flex relative">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={item.img} />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer">

                                        <button onClick={() => {
                                            handleLikeClick(item.name, item.price, item.img, item.id);
                                            setFavorite(item.id, !item.isFavorite);
                                        }}
                                            className={`float-right -mt-8 text-lg border w-10 ml-3 rounded-full p-2.5 ${item.isFavorite ? 'bg-gray-400' : 'white'} text-${item.isFavorite ? 'white' : 'black'}`}
                                        ><GrFavorite /></button>

                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">NEW</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.price}</h1>
                                        <p className="leading-relaxed">{item.info}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home;