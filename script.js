body {
    margin: 0;
    font-family: Arial, sans-serif;
    overflow-x: hidden;
}

/* General Section Styles */
.section {
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    color: white;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

/* First Section (Custom Background Image) */
#section1 {
    height: 100vh;
    background: url('images/background.jpg') no-repeat center center/cover;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
}

#section1 h1 {
    font-size: 3em;
    margin: 0;
}

#section1 p {
    font-size: 1.5em;
    margin-top: 10px;
}

/* Second Section (Two Parts: Black and Dim Black) */
#section2 {
    top: 100vh;
    height: 150vh;
    transition: top 1.2s ease-in-out;
}

#section2.active {
    top: 0;
}

/* First Part of Section 2 (Black Background) */
#section2 .part1 {
    height: 100vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 200px;
}

#section2 .part1 img {
    max-width: 400px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

#section2 .part1 .text {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 150px;
}

#section2 .part1 h1 {
    font-size: 2em;
    margin: 0;
    font-weight: bold;
    color: white;
}

#section2 .part1 p {
    font-size: 1.2em;
    margin-top: 10px;
    line-height: 1.5;
    color: white;
}

/* Second Part of Section 2 (Dim Black Background Below Black) */
#section2 .part2 {
    height: 50vh;
    background-color: #111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: relative;
}

#section2 .part2 h2 {
    font-size: 1.5em;
    margin: 0;
    color: white;
    margin-right: 280px;
}

#section2 .part2 .additional-text {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 20px;
    position: absolute;
    bottom: 110px;
    right: 290px;
}

#section2 .part2 .additional-text p {
    margin: 5px 0;
    font-size: 1em;
    color: white;
}

#section2 .part2 .logo-text {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 173px;
    right: 1220px;
}

#section2 .part2 .logo-text h3 {
    margin: 5px 0;
    font-size: 1.5em;
    color: white;
}

#section2 .part2 .logo-text p {
    margin: 5px 0;
    font-size: 0.9em;
    color: white;
}

#section2 .part2 .logo {
    cursor: pointer;
    position: absolute;
    top: 235px;
    left: 140px;
}

#section2 .part2 .logo img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

/* تصميم للهواتف (أقل من 768px) */
@media (max-width: 768px) {
    /* تعديلات على القسم الأول */
    #section1 h1 {
        font-size: 2em;
    }
    #section1 p {
        font-size: 1em;
    }

    /* تعديلات على القسم الثاني - الجزء الأول */
    #section2 .part1 {
        flex-direction: column;
        padding: 20px;
        text-align: center;
    }
    #section2 .part1 img {
        max-width: 80%;
        margin-bottom: 20px;
    }
    #section2 .part1 .text {
        align-items: center;
        margin-right: 0;
    }

    /* تعديلات على القسم الثاني - الجزء الثاني */
    #section2 .part2 {
        flex-direction: column;
        padding: 20px;
        text-align: center;
    }
    #section2 .part2 h2 {
        margin-right: 0;
    }
    #section2 .part2 .additional-text {
        position: static;
        margin: 20px 0;
    }
    #section2 .part2 .logo-text {
        position: static;
        margin: 20px 0;
    }
    #section2 .part2 .logo {
        position: static;
        margin: 20px 0;
    }
}
