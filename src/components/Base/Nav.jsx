import React, { useEffect } from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import { connect } from "react-redux";
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import { setMobile, showDrawer } from '../Store/actions';



function Nav(props){
    const drawerToggleClickHandler = () => {
        props.setDrawer(!props.DrawerOpenStore)
    }

    const backDropClickHandler = () => {
        props.setDrawer(false)

    }
    function resize() {
        let currentHideNav = (window.innerWidth <= 768);
        if (currentHideNav) {
            props.setIsMobile(true)
        }
        else{
            props.setIsMobile(false)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", resize.bind(this));
        resize();
    })
    let backDrop;
    if(props.DrawerOpenStore){
        backDrop = <Backdrop click ={backDropClickHandler} />
    }
    

    if(props.isMobileStore===false){
        return(
            <div>
                <NavDesktop />
            </div>
        )
    }else{
        return(
            <div>
                <NavMobile drawerHandler={props.DrawerOpenStore} click={drawerToggleClickHandler} />
                    {backDrop}
                <SideDrawer unshowsideDrawer={backDropClickHandler} showSidedrawer={props.DrawerOpenStore}  />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        sideDrawer: state.WebsiteInterface.sideDrawerOpen,
        isMobileStore: state.WebsiteInterface.isMobile,
        DrawerOpenStore: state.WebsiteInterface.sideDrawerOpen,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setDrawer: (value) => dispatch(showDrawer(value)),
        setIsMobile: (value) => dispatch(setMobile(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)