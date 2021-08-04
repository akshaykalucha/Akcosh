import React, { Component } from 'react';
import './footermain.css';
import mylogo from './mylogo.svg';
import reactlogo from '../Assets/reactjslogo.png';
// import vercellogo from '../Assets/vercelLogo.png';
import { NavLink } from 'react-router-dom'

class FooterMain extends Component {
    render() { 
        return ( 
            <footer className="FooterMain">
                <div className="footerContent">
                    <div className="footerdisplay">
                        <ul className="footerBrand">
                            <li>
                                <NavLink to="/" className="brandfirst">
                                    <img className="footerimg" src={mylogo} style={{ filter:"brightness(0) invert(1)" }} alt="" />
                                    Akcosh
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="footerBrand">
                            <li><NavLink to="/about/">About</NavLink></li>
                            <li><NavLink to="/contact/">Contact</NavLink></li>
                            <li><NavLink to="/blog/">Blog</NavLink></li>
                            <li><NavLink to="/software/">Software</NavLink></li>
                        </ul>
                        <ul className="footerBrand">
                            <li>Follow me on</li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/lifeofakshy" className="followmeimg followmelogo">
                                    <svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M12.656 3.188q-.523.766-1.266 1.305.008.109.008.328 0 1.016-.297 2.027t-.902 1.941-1.441 1.645-2.016 1.141-2.523.426q-2.117 0-3.875-1.133.273.031.609.031 1.758 0 3.133-1.078-.82-.016-1.469-.504t-.891-1.246q.258.039.477.039.336 0 .664-.086-.875-.18-1.449-.871T.844 5.548v-.031q.531.297 1.141.32-.516-.344-.82-.898T.86 3.736q0-.688.344-1.273.945 1.164 2.301 1.863t2.902.777q-.062-.297-.062-.578 0-1.047.738-1.785t1.785-.738q1.094 0 1.844.797.852-.164 1.602-.609-.289.898-1.109 1.391.727-.078 1.453-.391z"></path></svg>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/akshaykalucha3" className="followmeimg followmelogo">
                                    <svg width="24" height="24" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M6 1q1.633 0 3.012.805t2.184 2.184.805 3.012q0 1.961-1.145 3.527t-2.957 2.168q-.211.039-.312-.055t-.102-.234l.004-.598q.004-.575.004-1.051 0-.758-.406-1.109.445-.047.801-.141t.734-.305.633-.52.414-.82.16-1.176q0-.93-.617-1.609.289-.711-.062-1.594-.219-.07-.633.086t-.719.344l-.297.187q-.727-.203-1.5-.203t-1.5.203q-.125-.086-.332-.211t-.652-.301-.664-.105q-.352.883-.062 1.594-.617.68-.617 1.609 0 .664.16 1.172t.41.82.629.523.734.305.801.141q-.305.281-.383.805-.164.078-.352.117t-.445.039-.512-.168-.434-.488q-.148-.25-.379-.406t-.387-.187l-.156-.023q-.164 0-.227.035t-.039.09.07.109.102.094l.055.039q.172.078.34.297t.246.398l.078.18q.102.297.344.48t.523.234.543.055.434-.027l.18-.031q0 .297.004.691t.004.426q0 .141-.102.234t-.312.055q-1.812-.602-2.957-2.168T.001 7.001q0-1.633.805-3.012T2.99 1.805 6.002 1zM2.273 9.617q.023-.055-.055-.094-.078-.023-.102.016-.023.055.055.094.07.047.102-.016zm.243.266q.055-.039-.016-.125-.078-.07-.125-.023-.055.039.016.125.078.078.125.023zm.234.351q.07-.055 0-.148-.062-.102-.133-.047-.07.039 0 .141t.133.055zm.328.328q.062-.062-.031-.148-.094-.094-.156-.023-.07.062.031.148.094.094.156.023zm.445.196q.023-.086-.102-.125-.117-.031-.148.055t.102.117q.117.047.148-.047zm.493.039q0-.102-.133-.086-.125 0-.125.086 0 .102.133.086.125 0 .125-.086zm.453-.078q-.016-.086-.141-.07-.125.023-.109.117t.141.062.109-.109z"></path></svg>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lifeofakshy" className="followmeimg followmelogo">
                                    <svg width="24" height="24" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M8 7q0-.828-.586-1.414T6 5t-1.414.586T4 7t.586 1.414T6 9t1.414-.586T8 7zm1.078 0q0 1.281-.898 2.18T6 10.078 3.82 9.18 2.922 7t.898-2.18T6 3.922t2.18.898T9.078 7zm.844-3.203q0 .297-.211.508t-.508.211-.508-.211-.211-.508.211-.508.508-.211.508.211.211.508zM6 2.078l-.598-.004q-.543-.004-.824 0t-.754.023-.805.078-.559.145q-.391.156-.688.453t-.453.688q-.086.227-.145.559t-.078.805-.023.754 0 .824.004.598-.004.598 0 .824.023.754.078.805.145.559q.156.391.453.688t.688.453q.227.086.559.145t.805.078.754.023.824 0T6 11.924t.598.004.824 0 .754-.023.805-.078.559-.145q.391-.156.688-.453t.453-.688q.086-.227.145-.559t.078-.805.023-.754 0-.824-.004-.598.004-.598 0-.824-.023-.754-.078-.805-.145-.559q-.156-.391-.453-.688T9.54 2.32q-.227-.086-.559-.145t-.805-.078-.754-.023-.824 0T6 2.078zM12 7q0 1.789-.039 2.477-.078 1.625-.969 2.516t-2.516.969q-.688.039-2.477.039t-2.477-.039q-1.625-.078-2.516-.969T.037 9.477Q-.002 8.789-.002 7t.039-2.477q.078-1.625.969-2.516t2.516-.969Q4.21.999 5.999.999t2.477.039q1.625.078 2.516.969t.969 2.516Q12 5.211 12 7z"></path></svg>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.snapchat.com/akshaykalucha3" className="followmeimg followmelogo">
                                    <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zM32 10.7v14.9c0 2.3-1.9 4.3-4.3 4.3H4.3C1.9 29.9 0 28 0 25.6v-15c0-2.3 1.9-4.3 4.3-4.3H8L8.8 4c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/akshaykalucha/" className="followmeimg followmelogo">
                                    <svg width="24" height="24" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M2.727 4.883v7.742H.149V4.883h2.578zm.164-2.391q.008.57-.395.953t-1.059.383h-.016q-.641 0-1.031-.383t-.391-.953q0-.578.402-.957t1.051-.379 1.039.379.398.957zM12 8.187v4.437H9.43V8.483q0-.82-.316-1.285t-.988-.465q-.492 0-.824.27t-.496.668q-.086.234-.086.633v4.32H4.15q.016-3.117.016-5.055t-.008-2.313l-.008-.375h2.57v1.125h-.016q.156-.25.32-.438t.441-.406.68-.34.895-.121q1.336 0 2.148.887t.813 2.598z"></path></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="FooterEnding">
                    <div className="footerendingcontent">
                        ©
                        <NavLink aria-current="page" className="footerName" to="/">Akcosh</NavLink>
                            2019-2021 Built with
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/react">
                                <img src={reactlogo} alt="" className="reactfooterimg" />
                            </a>
                            Open sourced on
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com">
                                <svg className="reactfooterimg" width="24" height="24" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M6 1q1.633 0 3.012.805t2.184 2.184.805 3.012q0 1.961-1.145 3.527t-2.957 2.168q-.211.039-.312-.055t-.102-.234l.004-.598q.004-.575.004-1.051 0-.758-.406-1.109.445-.047.801-.141t.734-.305.633-.52.414-.82.16-1.176q0-.93-.617-1.609.289-.711-.062-1.594-.219-.07-.633.086t-.719.344l-.297.187q-.727-.203-1.5-.203t-1.5.203q-.125-.086-.332-.211t-.652-.301-.664-.105q-.352.883-.062 1.594-.617.68-.617 1.609 0 .664.16 1.172t.41.82.629.523.734.305.801.141q-.305.281-.383.805-.164.078-.352.117t-.445.039-.512-.168-.434-.488q-.148-.25-.379-.406t-.387-.187l-.156-.023q-.164 0-.227.035t-.039.09.07.109.102.094l.055.039q.172.078.34.297t.246.398l.078.18q.102.297.344.48t.523.234.543.055.434-.027l.18-.031q0 .297.004.691t.004.426q0 .141-.102.234t-.312.055q-1.812-.602-2.957-2.168T.001 7.001q0-1.633.805-3.012T2.99 1.805 6.002 1zM2.273 9.617q.023-.055-.055-.094-.078-.023-.102.016-.023.055.055.094.07.047.102-.016zm.243.266q.055-.039-.016-.125-.078-.07-.125-.023-.055.039.016.125.078.078.125.023zm.234.351q.07-.055 0-.148-.062-.102-.133-.047-.07.039 0 .141t.133.055zm.328.328q.062-.062-.031-.148-.094-.094-.156-.023-.07.062.031.148.094.094.156.023zm.445.196q.023-.086-.102-.125-.117-.031-.148.055t.102.117q.117.047.148-.047zm.493.039q0-.102-.133-.086-.125 0-.125.086 0 .102.133.086.125 0 .125-.086zm.453-.078q-.016-.086-.141-.07-.125.023-.109.117t.141.062.109-.109z"></path></svg>
                            </a>
                            and deployed on
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/vercel">
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEzIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjEwMC45MyUiIHkxPSIxODEuMjgzJSIgeDI9IjQxLjc2OSUiIHkyPSIxMDAlIiBpZD0iYSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRiIgb2Zmc2V0PSIwJSIvPjxzdG9wIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0zNTAgMTUwbDU3IDEwMEgyOTN6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjkzIC0xNTApIiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=" alt="" className="reactfootervercelimg" />
                            </a>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default FooterMain;