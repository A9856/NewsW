// import React, { createContext } from 'react'
// import Child1 from './Child1'
// export const NameContext = createContext();
// export const SalaryContext = createContext();
// export const DesignationContext = createContext();
// export default function Parent() {
//     return (
//         <>
//             <h1>This is Parent Component</h1>
//             <hr />
//             <NameContext.Provider value={"Adil Khan"}>
//                 <SalaryContext.Provider value={135000}>
//                     <DesignationContext.Provider value={"Web Developer"}>
//                         <Child1 />
//                     </DesignationContext.Provider>
//                 </SalaryContext.Provider>
//             </NameContext.Provider>
//         </>
//     )
// }
import React, { createContext, useReducer } from 'react'
import Child1 from './Child1'
import Reducer from './Reducer';
export const NumberContext = createContext();

export default function Parent() {
    let [state, dispatch] = useReducer(Reducer, { num1: 1, num2: 1 })
    return (
        <>
            <h3>This is Context API Example</h3>
            <h3>This is Parent Component</h3>
            <h3>Num1={state.num1}</h3>
            <button onClick={() => dispatch({ type: "INC_NUM1" })}>Increment Num1</button>
            <button onClick={() => dispatch({ type: "DEC_NUM1" })}>decrement Num1</button>
            <h3>Num2={state.num2}</h3>
            <button onClick={() => dispatch({ type: "INC_NUM2" })}>Increment Num2</button>
            <button onClick={() => dispatch({ type: "DEC_NUM2" })}>decrement Num2</button>
            <hr/>
            <NumberContext.Provider value={{ state, dispatch }}>
                <Child1 />
            </NumberContext.Provider>
        </>
    )
}

// Props Drilling क्या है?
// React में Props Drilling तब होता है जब एक कंपोनेंट (component) किसी डेटा (props) को कई स्तरों (levels) से होकर पास करता है ताकि वह डेटा एक गहरे (deeply nested) कंपोनेंट तक पहुँचे।

// उदाहरण:
// मान लीजिए हमारे पास एक Parent (मुख्य) कंपोनेंट है, और हमें डेटा एक Child (बच्चे) कंपोनेंट के अंदर सबसे गहरे लेवल तक भेजना है।

// Code Example (Props Drilling)
// jsx
// Copy
// Edit
// import React from "react";

// const ChildComponent = ({ message }) => {
//   return <h3>Message: {message}</h3>;
// };

// const MiddleComponent = ({ message }) => {
//   return <ChildComponent message={message} />;
// };

// const ParentComponent = () => {
//   const message = "Hello from Parent!";
//   return <MiddleComponent message={message} />;
// };

// export default ParentComponent;
// समस्या क्या है?
// ऊपर दिए गए उदाहरण में, message प्रॉप्स को Parent → Middle → Child तक भेजना पड़ रहा है, जबकि इसे सीधे ChildComponent में इस्तेमाल करना था।

// 👉 यह प्रक्रिया बड़ी और जटिल हो सकती है, खासकर जब कई स्तरों के कंपोनेंट्स हों।
// 👉 हर मध्य (intermediate) कंपोनेंट को बेवजह प्रॉप्स पास करना पड़ता है, भले ही उसे इसकी जरूरत न हो।

// Props Drilling का समाधान

// Context API
// React की Context API का उपयोग करके, हम प्रॉप्स को सीधे किसी भी लेवल के कंपोनेंट में एक्सेस कर सकते हैं।
// उदाहरण:
// jsx
// Copy
// Edit
// import React, { createContext, useContext } from "react";

// const MessageContext = createContext();

// const ChildComponent = () => {
//   const message = useContext(MessageContext);
//   return <h3>Message: {message}</h3>;
// };

// const ParentComponent = () => {
//   return (
//     <MessageContext.Provider value="Hello from Parent!">
//       <ChildComponent />
//     </MessageContext.Provider>
//   );
// };

// export default ParentComponent;


// यहाँ useContext के ज़रिए message को सीधे एक्सेस किया जा सकता है, बिना Props Drilling के।

// State Management (Redux, Zustand, Recoil, आदि)

// जब एप्लिकेशन बहुत बड़ी हो, तब हम Redux जैसे स्टेट मैनेजमेंट टूल का इस्तेमाल कर सकते हैं।
// निष्कर्ष
// Props Drilling एक समस्या है जब प्रॉप्स को कई स्तरों के कंपोनेंट्स में पास करना पड़े।
// इसे Context API या State Management टूल्स का उपयोग करके हल किया जा सकता है।

// अगर आपको कोड समझने में कोई दिक्कत हो तो पूछ सकते हैं! 😊

// You said:
// useContext work explain in react js
// ChatGPT said:

// React में useContext Hook का उपयोग और कार्यप्रणाली
// useContext एक React Hook है जो Context API का उपयोग करके डेटा को सीधे किसी भी कंपोनेंट में एक्सेस करने की सुविधा देता है, बिना Props Drilling के।

// Context API और useContext का उपयोग कैसे करें?
// Step 1: एक Context बनाना (createContext)
// सबसे पहले हमें createContext का उपयोग करके एक नया Context Object बनाना होगा।

// jsx
// Copy
// Edit
// import React, { createContext } from "react";

// // Context बनाना
// const MyContext = createContext();
// Step 2: Context Provider बनाना और डेटा पास करना
// अब हम Provider का उपयोग करके डेटा को शेयर करेंगे।

// jsx
// Copy
// Edit
// const MyProvider = ({ children }) => {
//   const user = { name: "Rahul", age: 25 };

//   return (
//     <MyContext.Provider value={user}>
//       {children}
//     </MyContext.Provider>
//   );
// };
// 👉 MyContext.Provider से हम user डेटा को सभी चाइल्ड कंपोनेंट्स को पास कर सकते हैं।

// Step 3: useContext से डेटा एक्सेस करना
// अब किसी भी चाइल्ड कंपोनेंट में useContext का उपयोग करके डेटा को एक्सेस कर सकते हैं।

// jsx
// Copy
// Edit
// import React, { useContext } from "react";
// import { MyContext } from "./MyProvider"; // Context को इम्पोर्ट करें

// const ChildComponent = () => {
//   const user = useContext(MyContext); // Context से डेटा प्राप्त करें

//   return (
//     <div>
//       <h2>Name: {user.name}</h2>
//       <p>Age: {user.age}</p>
//     </div>
//   );
// };
// Step 4: Provider को App में Wrap करना
// अब हमें Provider को App.js में रैप करना होगा ताकि सभी चाइल्ड कंपोनेंट्स डेटा एक्सेस कर सकें।

// jsx
// Copy
// Edit
// import React from "react";
// import MyProvider from "./MyProvider"; // Provider को इम्पोर्ट करें
// import ChildComponent from "./ChildComponent"; // Child Component

// const App = () => {
//   return (
//     <MyProvider>
//       <ChildComponent />
//     </MyProvider>
//   );
// };

// export default App;
// कैसे काम करता है?
// MyContext से एक Context Object बनाया जाता है।
// MyProvider में Provider का उपयोग करके डेटा (user) पास किया जाता है।
// useContext(MyContext) से ChildComponent सीधे डेटा एक्सेस कर सकता है, बिना Props Drilling के।
// फायदे (useContext के Benefits)
// ✅ Props Drilling से बचाता है – बार-बार props पास करने की जरूरत नहीं होती।
// ✅ Code Clean और Simple बनाता है – आसानी से डेटा शेयर कर सकते हैं।
// ✅ State Management को आसान बनाता है – Redux जैसे बड़े स्टेट मैनेजमेंट टूल की जरूरत कम होती है।

// अगर आपको कोई और डिटेल चाहिए, तो पूछ सकते हैं! 😊