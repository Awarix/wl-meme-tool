import React from "react";
import trollFace from "../images/troll-face.svg"

export default function Header () {
    return (
        <header>
            <img 
                src={trollFace}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Meme Contest Easy Win</h4>
        </header>
    )
}