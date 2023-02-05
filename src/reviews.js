import React,{useState} from "react";
import data from "./data";
import "./index.css"

const Reviews = ()=>{
    const [index,setIndex] = useState(0)
    const {id,image,job,name,text} = data[index]

    const nextSlide =()=>{
        setIndex((index)=>{
            let newNumber = index + 1
            return checkNumber(newNumber)
        })
    }
    const prevSlide =()=>{
        setIndex((index)=>{
            let newNumber = index - 1
            return checkNumber( newNumber)
        })
    }

    const checkNumber = (number)=>{
        if(number > data.length - 1){
            return 0
        }
        else if(number < 0){
            return data.length - 1
        }else{
            return number
        }
    }

        function random(){
            let random = Math.floor(Math.random() * data.length)
            if(random === index){
               random = index + 1
            }
            setIndex(checkNumber(random))
           
        }
    return(
       <section className="container" key={id}>
        <div className="image-container">
        <img src={image} alt={name} />
        </div>
        <h4>{name}</h4>
        <p className="job">{job}</p>
        <div className="text">
            <p >{text}</p>
        </div>
        <div className="btns">
        <button onClick={prevSlide} className="prev">Prev</button>
        <button onClick={nextSlide} className="next">Next</button>
        </div>
       <button onClick={random} className="random">Random Reviews</button>
       </section>
    
        
    )
}

export default Reviews