import React, { Component } from 'react'
import { Card } from 'react-bootstrap'


class Albums extends Component {
    constructor(props) {
        super(props)
        this.state = { web3: null, accounts: null };
    }

    MainMenu = () => {
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
}

export default Albums;
