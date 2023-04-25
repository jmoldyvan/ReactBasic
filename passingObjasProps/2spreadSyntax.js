// map a componenent containing the following object(s) used as props 
// we need to reuse the same componet if item has many different properties



// item = {
//     id:1,
//     title: bigboi,
//     rating:1
// },
// {
//     id:2,
//     title: bigboi2,
//     rating:2
// }















































































// import React , {useState} from "react"

// export default function App(){
//     componentItems = item.map((x) => 
//     <Cards 
//             key = {x.id}
//             {...x}
//     />)
    
//     return(
//         <div>
//             {componentItems}
//         </div>
//     )
// }




// export default function App() {
//     const cards = data.map(item => {
//         return (
//             <Card
//                 key={item.id}
//                 {...item}
                
//             />
//         )
//     })        
    
//             // <Hero />
//     return (
//         <div>
//             <Navbar />
//             <section className="list">
//                 {cards}
//             </section>
//         </div>
//     )
// }

// **importnat**

// when using the spread syntax to pass something to a child, or mapping  a
// cvomponent with the spread syntax remember the spread syntax will pass
// each data point, each property in the original object, as a singular
// object

// therefor if we have
// item = {
//     id:1,
//     title: bigboi,
//     etc.
// }

// and we use spread for the object

//     const cards = data.map(item => {
//         return (
//             <Card
//                 key={item.id}
//                 {...item}
                
//             />
//         )
//     })    

//     ^^^this is equal to

//     const cards = data.map(item => {
//         return (
//             <Card
//                 key={item.id}
//                 id={item.id}
//                 title={item.title}
//                 description={item.}
                
//             />
//         )
//     }) 

    