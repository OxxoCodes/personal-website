import React from 'react'
import Hello from "./Hello";
import WhoAmI from "./WhoAmI";
import WhereAmI from "./WhereAmI";
import WhatDoIDo from "./WhatDoIDo";
import ContactMe from "./ContactMe";
import WhatHaveIBuilt from "./WhatHaveIBuilt";
import "./App.css"

function App() {
    return (
        <div className="AppWrapper" style={{'display': 'flex', 'flexDirection':'column', backgroundColor:"#282a36", color:"#F7F9F7", padding:"50px", overflowX:'hidden'}}>
            <Hello />
            <WhoAmI />
            <WhereAmI />
            <WhatDoIDo />
            <WhatHaveIBuilt />
            <ContactMe />
        </div>
    );
}

export default App;
