import React from 'react'
import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';
import heart from '../assets/heart.png'
import scale from '../assets/scale.png'

const Main = () => {

    function cartNotification() {
        addNotification({
            title: 'Success!',
            subtitle: 'Added item to cart!',
            message: 'Successfully added item to cart!',
            theme: 'light',
            closeButton: "X",
            backgroundTop: "lightgray",
            backgroundBottom: "white",
        });
    }

    function handleNotification(e) {
        e.preventDefault();
        cartNotification();

    }

    const buttons = [
        {
            id: 1,
            content: "Add to cart",
            img: scale,
        },
        {
            id: 2,
            content: "Add to wishlist.",
            img: heart,
        }
    ]

  return (
    <div className="">
        <div className="grid place-items-center h-screen">
            <div className="flex flex-row shadow-2xl w-[800px] p-16 rounded-lg"> 
            <img className="w-[250px] h-[200px] " src="https://www.scan.co.uk/images/infopages/razer_headset/krakenkitty/pink/topimage.png" alt="headset" />
                <div className="py-4">
                    <p className="bg-black text-white text-xs w-[90px] rounded-full text-center h-auto py-[1.5px]">Free shipping
                    </p>

                    <h2 className="flex items-center text-black font-medium text-md md:text-lg max-w-xs relative top-[] py-2">
                        Razer Kraken Kitty Edt Gaming Headset Quartz
                    </h2>

                    <p className="line-through opacity-90 py-4">$1,599</p>   
                    <p className="font-bold text-3xl md:text-4xl">$799.99</p>
                    <p className="text-sm text-gray-400 py-3" >The offer is valid until May 5th as long as their remains item stock! </p>
                

                <div className="flex flex-row items-center justify-center ">
                    <Notifications className="flex place-items-start" />
                    <button onClick={handleNotification} className="w-60 h-10 bg-blue-500 text-white rounded-md text-sm shadow-md shadow-gray-600 cursor-pointer hover:scale-105 duration-300" >
                        Add to cart
                    </button>
                </div>
                <p className="pt-8 font-semibold text-sm"> <span className="px-1">🟢</span> 50+ pcs. in stock.</p>
                    <div className="grid grid-cols-2 " >
                        
                        {
                            buttons.map(({id, content, img}) => (
                                <div className="flex items-center justify-center pt-10 ">
                                    <div className="" >
                                        <button key={id} className="bg-white rounded-md border border-gray-400 flex flex-row items-center justify-center w-48 h-14 hover:scale-105 duration-300 " >
                                            <img src={img} className="max-w-xs px-2" />
                                            {content}
                                        </button>

                                    </div>
                                </div>
                            ))
                        }

                    </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main