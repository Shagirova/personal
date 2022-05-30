import React from "react";
import PersonalTitle from "./PersonalTitle";
import ContactButtons from "./ContactButtons";
import TextContent from "./TextContent";
function MainContent(){
    return (
    <div className="MainContent">
        <PersonalTitle/>
        <ContactButtons/>
        <TextContent/>
    </div>)
}

export default MainContent;