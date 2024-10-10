import React, {useState} from "react";
import '../pages-styles/faqs.css'

//IMPORTS DE DATA:
import { faqs } from "../data/faqs";

//IMPORTS DE REACT-ICONS:
import { GrFormUp } from 'react-icons/gr'

const Faqs = () => {

    const [questionIndex, setQuestionIndex] = useState(-1)

    const handleClick = (index) => {
        if (questionIndex === index) {
            setQuestionIndex(-1)
        } else {
            setQuestionIndex(index)
        }
    }

    return (
        <section class="section faqs" id="preguntas">

            <h2 className="heading">
                Preguntas frecuentes
            </h2>
            <div className="faqs-container">
                {
                    faqs.map((faq, i) => {
                        return (
                            <>
                                <button className="question" onClick={() => handleClick(i)}>
                                    {faq.question}
                                    <GrFormUp className={i === questionIndex ? "icon rotate" : "icon"}/>
                                </button>
                                <div className={questionIndex === i ? "answer show" : "answer"}>
                                    {faq.ansswer}
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default Faqs 