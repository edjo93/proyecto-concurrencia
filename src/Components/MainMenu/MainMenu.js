import React from 'react'
import { Card } from 'react-bootstrap'


const MainMenu = () => {
    const albumInfo = [
        {
            id: 1,
            name: "Chilombo",
            artist: "Jhené Aiko",
            duration: "2:93",
            image: "https://upload.wikimedia.org/wikipedia/en/1/15/Jhen%C3%A9_Aiko_-_Chilombo.png"
        },
        {
            id: 2,
            name: "Circles",
            artist: "Mac Miller",
            duration: "4:19",
            image: "https://www.ismorbo.com/wp-content/uploads/2020/01/esta-7.jpg"
        },
        {
            id: 3,
            name: "YHLQMDLG",
            artist: "Bad Bunny",
            duration: "5:10",
            image: "https://www.elquintobeatle.com/wp-content/uploads/2020/03/bad-bunny-yhlqmdlg-1.jpeg"
        },
        {
            id: 4,
            name: "evermore",
            artist: "Taylor Swift",
            duration: "4:01",
            image: "https://media.pitchfork.com/photos/5fd26f1b4a647c066bffa94a/1:1/w_320/Taylor-Swift-evermore.jpg"
        },
        {
            id: 5,
            name: "Take Care",
            artist: "Drake",
            duration: "3:01",
            image: "https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg"
        },
        {
            id: 6,
            name: "Avalancha de Exitos",
            artist: "Café Tacvba",
            duration: "6:07",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Avalancha_exitos.jpg/220px-Avalancha_exitos.jpg"
        },
        {
            id: 7,
            name: "evermore",
            artist: "Taylor Swift",
            duration: "4:01",
            image: "https://media.pitchfork.com/photos/5fd26f1b4a647c066bffa94a/1:1/w_320/Taylor-Swift-evermore.jpg"
        },
        {
            id: 8,
            name: "Take Care",
            artist: "Drake",
            duration: "3:01",
            image: "https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg"
        },
        {
            id: 9,
            name: "Avalancha de Exitos",
            artist: "Café Tacvba",
            duration: "6:07",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Avalancha_exitos.jpg/220px-Avalancha_exitos.jpg"
        },
        {
            id: 10,
            name: "evermore",
            artist: "Taylor Swift",
            duration: "4:01",
            image: "https://media.pitchfork.com/photos/5fd26f1b4a647c066bffa94a/1:1/w_320/Taylor-Swift-evermore.jpg"
        },
        {
            id: 11,
            name: "Take Care",
            artist: "Drake",
            duration: "3:01",
            image: "https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg"
        },
        {
            id: 12,
            name: "Avalancha de Exitos",
            artist: "Café Tacvba",
            duration: "6:07",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Avalancha_exitos.jpg/220px-Avalancha_exitos.jpg"
        },
        {
            id: 13,
            name: "Avalancha de Exitos",
            artist: "Café Tacvba",
            duration: "6:07",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Avalancha_exitos.jpg/220px-Avalancha_exitos.jpg"
        },
        {
            id: 14,
            name: "Avalancha de Exitos",
            artist: "Café Tacvba",
            duration: "6:07",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Avalancha_exitos.jpg/220px-Avalancha_exitos.jpg"
        },
    ];

    const renderCard = (card, id) => {
        return (
            <div className="card-columns text-center col d-flex justify-content-center"  >
                <div>
                    <div className="card text-white bg-dark mb-3" key={{ id }} style={{ width: "25rem" }} >
                        <img className="card-img-top" src={card.image} alt="Card image cap" />
                        <div className="card-body">
                            <h3 className="card-text center">{card.name}</h3>
                            <p className="card-text">{card.artist}</p>
                        </div>
                        {/* <a href="#" class="btn btn-primary" ></a> */}
                    </div>
                </div>
            </div >
        )
    }

    return (
        <div className="card-columns " style={{ marginTop: "85px" }}>
            {albumInfo.map(renderCard)}
        </div>
    );


}

export default MainMenu;
