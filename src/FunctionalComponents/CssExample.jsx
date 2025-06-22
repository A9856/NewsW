// import React from 'react'
// import "../Assests/Css/component.css"
// const mystyle = {
//     heading: {
//         backgroundColor: "green", color: "white", padding: 10,textAlign:"justify"
//     },
//     para: {
//         backgroundColor: "black", color: "white", padding: 10, textAlign: "justify",fontSize:"30px",
//     },
//     red: {
//         backgroundColor: "red"
//     },
//     magenta: {
//         backgroundColor: "magenta"
//     },
//     purple: {
//         backgroundColor: "purple"
//     },
//     yellow:{
//         backgroundColor:"yellow",color:"black"
//     }
// }
// export default function CssExample() {
//     return (
//         <div className="main">
//             <div className="center">
//                 <h1 style={{ backgroundColor: "navy", color: "white", padding: 10, textAlign: "center" }}>CSS Example</h1>
//                 <h2 style={{...mystyle.heading,...mystyle.magenta}}>CSS Example</h2>
//                 <p style={mystyle.heading}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora necessitatibus culpa dignissimos, atque maiores ea beatae? Reprehenderit, harum aliquid voluptas ullam vel cupiditate quibusdam adipisci! Earum, blanditiis tempore! Nihil error quo molestiae, a perferendis eum maxime sed atque minus excepturi omnis deleniti nesciunt id cupiditate amet velit fuga saepe.</p>
//                 <p style={mystyle.para}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eum nam veritatis ad deserunt odit nisi perspiciatis facilis possimus, atque ipsum quidem quod architecto maxime pariatur voluptatum accusamus perferendis dicta.</p>
//                 <p style={{...mystyle.para,...mystyle.purple}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo earum commodi voluptatibus minima maxime soluta fugiat libero a quis perferendis? Debitis laudantium, perspiciatis inventore quasi distinctio dicta! Consequuntur provident natus, placeat iure qui molestiae perferendis eos repellat aut dolorum voluptatem illo? Corporis unde consequuntur, deserunt cupiditate ullam dolores perspiciatis sit.</p>
//                 <p style={{...mystyle.heading,...mystyle.red}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis tempora voluptas quidem voluptate. Tempora id blanditiis deleniti sequi temporibus nisi ipsum omnis necessitatibus quis dicta alias nemo nihil illo corporis vitae est, voluptatem explicabo numquam rem veritatis..</p>
//                 <p style={{...mystyle.para,...mystyle.yellow}}> Cumque iure, sequi odit quae quia cupiditate ratione nesciunt dicta obcaecati totam quibusdam molestias quam inventore distinctio? Ad assumenda expedita ratione sapiente dolor quaerat molestias velit, qui porro beatae dolorem laborum. Recusandae, provident quis eum sapiente error esse assumenda, alias cum eos sed quam nostrum tenetur id quae ratione qui ab tempore. At ipsa numquam id, dolorum rem provident? Laboriosam aut repellendus praesentium</p>
//             </div>
//         </div>
//     )
// }

/* Assets Folder in Css folder then component css link */
import React from 'react'
import "../Assests/Css/component-css.css"
import mystyle from "../Assests/Css/component.module.css"


export default function CssExample() {
    return (
        <div className="main">
            <div className="center">
                <h1>CSS Example</h1>
                <h2>CSS Example</h2>
                <hr/>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora necessitatibus culpa dignissimos, atque maiores ea beatae? Reprehenderit, harum aliquid voluptas ullam vel cupiditate quibusdam adipisci! Earum, blanditiis tempore! Nihil error quo molestiae, a perferendis eum maxime sed atque minus excepturi omnis deleniti nesciunt id cupiditate amet velit fuga saepe.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eum nam veritatis ad deserunt odit nisi perspiciatis facilis possimus, atque ipsum quidem quod architecto maxime pariatur voluptatum accusamus perferendis dicta.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo earum commodi voluptatibus minima maxime soluta fugiat libero a quis perferendis? Debitis laudantium, perspiciatis inventore quasi distinctio dicta! Consequuntur provident natus, placeat iure qui molestiae perferendis eos repellat aut dolorum voluptatem illo? Corporis unde consequuntur, deserunt cupiditate ullam dolores perspiciatis sit.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis tempora voluptas quidem voluptate. Tempora id blanditiis deleniti sequi temporibus nisi ipsum omnis necessitatibus quis dicta alias nemo nihil illo corporis vitae est, voluptatem explicabo numquam rem veritatis..</p>
                <p className={mystyle.test}> Cumque iure, sequi odit quae quia cupiditate ratione nesciunt dicta obcaecati totam quibusdam molestias quam inventore distinctio? Ad assumenda expedita ratione sapiente dolor quaerat molestias velit, qui porro beatae dolorem laborum. Recusandae, provident quis eum sapiente error esse assumenda, alias cum eos sed quam nostrum tenetur id quae ratione qui ab tempore. At ipsa numquam id, dolorum rem provident? Laboriosam aut repellendus praesentium</p>
            </div>
        </div>
    )
}
