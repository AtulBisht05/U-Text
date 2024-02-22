import React, { useState } from 'react'

const About = () => {
    
    //change state from dark mode to light mode
    const [lightMode, darkMode] = useState({

        color: "white",
        backgroundColor: "#2a2b30"

    })

    //change text of mode button from dark to light & vice versa
    const [btnText, setBtnText] = useState("Light")

    //function to change dark mode to light mode & vice versa
    const toggleMode = () => {

        if (lightMode.color === "white") {

            darkMode({

                color: "black",
                backgroundColor: "white"

            });

            setBtnText('Dark');
        }
        else {
            darkMode({

                color: "white",
                backgroundColor: "#2a2b30"

            });

            setBtnText('Light');
        }
    }


  return (
    <div className="container my-4">
            <div className="container d-flex" style={lightMode}>
                <div className="container my-4">
                    <h1>About Us</h1>
                </div>
                <div className='container'>
                    <img src="../a.png" className="card-img" alt="U-Text" />
                </div>
                <div>
                    <button type="button" className="btn btn-secondary btn-sm mx-2 my-2" onClick={toggleMode}>{btnText}</button>
                </div>

            </div>
            <div className="container" style={lightMode}>

                <div className="card" style={lightMode}>
                    <div className="card-body" style={lightMode}>
                        <h4 className="card-title" style={lightMode}>U-Text</h4>
                        <p className="card-text" style={lightMode}>
                            <h5>What is U-Text?</h5>
                            Apart from counting words and characters, our editor can help you to improve word
                            choice and writing style.
                        </p>
                        <p style={lightMode}> To check word count, simply place your cursor into the text box above
                            and start typing. You'll see the number of characters and words increase or decrease
                            as you type, delete, and edit them. </p>
                        <p style={lightMode}>You can also copy and paste text from another program over into the editor above.
                            Knowing the word count of a text can be important.</p>
                        <p style={lightMode}>For example, if an author has to write a minimum or maximum amount of words for an
                            article, essay, report, story, book, paper, you name it.
                            U-Text will help to make sure its word count reaches a specific requirement or
                            stays within a certain limit.</p>

                        <p className="card-text"><small className="text-body-primary" style={lightMode}>Disclaimer: We strive to make our tools
                            as accurate as possible but we cannot guarantee it will always be so.</small></p>
                    </div>

                </div>
            </div>
        </div>

  )
}

export default About
