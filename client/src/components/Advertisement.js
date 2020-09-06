import React from 'react'
import logo from '../images/logo.png';
import logoWhite from '../images/logo_white.png';
import avatar from '../images/source4.png';
import cx from 'classnames'
import { VictoryPie  , VictoryAnimation, VictoryTheme, VictoryLabel, VictoryAxis, VictoryVoronoiContainer,VictoryTooltip } from 'victory';
import Button from '@material-ui/core/Button';
import '../styles/components/Charts.scss';
import '../styles/components/Advertisement.scss'
import Ad from './classes/Ad.js'
import { v4 as uuidv4 } from 'uuid';


//function AdPage(props){
    
    export class AdPage extends React.Component{

        constructor(props) {
            super(props)
            this.state = {
                show_dropdown: false,
                photo: props.photo,
                description: props.description
            }
        }

        updateShow = () => {
            this.setState({
                show_dropdown: !this.state.show_dropdown
            })
        }

        render(){
            return (
                <div className="dashboard-box-container half">
                    <div className = "Ad-wrapper">
                    <div className = 'drop_down'>
                        <div className = "ellipsis-wrapper" onClick = {this.updateShow}>
                            <i className ="fas fa-ellipsis-h ellipsis" ></i>
                        </div>
                        <div id = 'drop_container' className = 'dropContainer' style = {{display: this.state.show_dropdown ? 'block' : 'none'}}>
                            <div className = 'edit drop-content'>
                            edit
                            </div>
                            <div className = 'delete drop-content'>
                            delete
                            </div>
                        </div>
                    </div>
                        <span className = "ad-title"></span>
                        <img className="avatar" src={this.state.photo} />
                        <span className="box-title">
                            <div className = "ad-description">
                                {this.state.description}
                            </div> 
                        </span>
                    </div>
                </div>
            )
        }

    }

//}


export default class Advertisement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          expanded: false,
          percent: 0, 
          data: this.getData(0),
          used: 54000.0,
          maximum: 100000.0,
          advertisements: []
        }

        this.state.percent =  ((this.state.used/this.state.maximum) * 100); //Calculate the percentage used
        console.log(this.state.percent)
    }

    componentDidMount() {
        let percent = this.state.percent;

        this.setState({
            percent, data: this.getData(percent)
        });
    }

    onExpandClick = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    addAd = () => {
        let newAd = new Ad;
        console.log(newAd);
        newAd.setDescription = "Two or Four Races of Seven Laps Each at Go-Kart Track (35% Off). 10+ viewed today ... and services. Offer is not eligible for our promo codes or other discounts.";
        newAd.setPhoto = avatar;
        console.log(newAd.getDescription);

        //Push the add into the list of ads
        this.setState(state => ({
            advertisements: this.state.advertisements.concat(newAd)
        }));

        console.log(this.state.advertisements);

    }

    getData(percent) {
        return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
    }

    render() {
        const { expanded } = this.state;

        return (
            <div className="Advertisement-container">
            <div className={cx({
            "sidebar-nav": true,
            "expanded": expanded
            })}>
            <div className="nav-icons">
                <div className={cx({
                "burger-logo": true,
                "expanded": expanded
                })}>
                <div className="burger-menu" onClick={this.onExpandClick}>
                    <span className="burger-bar top" />
                    <span className="burger-bar middle" />
                    <span className="burger-bar bottom" />
                </div>
                <img className={cx({
                    "white-logo": true,
                    "expanded": expanded,
                    })} 
                    src={logoWhite} 
                />
                </div>
                <a className={cx({
                "border": true,
                "expanded": expanded
                })} />
                <div className={cx({
                "settings-container": true,
                "expanded": expanded
                })}>
                <div className="settings-wrapper">
                    <i className="fas fa-columns" />
                    <span>
                    Overview
                    </span>
                </div>
                <div className="settings-wrapper">
                    <i className="far fa-comments" />
                    <span>
                    Reviews
                    </span>
                </div>
                <div className="settings-wrapper">
                    <i className= "fas fa-bullhorn" />
                    <span>
                    Advertisements
                    </span>
                </div>
                <div className="settings-wrapper">
                    <i className="fas fa-percent" />
                    <span>
                    Promotions
                    </span>
                </div>
                <div className="settings-wrapper">
                    <i className="fas fa-users-cog" />
                    <span>
                    Settings
                    </span>
                </div>
                </div>
                <a className={cx({
                "border": true,
                "expanded": expanded
                })} />

                <div className={cx({
                "settings-container": true,
                "expanded": expanded
                })}>

                <div className="copyright-wrapper">
                    <i className="fas fa-copyright" />
                    <span>
                    2020 Nex-ii LLC
                    </span>
                </div>
                    
                </div>

                
            </div>
            </div>
            <div className="dashboard-main">
            <div className="dashboard-header">
                <div className="logo-search">
                <div className={cx({
                    "logo": true,
                    "expanded": expanded
                })}>
                    <img src={logo} />
                </div>
                <div className="search-box">
                    <div className="search-wrapper">
                    <i className="fas fa-search" />
                    <input className="search-field"/>
                    </div>
                    <button className="search-button">
                    <span>
                        Search
                    </span>
                    </button>
                </div>
                </div>
                <div className="user-details-container">
                <i className="notification fas fa-bell" />
                <img className="avatar" src={avatar} />
                <div className="user-details">
                    <span className="name">
                    petrenotpeter
                    </span>
                    <span className="company">
                    Mushroom Kingdom
                    </span>
                </div>
                </div>
            </div>
            <div className={cx({
                "dashboard": true,
                "nav-bar-expanded": expanded
            })}>
                <span className = "overview">
                    Monthly Budget Usage:
                </span>
                <div className = "stats-wrapper">
                    <div className = "stats-block-wrapper">
                        <div className = "stats-block">
                            <svg viewBox="0 0 400 400" width="100%" height="100%">
                                <VictoryPie
                                    standalone={false}
                                    animate={{ duration: 1000 }}
                                    width={400} height={400}
                                    data= {this.state.data}
                                    innerRadius={120}
                                    cornerRadius={25}
                                    labels={() => null}
                                    style={{
                                    
                                    data: { fill: ({ datum }) => {
                                        const color = "green";
                                        return datum.x === 1 ? color : "transparent";
                                    }
                                    }
                                    }}
                                />
                                <VictoryAnimation duration={1000} data={this.state}>
                                    {(newProps) => {
                                        return (
                                            <VictoryLabel
                                            textAnchor="middle" verticalAnchor="middle"
                                            x={200} y={200}
                                            text={`${newProps.percent}%`}
                                            style={{ fontSize: 45 }}
                                            />
                                        );
                                    }}
                                </VictoryAnimation>
                            </svg>
                        </div>
                    </div>
                    <div className = "stats-block-wrapper">
                        <div className = "stats-block">
                        <span className = "stats-title">AMOUNT<br/>SPENT</span>
                            <span  className = "stat-value">${this.state.used} / ${this.state.maximum}</span>
                        </div>
                    </div>
                </div>
                <div className="secondary-title">
                    Ongoing ads:
                    <Button className = "add-ad" variant="contained" color="secondary" onClick = {this.addAd}> + </Button>
                </div>

                
                <div className="dashboard-column">
                    {this.state.advertisements.map((ads) => (
                        <AdPage key = {uuidv4()} description = {ads.getDescription} photo = {ads.getPhoto}></AdPage>
                    ))}
                </div>
            </div>
            </div>
        </div>
        )
    }
}
