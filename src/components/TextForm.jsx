import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TextForm = (props) => {
    const [text, setText] = useState()


    const handleOnChange = (event) => {

        setText(event.target.value.replace(/(?<=(?:^|[.?!])\W*)[a-z]/g, i => i.toUpperCase()))

    }

    // //function to change first letter of each sentence capital

    // const sentenceFirstLetterToUpper = (text) => {

    //     let newText = text.replace(/(?<=(?:^|[.?!])\W*)[a-z]/g, i => i.toUpperCase())
    //     setText(newText)

    //     props.showAlert("First letter of each Letter change to Uppercase", "success");

    // }


    //function to change text to upper case
    const changeToUpper = () => {

        let newText = typeof text === 'string' ? text.toUpperCase() : ''
        setText(newText)

        props.showAlert("Text Converted to UpperCase", "success");

    }

    //function to change text to Lower case
    const changeToLower = () => {

        let newText = typeof text === 'string' ? text.toLowerCase() : ''
        setText(newText)

        props.showAlert("Text Converted to LowerCase", "success");

    }

    //function to copy text 
    const copyText = () => {

        // let copyText = document.getElementById("Textarea")
        // copyText.select()
        navigator.clipboard.writeText(copyText)
        // navigator.clipboard.writeText(copyText.value)
        // document.getSelection().removeAllRanges()

        props.showAlert("Text copy in clipboard", "success");

    }

    //function to remove extra space text 
    const removeSpace = () => {

        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))

        props.showAlert("Removed Extra Spaces from Text", "success");

    }

    //function to clear text 
    const clearText = () => {

        setText("")

        props.showAlert("Cleared Text", "success");

    }


    //function to Count Sentence
    const countSentences = (text) => {

        return typeof text === 'string' ? text.split(/[.?!]/g).filter(Boolean).length : '';
    }

    //function to count Paragraphs 
    const countParagraphs = (text) => {

        return typeof text === 'string' ? text.split(/\n\s*/).filter(Boolean).length : '';

    }

    const numberOfWords = (text) => {

        return typeof text === 'string' ? text.trim().split(/\s+/).filter(Boolean).length : '';

    }

    const numberOfLetters = (text) => {

        return typeof text === 'string' ? text.trim().length : '';

        // return text.split(" ").filter((e)=>{return e.length!==0}).length

    }
  return (
    <div className='container' style={{ backgroundColor: props.mode === 'dark' ? '#2a2b30' : 'white', color: props.mode === 'light' ? 'black' : 'white' }}>
            <div className='container  my-2'>

                <label htmlFor="Textarea" className="form-label text-primary"><h3>{props.heading}</h3></label>
                <textarea className="form-control " value={text} onChange={handleOnChange} id="Textarea" rows="3" style={{ backgroundColor: props.mode === 'dark' ? '#2a2b30' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                <button disable={text.length === 0} className="btn btn-secondary btn-sm my-2 mx-2" onClick={changeToUpper}>A-Z</button>
                <button disable={text.length === 0} className="btn btn-secondary btn-sm my-2 mx-2" onClick={changeToLower}>a-z</button>
                <button disable={text.length === 0} className="btn btn-secondary btn-sm my-2 mx-2" onClick={copyText}>Copy</button>
                {/* <button className="btn btn-secondary btn-sm my-4 mx-2" onClick={sentenceFirstLetterToUpper}>Paragraph First Sentence to Upper case</button> */}
                <button disable={text.length === 0} className="btn btn-secondary btn-sm my-2 mx-2" onClick={removeSpace}>Remove extra Space</button>
                <button disable={text.length === 0} className="btn btn-secondary btn-sm my-2 mx-2" onClick={clearText}>Clear</button>

            </div>
            <div className="container my-2">
                <div className="card" style={{ backgroundColor: props.mode === 'dark' ? '#2a2b30' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} >
                    <div className="card-body">
                        <h4 className="card-title text-primary">
                            Text Preview
                            {/* {0.008 * text.split(" ").filter((e)=>{return e.length !==0}).length} minutes read */}
                        </h4>
                        <p className="card-text" >{text}</p>
                        <p className="card-text"> {text.length > 0 ? { text } : "Nothing to Preview"}</p>
                        <p className="card-text" >{ 0.008 * text.length } minutes read</p>

                    </div>
                </div>
            </div>
            <div className="container my-5 mb-5" >
                <div className="card-body">
                    <h3 className="card-title text-primary">Word Counter </h3>
                    <p className="card-text" >
                        <table className="table table-borderless text-center" >
                            <thead>
                                <tr >
                                    <th scope="col" style={{ backgroundColor: props.mode === 'dark' ? '#2a2b30' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>Words</th>
                                    <th scope="col" style={{ backgroundColor: props.mode === 'dark' ? '#2a2b30' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>Characters</th>
                                    <th scope="col" style={{ backgroundColor: props.mode === 'dark' ? '#2a2b30' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}> Sentences</th>
                                    <th scope="col" style={{ backgroundColor: props.mode === 'dark' ? '#2a2b30' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}> Paragraphs</th>

                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <th style={{ backgroundColor: props.mode === 'dark' ? '#2a2b30' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}> {numberOfWords(text)} </th>
                                    <td style={{ backgroundColor: props.mode === 'dark' ? '#2a2b30' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}> {numberOfLetters(text)} </td>
                                    <td style={{ backgroundColor: props.mode === 'dark' ? '#2a2b30' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}> {countSentences(text)} </td>
                                    <td style={{ backgroundColor: props.mode === 'dark' ? '#2a2b30' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}> {countParagraphs(text)} </td>

                                </tr>

                            </tbody>
                        </table>
                    </p>
                </div>

            </div>
        </div>
  )
}

export default TextForm

TextForm.prototype = {
    heading: PropTypes.string.isRequired
}