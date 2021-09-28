import React, {  } from 'react'
import './drawerbutton.css'
import { connect } from 'react-redux'



function DrawerButton(props) {


    let buttonClasses = ['toggle-button']
    let lightLineClasses = "toggle-button__burger-light"
    let darkLineClasses = "toggle-button__burger-dark"

    if(props.drawer===true){
        // console.log('btn opened')
        buttonClasses = ['toggle-button', 'open']
    }
//props.drawer? "btn2" : "btn1" buttonClasses.join(' ')
    const clickHandler = () => {
        props.clickbutton()
    }
    return (
            <div className={`${props.drawer? "btn2" : "btn1"} ${buttonClasses.join(' ')}`} onClick={clickHandler}>
                <div className={props.isDarknessStore ? darkLineClasses : lightLineClasses }/>
            </div>
    )
}


const mapStateToProps = state => {
    return {
        isDarknessStore: state.WebsiteInterface.isDark
    }
}
export default connect(mapStateToProps)(DrawerButton)