import { useEffect } from "react";
import { useState } from "react";

const api = 'https://api.quotable.io/quotes/random'

const QuoteBox = () => {
    let [quote, setQuote] = useState('')
    let [author, setAuthor] = useState('')
    let [isloading, setLoading] = useState(true)
    
   async function GetQuote() {
        let res = await fetch(api, {
            method : "GET",

        });
        let response = await res.json()

        setAuthor(response[0].author)
        setQuote(response[0].content)
        
        

        console.log(quote)
        console.log(author)
    }
    
    useEffect(() => {
        GetQuote()
        setLoading(false)
    }, [])

    return (
        <div className="flex flex-col bg-gradient-to-r from-amber-500 to-pink-500 w-[50%] m-auto rounded-sm	p-3" id="quote-box">
            {
                isloading ? (
                    <div>Loading</div>
                ) : (
                    <>
                    <div className="text-white"  id="text">{quote}</div>
                    <br></br>
                    <div className="text-white" id="author">{author}</div>
                    </>
                )
            }
            <div className="flex justify-between">
                <a href="https://www.twitter.com/intent/tweet" id="tweet-quote" target="_blank">
                    <img width="30" height="30" src="https://img.icons8.com/office/30/twitter.png" alt="twitter"/>

</a>
            <button onClick={GetQuote} id="new-quote"> Generate </button>
            </div>
        </div>
       
       
    )

}

export default QuoteBox