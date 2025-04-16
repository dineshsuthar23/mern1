import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        console.log('count1')
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res.data)
                setInfo(res.data)
            })
            .catch((err) => { console.log(err) })
    },[])
    useEffect(() => {
        console.log('count2')
    }, [count2])


    // const [change, setChange] = useState(false)

    // const chn = () => {
    //     if (change) {
    //         setChange(false);
    //     }
    //     else {
    //         setChange(true)
    //     }
    // }

    return (
        <>
        <ul>
            {
                info.map((x)=>(
                    <li key={x.id}>{x.title}</li>
                ))
            }
        </ul>
            

            <h1>Home Page</h1>
            <h1>{count1}</h1>
            <button onClick={() => setCount1(count1 + 1)}>Click me</button>
            <hr />
            <h1>{count2}</h1>
            <button onClick={() => setCount2(count2 + 2)}>Click me</button>



            {/* 
            {change ? <h1>Hii</h1> : <h1>Hello</h1>}

            <button onClick={chn}>Click me</button>
            <ul>
                {
                    arr.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul> */}
        </>
    )
}

export default Home
